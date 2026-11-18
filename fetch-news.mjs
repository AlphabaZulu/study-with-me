/* Study-With-Me! news fetcher  ·  node tools/news/fetch-news.mjs
   Reads the authorised feeds in tools/news/sources.json and writes ONLY:
     data/news.js           (what the website reads)
     tools/news/state.json  (caching headers and per-source status)
   Never stores article text or images: headline, link, time, labels only.
   Safety: validates everything, keeps the last good articles for a source
   that fails, refuses to replace a non-empty feed with an empty one, and
   writes files atomically. No dependencies, no API keys.
   Test mode: NEWS_FIXTURES=<folder> reads <sourceId>.xml from that folder
   instead of the internet (NEWS_FIXTURES_FAIL=id1,id2 simulates outages). */
import fs from 'node:fs'; import path from 'node:path'; import crypto from 'node:crypto'; import vm from 'node:vm';
const ROOT=path.resolve(path.dirname(new URL(import.meta.url).pathname),'..','..');
const P=f=>path.join(ROOT,f);
const CFG=JSON.parse(fs.readFileSync(P('tools/news/sources.json'),'utf8'));
const CATS=JSON.parse(fs.readFileSync(P('tools/news/categories.json'),'utf8'));
const NOW=process.env.NEWS_NOW?new Date(process.env.NEWS_NOW):new Date();
const FIX=process.env.NEWS_FIXTURES,FAIL=(process.env.NEWS_FIXTURES_FAIL||'').split(',').filter(Boolean);
const UA='StudyWithMeNewsBot/1.0 (free educational website; headline-and-link display only)';
const MAX_BYTES=3*1024*1024,TIMEOUT=20000,CAT_IDS=new Set(CATS.rules.map(r=>r.id));
const log=(...a)=>console.log(...a);
/* ---------- read previous output ---------- */
function readPrev(){try{const ctx={window:{}};vm.runInNewContext(fs.readFileSync(P('data/news.js'),'utf8'),ctx);const n=ctx.window.SWM_NEWS;return n&&Array.isArray(n.items)?n:null}catch(e){return null}}
const prev=readPrev()||{items:[],sources:[]};
let state={};try{state=JSON.parse(fs.readFileSync(P('tools/news/state.json'),'utf8'))}catch(e){}
/* ---------- tiny RSS / Atom parser ---------- */
const ENT={amp:'&',lt:'<',gt:'>',quot:'"',apos:"'",nbsp:' ',ndash:'–',mdash:'—',rsquo:'’',lsquo:'‘',rdquo:'”',ldquo:'“',hellip:'…'};
const decode=s=>s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi,(m,e)=>e[0]==='#'?String.fromCodePoint(e[1].toLowerCase()==='x'?parseInt(e.slice(2),16):parseInt(e.slice(1),10)):(ENT[e.toLowerCase()]??m));
const text=s=>decode(String(s||'').replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g,'$1').replace(/<[^>]*>/g,' ')).replace(/\s+/g,' ').trim();
const tag=(xml,names)=>{for(const n of names){const m=xml.match(new RegExp(`<${n}(\\s[^>]*)?>([\\s\\S]*?)</${n}>`,'i'));if(m)return m[2]}return ''};
const tags=(xml,n)=>[...xml.matchAll(new RegExp(`<${n}(?:\\s[^>]*)?>([\\s\\S]*?)</${n}>`,'gi'))].map(m=>text(m[1]));
function atomLink(xml){const ls=[...xml.matchAll(/<link\b([^>]*)\/?>/gi)].map(m=>m[1]);for(const a of ls){if(/rel=["']alternate["']/i.test(a)||!/rel=/i.test(a)){const h=a.match(/href=["']([^"']+)["']/i);if(h)return decode(h[1])}}return ''}
function parseFeed(xml){if(!/<(rss|feed|rdf:RDF)\b/i.test(xml))throw new Error('not an RSS or Atom feed');const isAtom=/<feed\b/i.test(xml)&&!/<rss\b/i.test(xml);const blocks=[...xml.matchAll(isAtom?/<entry\b[\s\S]*?<\/entry>/gi:/<item\b[\s\S]*?<\/item>/gi)].map(m=>m[0]);
 return blocks.map(b=>({title:text(tag(b,['title'])),link:isAtom?atomLink(b):(text(tag(b,['link']))||atomLink(b)),guid:text(tag(b,['guid','id'])),date:text(tag(b,['pubDate','published','dc:date','updated'])),labels:[...tags(b,'category'),...[...b.matchAll(/<category\b[^>]*term=["']([^"']+)["']/gi)].map(m=>decode(m[1]))]}))}
/* ---------- validation helpers ---------- */
function cleanLink(raw,src){if(!raw)return null;let u;try{u=new URL(raw.trim(),src.home)}catch(e){return null}if(!src.allowedHosts.includes(u.hostname))return null;if(u.protocol==='http:')u.protocol='https:';if(u.protocol!=='https:')return null;['utm_source','utm_medium','utm_campaign','utm_content','utm_term'].forEach(k=>u.searchParams.delete(k));u.hash='';return u.toString()}
function cleanDate(raw){if(!raw)return null;const d=new Date(raw.trim());if(isNaN(d))return null;if(d-NOW>6*3600e3)return null;if(NOW-d>CFG.maxAgeDays*864e5)return null;return d.toISOString()}
const norm=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const has=(hay,words)=>words.some(w=>hay.includes(w.toLowerCase()));
function categorise(title,labels,src){const hay=' '+(title+' '+labels.join(' ')).toLowerCase()+' ';const esc=w=>w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');const rx=w=>{w=w.toLowerCase();const stem=w.endsWith('*');return new RegExp(`(^|[^a-z])${esc(stem?w.slice(0,-1):w)}${stem?'':'(?![a-z])'}`)};const out=CATS.rules.filter(r=>r.words.some(w=>rx(w).test(hay))).map(r=>r.id);if(!out.length)out.push(src.defaultCategory);return [...new Set(out)].slice(0,3)}
/* ---------- fetch ---------- */
async function getFeed(src){if(FIX){if(FAIL.includes(src.id))throw new Error('simulated outage');const f=path.join(FIX,src.id+'.xml');if(!fs.existsSync(f))throw new Error('fixture missing');return {status:200,body:fs.readFileSync(f,'utf8'),etag:null,lastModified:null}}
 const st=state[src.id]||{};const h={'User-Agent':UA,'Accept':'application/rss+xml, application/atom+xml, application/xml;q=0.9, text/xml;q=0.8'};if(st.etag)h['If-None-Match']=st.etag;if(st.lastModified)h['If-Modified-Since']=st.lastModified;
 const ac=new AbortController();const t=setTimeout(()=>ac.abort(),TIMEOUT);try{const r=await fetch(src.url,{headers:h,signal:ac.signal,redirect:'follow'});if(r.status===304)return {status:304};if(!r.ok)throw new Error('HTTP '+r.status);const len=+r.headers.get('content-length')||0;if(len>MAX_BYTES)throw new Error('feed too large');const body=await r.text();if(body.length>MAX_BYTES)throw new Error('feed too large');return {status:200,body,etag:r.headers.get('etag'),lastModified:r.headers.get('last-modified')}}finally{clearTimeout(t)}}
/* ---------- main ---------- */
const results=[],fresh=[];
for(const src of CFG.sources.filter(s=>s.enabled)){const st=state[src.id]||{};const rec={id:src.id,name:src.name,home:src.home,status:'error',lastAttempt:NOW.toISOString(),lastSuccess:st.lastSuccess||null,count:0,error:null};
 try{const r=await getFeed(src);
  if(r.status===304){rec.status='ok';rec.lastSuccess=NOW.toISOString();rec.note='No change since last check';const kept=prev.items.filter(i=>i.source===src.id);rec.count=kept.length;fresh.push(...kept)}
  else{const raw=parseFeed(r.body);let dropped=0;const items=[];
   for(const it of raw){const title=it.title.slice(0,300);const link=cleanLink(it.link||it.guid,src);const published=cleanDate(it.date);const hay=(title+' '+it.labels.join(' ')).toLowerCase();
    if(!title||!link||!published){dropped++;continue}
    if(src.exclude.length&&has(hay,src.exclude)){dropped++;continue}
    if(src.include.length&&!has(hay,src.include)){dropped++;continue}
    const cats=categorise(title,it.labels,src);items.push({id:crypto.createHash('sha1').update(link).digest('hex').slice(0,16),title,link,published,source:src.id,publisher:src.name,categories:cats})}
   if(!raw.length)throw new Error('feed contained no items');
   rec.status='ok';rec.lastSuccess=NOW.toISOString();rec.count=items.length;rec.dropped=dropped;fresh.push(...items);
   state[src.id]={etag:r.etag||null,lastModified:r.lastModified||null,lastSuccess:rec.lastSuccess}}
 }catch(e){rec.error=String(e.message||e).slice(0,200);const kept=prev.items.filter(i=>i.source===src.id);rec.count=kept.length;rec.note=kept.length?'Showing the last articles retrieved successfully':'No articles retrieved yet';fresh.push(...kept)}
 state[src.id]={...(state[src.id]||{}),lastAttempt:rec.lastAttempt,lastError:rec.error};results.push(rec);log(`${src.id}: ${rec.status}${rec.error?' ('+rec.error+')':''}, ${rec.count} items`)}
/* merge with history, de-duplicate by link id and by same headline from same publisher */
const byId=new Map();for(const i of [...fresh,...prev.items.filter(p=>CFG.sources.some(s=>s.enabled&&s.id===p.source))]){if(!byId.has(i.id))byId.set(i.id,i)}
const seenTitle=new Set();let items=[...byId.values()].filter(i=>cleanDate(i.published)).sort((a,b)=>b.published.localeCompare(a.published)).filter(i=>{const k=i.source+'|'+norm(i.title);if(seenTitle.has(k))return false;seenTitle.add(k);return true}).slice(0,CFG.maxItems);
/* validate every item before writing */
const bad=items.filter(i=>!/^[a-f0-9]{16}$/.test(i.id)||!i.title||!/^https:\/\//.test(i.link)||isNaN(new Date(i.published))||!i.categories.every(c=>CAT_IDS.has(c)));
if(bad.length){console.error('Validation failed for',bad.length,'items. Nothing written.');process.exit(1)}
results.forEach(r=>{r.count=items.filter(i=>i.source===r.id).length});
const anyOk=results.some(r=>r.status==='ok');
if(!items.length&&prev.items.length){console.error('Refusing to replace existing articles with an empty feed.');process.exit(1)}
const out={schema:1,mode:anyOk?'automatic':'failing',generatedAt:NOW.toISOString(),lastSuccess:anyOk?NOW.toISOString():(prev.lastSuccess||null),topics:CATS.topics,sources:results,items};
/* skip the commit when nothing changed and the last refresh is under 3 hours old */
const sig=o=>JSON.stringify({i:(o.items||[]).map(x=>x.id),s:(o.sources||[]).map(s=>[s.id,s.status,s.count])});
const recent=prev.lastSuccess&&(NOW-new Date(prev.lastSuccess))<3*3600e3;
let changed=true;if(prev.items&&sig(prev)===sig(out)&&recent&&prev.mode===out.mode){changed=false;log('No changes; last refresh is recent. Nothing written.')}
const atomic=(f,s)=>{const tmp=P(f)+'.tmp';fs.writeFileSync(tmp,s);fs.renameSync(tmp,P(f))};
if(changed){atomic('data/news.js','/* Generated by tools/news/fetch-news.mjs. Do not edit by hand. */\nwindow.SWM_NEWS='+JSON.stringify(out,null,1)+';\n');atomic('tools/news/state.json',JSON.stringify(state,null,1)+'\n');log(`Wrote ${items.length} articles.`)}
if(process.env.GITHUB_OUTPUT)fs.appendFileSync(process.env.GITHUB_OUTPUT,`changed=${changed}\n`);
