/* =====================================================================
   STUDY-WITH-ME!  ·  SUBJECT LIBRARY STRUCTURE   (data/library.js)
   ---------------------------------------------------------------------
   Organises every subject area into sections ("modules").
   Lessons themselves still live in the main page's `topics` list; here
   you only say which section each lesson belongs to (by its concept name).

   STATUS (use these four only):
     available  Available       – the resource works and can be used now
     dev        In development  – work is actively underway
     planning   Planning phase  – the subject is being designed
     planned    Planned         – the subject is on the future roadmap
   Only use "available" once lessons/exercises are really built and checked.

   MODULE FIELDS
     id       web address of the section, e.g. "economics-macro" (#economics-macro)
     name, status, desc
     topics   concept names of existing lessons in this section
     links    other existing resources for this section [{label, href}]
     preview  (planned/planning) what the section is intended to cover — a
              preview only, not course material
     note     an optional extra line shown on the card
   ADD A SECTION: copy a module block. ADD A SUBJECT AREA: copy an area block
   and add the matching subject to the main page's `subjects` list.
   ===================================================================== */
window.SWM_LIBRARY={
 statuses:{
  available:{label:"Available",note:"The resource is functional and accessible."},
  dev:{label:"In development",note:"Work is actively underway."},
  planning:{label:"Planning phase",note:"The subject is being designed."},
  planned:{label:"Planned",note:"The subject is on the future roadmap."}
 },
 areas:[
  {key:"law",name:"Law",modules:[
   {id:"law-current",name:"Current Law modules",status:"available",
    desc:"Foundations of law and Legal Interpretation: sources of law, the Constitution and how courts read legislation.",
    topics:["Contract law","Constitutional supremacy","Sources of law","The unitary approach","Section 39(2)","Presumptions"],
    links:[{label:"Legal Interpretation quiz",href:"#quiz-legal-interpretation"},{label:"Legal Interpretation written practice",href:"#written-legal-interpretation"},{label:"Work Through It: a handshake deal for land",href:"#wt-law-land"}]},
   {id:"law-contract",name:"Law of Contract",status:"planned",
    desc:"Explore the foundations of contractual agreements, legal obligations and the principles governing enforceable contracts.",
    preview:["How agreements are formed","What makes a contract valid and enforceable","Contract terms and obligations","Breach of contract and remedies"],
    note:"The existing introductory lesson “What makes a deal binding?” stays in the current Law modules."}
  ]},
  {key:"economics",name:"Economics",modules:[
   {id:"economics-micro",name:"Microeconomics",status:"available",
    desc:"How individuals, households and firms make choices, and how markets bring buyers and sellers together.",
    topics:["Opportunity cost","Supply and demand"],
    links:[{label:"Economics Chapter 1 quiz",href:"#quiz-economics"}],
    note:"Includes the introductory ideas (scarcity, choice and opportunity cost) that first-year economics starts with."},
   {id:"economics-macro",name:"Macroeconomics",status:"planning",
    desc:"Understand the economy as a whole, including inflation, unemployment, economic growth, national income and economic policy.",
    topics:["Inflation"],
    preview:["National income and economic growth","Inflation and purchasing power","Unemployment","Monetary and fiscal policy"],
    note:"One existing lesson, Inflation, is a macroeconomics topic, so it sits here and stays available. New lessons and quizzes will follow once the section is designed."}
  ]},
  {key:"accounting",name:"Accounting",
   landingNote:"Study-With-Me! currently provides Accounting 1B resources. Accounting 1A foundational learning materials are planned and will be introduced as the library develops. We believe a strong understanding of the fundamentals makes more advanced Accounting easier to learn.",
   modules:[
   {id:"accounting-1a",name:"Accounting 1A: Foundations",status:"planned",
    desc:"Build the essential Accounting knowledge needed before progressing to more advanced topics.",
    preview:["The accounting cycle from source documents to statements","Recording transactions with confidence","Core concepts and terminology","Building good accounting habits"],
    note:"Foundational content is being developed. It’s the recommended starting point, not a requirement: Accounting 1B resources stay open to everyone."},
   {id:"accounting-1b",name:"Accounting 1B",status:"available",
    desc:"Lessons, interactive accounting tables, calculations and written practice.",
    topics:["Accounting equation","Debits and credits","Income statement","Bank reconciliation","Debtors and creditors reconciliation","Depreciation and asset disposal","Year-end adjustments","Partnerships","Close corporations","Incomplete records"],
    links:[{label:"Accounting practice (interactive tables)",href:"#accounting-practice"},{label:"Accounting written practice",href:"#written-accounting"},{label:"Work Through It: equipment bought on credit",href:"#wt-acc-equipment"}]}
  ]},
  {key:"business",name:"Business",modules:[
   {id:"business-management",name:"Business Management",status:"available",
    desc:"How organisations plan, lead, organise and grow, and the people who make it happen.",
    topics:["Job design","SWOT analysis","Leadership styles"],},
   {id:"business-statistics",name:"Business Statistics",status:"planned",
    desc:"Develop the skills to interpret data, understand statistical concepts and apply quantitative reasoning to business decisions.",
    preview:["Describing and summarising data","Probability basics","Sampling and estimation","Using data to support business decisions"]}
  ]}
 ],
 future:"Later, with My Study Space and Work Through It, you’ll be able to upload notes and exam breakdowns for a specific subject, generate practice questions, spot gaps in foundational knowledge and get step-by-step tutoring. These features are not available yet."
};
