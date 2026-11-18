/* =====================================================================
   STUDY-WITH-ME!  ·  THE STUDY NOTICEBOARD   (data/noticeboard.js)
   ---------------------------------------------------------------------
   Every notice on the Noticeboard (and the 3 newest on the home page)
   comes from this file. There is no public editing screen: you edit
   this file, or ask Claude to update it.

   EACH NOTICE
     id        unique, e.g. "upd-2026-11-17-pulse"   (never reuse an id)
     title, description (short, shown on the note), details (optional, longer)
     category  "update" | "announcement" | "focus" | "tip" | "date" | "connect"
     status    optional: "available" | "dev" | "soon" | "planning" | "planned"
     date      optional, "YYYY-MM-DD". Only use dates that are confirmed.
     link      optional {label, href}  (site pages start with #, e.g. "#quizzes")
     visible   true to show, false to hide without deleting
     archived  true to move it off the board (kept here for your records)
     order     lower numbers show first (for notices without a date)

   HOME PAGE PREVIEW: shows the 3 newest visible "announcement" and
   "update" notices that have a date.

   "What's Coming Soon?" is built automatically from the subject library
   (data/library.js) and My Study Space (data/studyspace.js), so its
   statuses always match the rest of the site. Extra items can be added
   in comingSoonExtra.
   ===================================================================== */
window.SWM_NOTICEBOARD={
 title:"The Study Noticeboard",
 subtitle:"What’s new, what’s next, and what’s happening at Study-With-Me!",
 comingSoonExtra:[],
 notices:[
  /* ---------- LATEST UPDATES (genuine, confirmed changes) ---------- */
  {id:"upd-2026-11-18-newsfeed",category:"update",status:"dev",date:"2026-11-18",visible:true,order:0,
   title:"Automatic economic news feed built",description:"Headlines from official sources will appear in The Economy Explained once the website is published. It isn’t running yet.",
   details:"The feed is designed to check the South African Reserve Bank and other official sources about every 30 minutes and show each headline with its publisher, publication time and a link to the original. It will only be described as live once it has retrieved real articles and refreshed automatically.",
   link:{label:"Open The Economy Explained",href:"#economy-explained"}},
  {id:"upd-2026-11-18-economy",category:"update",status:"dev",date:"2026-11-18",visible:true,order:0,
   title:"The Economy Explained added",description:"Current affairs for Economics and Business Management, with SARB Rate Watch and step-by-step explainers.",
   details:"Each explainer links to its original source, separates confirmed facts from forecasts and our own analysis, and gives Economics and Business views, practice questions and discussion prompts. Articles are checked by hand. There is no live news feed yet.",
   link:{label:"Open The Economy Explained",href:"#economy-explained"}},
  {id:"upd-2026-11-17-videos",category:"update",status:"available",date:"2026-11-17",visible:true,order:1,
   title:"Videos now live on YouTube",description:"The Videos tab has been retired. Watch every Study-With-Me! video on our YouTube channel.",
   details:"To keep the site fast and focused on practice, video players have been removed from the website. The YouTube channel link is in the footer of every page.",
   link:{label:"Visit our YouTube Channel",href:"https://www.youtube.com/@Study-With-Me-g8f"}},
  {id:"upd-2026-11-17-pulse",category:"update",status:"dev",date:"2026-11-17",visible:true,order:2,
   title:"SA Economic Pulse added",description:"A scrolling ticker of key South African economic indicators on the Economics and Business Management pages.",
   details:"Tap any figure for an explanation tailored to the subject you’re studying. Figures are checked by hand from official sources and are not live yet: the live data connection is in development.",
   link:{label:"See it on the Economics page",href:"#economics"}},
  {id:"upd-2026-11-16-library",category:"update",status:"available",date:"2026-11-16",visible:true,order:3,
   title:"Subject library reorganised",description:"Subjects are now split into clear sections: Microeconomics, Accounting 1B and more, each with a status.",
   details:"Every subject area now shows its sections with an honest status: Available, In development, Planning phase or Planned. Existing lessons, quizzes and practice all stayed where students can reach them.",
   link:{label:"Browse the subjects",href:"#subjects"}},
  {id:"upd-2026-11-16-studyspace",category:"update",status:"soon",date:"2026-11-16",visible:true,order:4,
   title:"My Study Space previews",description:"A first look at My Notes, Exam Breakdown, Smart Revision and My Study Plan.",
   details:"These are previews only. None of these features upload files or analyse anything yet.",
   link:{label:"See what’s planned",href:"#my-study-space"}},
  {id:"upd-2026-11-16-wti",category:"update",status:"available",date:"2026-11-16",visible:true,order:5,
   title:"Work Through It: guided preview",description:"A step-by-step tutor for two sample questions: an accounting entry and a law scenario.",
   details:"The tutor follows pre-written, checked steps for these two questions. Uploading your own paper and live AI tutoring are planned, not available yet.",
   link:{label:"Try Work Through It",href:"#work-through-it"}},
  {id:"upd-2026-11-14-accounting",category:"update",status:"available",date:"2026-11-14",visible:true,order:6,
   title:"Accounting Practice launched",description:"14 interactive exercises: journals, T-accounts, VAT, inventory, statements and bank reconciliations.",
   details:"Fill in real accounting tables and get cell-by-cell feedback with partial marks. More exercises will be added topic by topic.",
   link:{label:"Start practising",href:"#accounting-practice"}},
  {id:"upd-2026-11-14-written",category:"update",status:"available",date:"2026-11-14",visible:true,order:7,
   title:"Written Practice launched",description:"Long questions with model-answer outlines, marking memorandums and self-assessment.",
   details:"Includes 5 Legal Interpretation Chapter 1 questions and 3 Accounting questions. The memorandums are labelled as drafts until they’ve been checked against the source material.",
   link:{label:"Open Written Practice",href:"#written"}},
  {id:"upd-2026-11-14-quizzes",category:"update",status:"available",date:"2026-11-14",visible:true,order:8,
   title:"Quiz Library opened",description:"Chapter quizzes for Economics (Chapter 1) and Legal Interpretation (Chapter 1).",
   details:"Each quiz has 10 questions with hints, a results screen and a full answer review with explanations.",
   link:{label:"Open the Quiz Library",href:"#quizzes"}},
  {id:"upd-2026-11-14-refresh",category:"update",status:"available",date:"2026-11-14",visible:true,order:9,
   title:"A fresh new layout",description:"New navigation, flashcards, study resources and study tools (Pomodoro timer and checklist).",
   details:"Every lesson now also appears as a study note, as flashcards and as practice questions.",
   link:{label:"See the study tools",href:"#tools"}},

  /* ---------- ANNOUNCEMENTS ---------- */
  {id:"ann-2026-11-17-pulse-hand",category:"announcement",date:"2026-11-17",visible:true,order:1,
   title:"Economic Pulse figures are checked by hand",description:"The ticker isn’t live data yet. Each figure shows its period, source and the date it was checked.",
   details:"Exchange rates and GDP growth show “Awaiting verified data” until they can be confirmed. The repo and prime rates will be checked again after the SARB’s decision on 19 November 2026.",
   link:{label:"View the Economic Pulse",href:"#economics"}},
  {id:"ann-2026-11-17-youtube",category:"announcement",date:"2026-11-17",visible:true,order:2,
   title:"Find our videos on YouTube",description:"The website no longer has a Videos tab. All videos are on the Study-With-Me! YouTube channel.",
   link:{label:"Visit our YouTube Channel",href:"https://www.youtube.com/@Study-With-Me-g8f"}},
  {id:"ann-2026-11-16-wti-preview",category:"announcement",status:"dev",date:"2026-11-16",visible:true,order:3,
   title:"Work Through It is a preview",description:"For now, the tutor works with two sample questions. Uploading your own papers is still being developed.",
   link:{label:"See the plans in My Study Space",href:"#my-study-space"}},
  {id:"ann-2026-11-14-drafts",category:"announcement",date:"2026-11-14",visible:true,order:4,
   title:"About the draft memorandums",description:"Written Practice memorandums marked “Draft” haven’t yet been checked against the textbook. Use them as a guide, not as official answers.",
   link:{label:"Open Written Practice",href:"#written"}},

  /* ---------- THIS WEEK'S FOCUS (suggestions, not compulsory) ---------- */
  {id:"focus-1",category:"focus",visible:true,order:1,title:"Revise one difficult topic",description:"Pick the topic you’ve been avoiding and read its study note.",link:{label:"Study resources",href:"#resources"}},
  {id:"focus-2",category:"focus",visible:true,order:2,title:"Complete a practice quiz",description:"Ten questions, no time limit.",link:{label:"Quiz Library",href:"#quizzes"}},
  {id:"focus-3",category:"focus",visible:true,order:3,title:"Try an Accounting calculation",description:"Work out cost of sales and gross profit.",link:{label:"Periodic inventory exercise",href:"#ap-periodic"}},
  {id:"focus-4",category:"focus",visible:true,order:4,title:"Practise structuring an essay",description:"Walk through a law scenario using IRAC.",link:{label:"Work Through It: IRAC",href:"#wt-law-land"}},

  /* ---------- STUDY TIP OF THE WEEK ---------- */
  {id:"tip-active-recall",category:"tip",visible:true,order:1,title:"Test yourself before you re-read",
   description:"Close your notes and write down everything you remember about one topic. Then check what you missed.",
   details:"Trying to remember something (instead of just reading it again) makes it stick better, and the gaps show you exactly what to study next. Flashcards and practice quizzes work the same way.",
   link:{label:"Try it with flashcards",href:"#flashcards"}},

  /* ---------- IMPORTANT DATES (confirmed only) ---------- */
  {id:"date-2026-11-19-mpc",category:"date",date:"2026-11-19",visible:true,order:1,
   title:"SARB interest-rate decision",description:"The Reserve Bank’s Monetary Policy Committee announces its repo rate decision.",
   details:"Confirmed on the South African Reserve Bank’s list of upcoming announcements. After this decision, the Economic Pulse repo and prime rates will be checked and updated.",
   link:{label:"South African Reserve Bank",href:"https://www.resbank.co.za/en/home/what-we-do/monetary-policy/monetary-policy-committee"}},
  {id:"date-2027-01-28-mpc",category:"date",date:"2027-01-28",visible:true,order:2,
   title:"Next SARB interest-rate decision",description:"The first Monetary Policy Committee announcement of 2027.",
   details:"Confirmed on the South African Reserve Bank’s list of upcoming announcements.",
   link:{label:"South African Reserve Bank",href:"https://www.resbank.co.za/en/home/what-we-do/monetary-policy/monetary-policy-committee"}},

  /* ---------- STAY CONNECTED (verified links only) ---------- */
  {id:"connect-youtube",category:"connect",visible:true,order:1,title:"Visit our YouTube Channel",description:"Visual explanations, mind maps and infographics.",link:{label:"Visit our YouTube Channel",href:"https://www.youtube.com/@Study-With-Me-g8f"}},
  {id:"connect-tiktok",category:"connect",visible:true,order:2,title:"Follow us on TikTok",description:"Quick study tips: @study.withme39",link:{label:"Follow on TikTok",href:"https://www.tiktok.com/@study.withme39"}}
 ]
};
