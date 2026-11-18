/* Study-With-Me! data checker  ·  node tools/check-freshness.mjs [YYYY-MM-DD]
   1. VALIDATES data/economy.js (required fields, real dates, https links,
      known categories, indicators that exist in data/pulse.js).
   2. FLAGS what is due for a manual update: Economic Pulse figures past their
      reviewBy date, and the SARB Rate Watch once the next MPC date has passed.
   It never edits content and never fetches news: a person checks the
   official source and updates the data files.
   Writes freshness-report.md. Exit code 1 = validation errors, 0 otherwise.
   Sets the GitHub Actions output "due=true" when something needs updating. */
import fs from 'node:fs'; import vm from 'node:vm'; import path from 'node:path';
const root=path.resolve(path.dirname(new URL(import.meta.url).pathname),'..');
const load=f=>{const ctx={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'data',f),'utf8'),ctx);return ctx.window};
const today=process.argv[2]||new Date().toLocaleDateString('en-CA',{timeZone:'Africa/Johannesburg'});
const {SWM_PULSE:P}=load('pulse.js'),{SWM_ECONOMY:E}=load('economy.js');
const errors=[],due=[];
const isDate=d=>/^\d{4}-\d{2}-\d{2}$/.test(d||'')&&!isNaN(new Date(d));
const isUrl=u=>/^https:\/\/[^\s]+$/.test(u||'');
const pulseIds=new Set(P.indicators.map(i=>i.id)),cats=new Set(E.categories.map(c=>c.id)),seen=new Set();
for(const a of E.articles){const w=m=>errors.push(`Article "${a.id||'?'}": ${m}`);
 if(!a.id||!/^[a-z0-9-]+$/.test(a.id))w('id must be lowercase letters, numbers and hyphens');
 if(seen.has(a.id))w('duplicate id');seen.add(a.id);
 for(const k of ['headline','summary'])if(!a[k])w(`missing ${k}`);
 if(!isDate(a.published))w('published is not a valid YYYY-MM-DD date');
 if(!isDate(a.retrieved))w('retrieved is not a valid YYYY-MM-DD date');
 if(isDate(a.published)&&a.published>today)w('published date is in the future');
 if(isDate(a.published)&&isDate(a.retrieved)&&a.retrieved<a.published)w('retrieved is earlier than published');
 if(!a.source||!a.source.name||!isUrl(a.source.url))w('source needs a name and an https link');
 if(a.official&&!isUrl(a.official.url))w('official link must be https');
 if(!(a.categories||[]).length)w('needs at least one category');
 (a.categories||[]).forEach(c=>{if(!cats.has(c))w(`unknown category "${c}"`)});
 (a.indicators||[]).forEach(i=>{if(!pulseIds.has(i))w(`unknown Pulse indicator "${i}"`)});
 if(!(a.facts||[]).length)w('needs at least one confirmed fact');
 (a.facts||[]).forEach((f,n)=>{if(!f.text||!f.src)w(`fact ${n+1} needs text and src`)});
 (a.forecasts||[]).forEach((f,n)=>{if(!f.text||!f.who)w(`forecast ${n+1} needs text and who`)});
 const x=a.explain||{};for(const k of ['simple','why','econ','biz','example'])if(!x[k])w(`explain.${k} missing`);
 if(!x.sa||!x.sa.households||!x.sa.businesses||!x.sa.economy)w('explain.sa needs households, businesses and economy');
 if(!(x.next||[]).length)w('explain.next needs at least one scenario');
 if(!(a.questions||[]).length)w('needs at least one practice question');
}
for(const i of P.indicators){if(!i.pending&&i.reviewBy&&today>i.reviewBy)due.push(`Economic Pulse: **${i.name}** (${i.display}, ${i.period}) was due for review by ${i.reviewBy}. Check: ${i.source&&i.source.url||'official source'}`);
 if(i.pending)due.push(`Economic Pulse: **${i.name}** is still awaiting a verified figure.`)}
const R=E.rateWatch;if(R&&R.nextDecision&&today>R.nextDecision)due.push(`SARB Rate Watch: the MPC decision scheduled for **${R.nextDecision}** has passed. Update rateWatch in data/economy.js and the repo/prime figures in data/pulse.js from https://www.resbank.co.za/`);
const report=[`# Study-With-Me! data check — ${today}`,'',`## Validation`,errors.length?errors.map(e=>`- ❌ ${e}`).join('\n'):'- ✅ data/economy.js passed all checks.','',`## Due for a manual update`,due.length?due.map(d=>`- ${d}`).join('\n'):'- Nothing is due.',''].join('\n');
fs.writeFileSync(path.join(root,'freshness-report.md'),report);console.log(report);
if(process.env.GITHUB_OUTPUT)fs.appendFileSync(process.env.GITHUB_OUTPUT,`due=${due.length?'true':'false'}\n`);
process.exit(errors.length?1:0);
