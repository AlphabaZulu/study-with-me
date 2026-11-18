/* =====================================================================
   STUDY-WITH-ME!  ·  MY STUDY SPACE — FEATURE PREVIEWS (data/studyspace.js)
   ---------------------------------------------------------------------
   These are previews of features that are NOT live yet. Nothing here
   uploads files or collects information.

   status: "soon" (Coming Soon) | "dev" (In Development) | "planned" (Planned)
           | "live" (Available — only once a feature is built and tested)
   To change a status, edit the "status" field. To add a feature, copy one.
   today: links to existing site features students can use in the meantime.
   ===================================================================== */
window.SWM_STUDYSPACE={
 statuses:{
  soon:{label:"Coming soon",note:"Designed and next in line to be built."},
  dev:{label:"In development",note:"Being built now. Parts may appear gradually."},
  planned:{label:"Planned",note:"On the roadmap. The design is still being shaped."},
  live:{label:"Available",note:"Ready to use."}
 },
 features:[
  {id:"notes",name:"My Notes",status:"soon",icon:"📝",style:"sage",
   desc:"Upload your study notes and turn what you’ve learned into personalised quizzes, flashcards and revision questions.",
   preview:["Upload PDF, Word documents and images","Turn your notes into quizzes and flashcards","Choose the chapters and difficulty you want"],
   capabilities:[
    "Upload PDF, Word documents and images.",
    "Extract text from typed or handwritten notes, where the technology can read it reliably.",
    "Identify subjects, topics and key concepts.",
    "Generate original practice questions grounded in your notes.",
    "Create flashcards and revision summaries.",
    "Choose difficulty levels.",
    "Point out possible gaps in your notes, without inventing missing content.",
    "Select specific chapters or sections to revise.",
    "Review and correct the extracted text before anything is generated."
   ],
   promise:"Every generated question will show which part of your notes it came from. Anything not based on your notes will be clearly labelled as a supplementary example.",
   today:[{label:"Flashcards",href:"#flashcards"},{label:"Study resources",href:"#resources"},{label:"Quiz Library",href:"#quizzes"}]},
  {id:"exam",name:"Exam Breakdown",status:"soon",icon:"🧭",style:"yellow",
   desc:"Upload your exam scope or test breakdown and discover what to focus on before assessment day.",
   preview:["See the topics and question types in your exam","Spot important topics missing from your notes","Get a suggested revision order"],
   capabilities:[
    "Upload examination guidelines, test scopes or breakdown documents.",
    "Identify the topics covered.",
    "Extract mark allocations and question types, where your document provides them.",
    "Identify essay, calculation, short-answer and scenario-based sections.",
    "Show a visual overview of what the assessment requires.",
    "Compare the exam scope with your uploaded notes.",
    "Highlight important topics that are missing from your notes.",
    "Recommend a revision order.",
    "Suggest suitable practice activities."
   ],
   promise:"If your document doesn’t state a mark allocation or question type, Exam Breakdown will say so, not guess.",
   today:[{label:"Exam countdown (Study tools)",href:"#tools"},{label:"Written practice",href:"#written"}]},
  {id:"revision",name:"Smart Revision",status:"dev",icon:"🎯",style:"lilac",
   desc:"Practise what matters most with questions tailored to your notes, revision history and learning needs.",
   preview:["Questions based on your notes and exam scope","Track recurring mistakes over time","Difficulty that adapts as you improve"],
   capabilities:[
    "Generate original practice questions based on your uploaded notes.",
    "Connect revision questions to your exam breakdown.",
    "Track the questions you’ve attempted and your progress.",
    "Identify recurring mistakes.",
    "Recommend topics that need more practice.",
    "Adjust question difficulty based on how you actually perform.",
    "Offer short quizzes, interactive Accounting tables and essay practice.",
    "Explain answers in simple, student-friendly language."
   ],
   promise:"Smart Revision will only talk about your strengths and weaknesses once it has real results from your own practice. Until then, it won’t pretend to know.",
   today:[{label:"Quiz Library",href:"#quizzes"},{label:"Accounting practice",href:"#accounting-practice"},{label:"Work Through It",href:"#work-through-it"}]},
  {id:"plan",name:"My Study Plan",status:"planned",icon:"🗓️",style:"blue",
   desc:"Build a realistic revision plan based on your upcoming assessments and the topics you need to cover.",
   preview:["Enter your exam dates and study time","Daily or weekly revision activities","A plan that adjusts as you progress"],
   capabilities:[
    "Enter your exam dates.",
    "Record how much time you have available to study.",
    "Prioritise topics by exam weighting, your confidence and your performance.",
    "Recommend daily or weekly revision activities.",
    "Build in rest and review time.",
    "Track the activities you complete.",
    "Adjust the plan as you progress."
   ],
   promise:"Your plan will include rest. A plan you can actually stick to beats a perfect one you can’t.",
   today:[{label:"Study checklist",href:"#tools"},{label:"Pomodoro timer",href:"#tools"},{label:"Exam countdown",href:"#tools"}]}
 ],
 workflow:[
  {icon:"📝",title:"Upload your notes",text:"A student adds their Accounting notes to My Notes."},
  {icon:"🧭",title:"Add the exam breakdown",text:"They upload the test scope. Both documents are checked by the student."},
  {icon:"🔎",title:"Topics are matched",text:"The topics in the notes and the exam scope are lined up, with sources shown."},
  {icon:"🎯",title:"A suggestion, with reasons",text:"Bank reconciliation is suggested: it carries a high mark allocation in the scope, and the student has lost marks on similar practice questions."},
  {icon:"🧑‍🏫",title:"Work Through It",text:"The student chooses Work Through It, and the tutor guides them step by step through an interactive bank reconciliation."}
 ],
 principles:[
  {icon:"🔒",title:"Private by default",text:"Your uploads will be visible only to you, with clear access controls."},
  {icon:"🗑️",title:"You stay in control",text:"Delete or download your material and data at any time."},
  {icon:"🚫",title:"Never published",text:"Your notes, exam papers and generated questions will never be added to the public Quiz Library."},
  {icon:"💬",title:"Clear about AI",text:"Before uploads are switched on, we’ll explain exactly which services process your content and how long it’s kept."}
 ],
 roadmap:[
  {phase:"Now",title:"Feature previews",text:"This page: what’s coming and how it will work. Your existing tools keep working as they do today.",state:"done"},
  {phase:"Next",title:"My Study Plan (basic)",text:"Exam dates, study time and a simple weekly plan, saved in your browser. This needs no uploads and no AI.",state:"next"},
  {phase:"Then",title:"Private uploads and text extraction",text:"My Notes and Exam Breakdown uploads, with privacy controls, and text you can check and correct.",state:"later"},
  {phase:"Then",title:"AI-assisted questions with sources",text:"Questions, flashcards and summaries generated from your notes, each linked to where it came from.",state:"later"},
  {phase:"Later",title:"Smart Revision and Work Through It together",text:"Recommendations based on your real results, linked straight into the guided tutor.",state:"later"}
 ]
};
