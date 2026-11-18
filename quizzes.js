/* =====================================================================
   STUDY-WITH-ME!  ·  QUIZ LIBRARY DATA   (data/quizzes.js)
   ---------------------------------------------------------------------
   Every chapter quiz on the site comes from this one file.
   The quiz system reads it automatically: no other code needs changing.

   ADD A SUBJECT   Copy a subject block { id, name, … chapters:[ ] }.
                   A subject with an empty chapters list shows "Coming soon".
                   id    : short web-safe name, e.g. "taxation"
                   page  : (optional) subject page it also appears on:
                           economics, business, accounting or law
                   style : card colour: sage, pink, yellow, lilac or blue
                   art   : a few characters shown on the card

   ADD A CHAPTER   Copy a chapter block inside "chapters:[ … ]".
                   id:"ch2", number:2, title:"…", difficulty:"Beginner",
                   timeLimit:null (untimed), source:"…" (optional credit line)

   QUESTION TYPES
     type:"single"  options:["…","…"], answer: 0   (0 = A, 1 = B, 2 = C…)
     type:"multi"   options:[…],       answer: [0,1,3]  (ALL must be picked)
     type:"tf"      answer: true  or  answer: false
   Each question also takes:
     q:"question text", hint:"optional nudge", explain:"shown after submit"

   REMOVE          Delete the question, chapter or subject block.
   Keep the commas between blocks, and the quotes around text.
   ===================================================================== */
window.SWM_QUIZZES=[
 {id:"economics",name:"Economics",page:"economics",style:"sage",art:"This or that?",
  desc:"Chapter quizzes on the core ideas of economics.",
  chapters:[
   {id:"ch1",number:1,title:"What Economics Is All About",difficulty:"Beginner",timeLimit:null,
    questions:[
     {type:"single",q:"Why is scarcity a fundamental economic problem?",
      options:["Resources are limited compared with human wants.","People have no way to make choices.","Only low-income households face shortages.","Resources have no alternative uses."],
      answer:0,hint:"Think about whether there is ever enough of everything for everyone.",
      explain:"Scarcity exists because limited resources cannot satisfy every human want."},
     {type:"single",q:"You have two free hours and choose to study instead of attending a concert you would otherwise have enjoyed. What is your opportunity cost?",
      options:["The price of your textbooks","The enjoyment of the concert you gave up","The marks you might earn","The total time available tomorrow"],
      answer:1,hint:"Opportunity cost is about what you give up, not what you pay or gain.",
      explain:"Opportunity cost is the value of the best alternative sacrificed when making a choice."},
     {type:"single",q:"A community can produce either 100 bags of maize or 20 baskets of fruit using all its resources. What does its production possibilities frontier illustrate?",
      options:["The maximum attainable combinations of the two goods","The prices consumers pay for the two goods","The amount of money the community earns","The quantity of goods imported from elsewhere"],
      answer:0,hint:"The frontier marks the edge of what the community can make with what it has.",
      explain:"The production possibilities frontier illustrates the maximum combinations of goods that can be produced using available resources and technology efficiently."},
     {type:"single",q:"Which topic is an example of microeconomics?",
      options:["South Africa's overall inflation rate","The country's total unemployment rate","How a bakery sets the price of bread","The growth rate of national output"],
      answer:2,hint:"“Micro” means small: look for one business or one market, not the whole country.",
      explain:"Microeconomics studies individual consumers, businesses and markets."},
     {type:"tf",q:"Positive economics focuses on statements about economic conditions that can be tested against evidence.",
      answer:true,hint:"Ask yourself: is this about what is, or about what should be?",
      explain:"Positive economics describes economic conditions and relationships that can be evaluated using evidence."},
     {type:"single",q:"Which statement is an example of normative economics?",
      options:["The price of petrol increased last month.","South Africa should increase spending on education.","Higher prices can reduce quantity demanded.","The unemployment rate is measured through surveys."],
      answer:1,hint:"Look for words that express an opinion, like “should” or “ought”.",
      explain:"Normative economics involves value judgments about what ought to happen."},
     {type:"multi",q:"Which of the following are examples of capital goods?",
      options:["A factory's production machine","An industrial delivery vehicle","A sandwich purchased for lunch","Equipment used to manufacture furniture"],
      answer:[0,1,3],hint:"For each option, ask: is it used to make or deliver something else? There is more than one correct answer.",
      explain:"Capital goods are used in producing or distributing other goods and services. A sandwich purchased for personal consumption is a consumer good."},
     {type:"single",q:"A student receives a monthly allowance of R1,000, which increases to R1,100. What is the percentage increase?",
      options:["5%","9.1%","10%","11%"],
      answer:2,hint:"Percentage change = change ÷ original amount × 100.",
      explain:"The increase is R100. Dividing R100 by the original R1,000 and multiplying by 100 gives 10%."},
     {type:"tf",q:"In economic analysis, ceteris paribus means that every relevant variable changes at the same time.",
      answer:false,hint:"The Latin phrase translates as “other things being…”",
      explain:"Ceteris paribus means other things being equal. Economists hold other relevant factors constant to examine a particular relationship."},
     {type:"single",q:"A community can produce 10 chairs and 0 tables, or 8 chairs and 2 tables. Moving from the first combination to the second, what is the opportunity cost of producing 2 tables?",
      options:["2 chairs","8 chairs","10 chairs","2 additional chairs"],
      answer:0,hint:"Compare the number of chairs in the two combinations.",
      explain:"Producing 2 tables requires sacrificing 2 chairs."}
    ]}
  ]},
 {id:"legal-interpretation",name:"Legal Interpretation",page:"law",style:"pink",art:"§ 39(2)",
  desc:"Chapter quizzes on how courts read and apply legislation.",
  chapters:[
   {id:"ch1",number:1,title:"General Introduction",difficulty:"Beginner",timeLimit:null,
    source:"Original questions based on the introductory concepts in Christo Botha, Statutory Interpretation: An Introduction for Students (6th ed.).",
    questions:[
     {type:"single",q:"What is the main purpose of statutory interpretation?",
      options:["To determine the meaning and application of legislation.","To allow judges to replace Parliament.","To create new legislation without legal authority.","To remove legislation that is unpopular."],
      answer:0,hint:"Interpretation works with legislation that already exists. It doesn’t make or remove it.",
      explain:"Statutory interpretation is concerned with understanding and applying legislation within the legal framework."},
     {type:"single",q:"Which of the following is an example of legislation?",
      options:["An informal agreement between friends.","An Act passed by Parliament.","A personal opinion expressed by a judge.","An academic article about the law."],
      answer:1,hint:"Legislation is law that has been formally enacted by a body with law-making power.",
      explain:"Acts of Parliament are a form of enacted legislation."},
     {type:"single",q:"What is meant by common law in the introductory classification of South African legal sources?",
      options:["Law created exclusively through municipal by-laws.","Law consisting only of Acts of Parliament.","Legal principles developed outside the legislative process and recognised as law.","Rules that apply only to international organisations."],
      answer:2,hint:"Common law is contrasted with enacted law. Think about where it comes from, if not a legislature.",
      explain:"Common law consists of legal principles that developed outside the formal enactment of legislation and became recognised as law."},
     {type:"single",q:"What is the difference between “law” and “a law” in the terminology used in Chapter 1?",
      options:["They always mean exactly the same thing.","“Law” refers only to criminal law, while “a law” refers to civil law.","“Law” refers only to court judgments.","“Law” refers broadly to the legal system and its sources, while “a law” can refer to a particular enacted statute."],
      answer:3,hint:"Notice the small word “a”. Does it make the meaning broader or narrower?",
      explain:"The broader concept of law includes multiple sources, whereas a law may refer to a specific written enactment."},
     {type:"tf",q:"Municipal by-laws can form part of South African legislation.",
      answer:true,hint:"Think about the different levels of government that can enact written law.",
      explain:"Legislation includes different forms of enacted law, including Acts, provincial legislation, regulations and municipal by-laws."},
     {type:"single",q:"In legal writing, what does the word “Act” with a capital A generally refer to in the textbook’s terminology?",
      options:["Any action performed by a public official.","A statute enacted by Parliament or a provincial legislature.","An informal instruction from a government employee.","Any conduct by a private individual."],
      answer:1,hint:"The capital letter signals a formal document, not everyday conduct.",
      explain:"An Act is a formal legislative enactment, while an act with a lowercase a can refer to conduct or action."},
     {type:"multi",q:"Which of the following are recognised sources of South African law discussed in Chapter 1?",
      options:["Common law","Legislation","Indigenous customary law","Personal preferences of a legal practitioner"],
      answer:[0,1,2],hint:"For each option, ask whether courts recognise it as binding law. There is more than one correct answer.",
      explain:"South African law draws from multiple recognised sources, including legislation, common law, indigenous customary law and case law. Personal preferences are not an independent source of law."},
     {type:"single",q:"Why should a law student understand the structure and technical features of legislation before interpreting it?",
      options:["Because these features replace the need to consider legal meaning.","Because only the title of an Act has legal significance.","Because they help the student locate, understand and apply legislative provisions correctly.","Because they allow students to disregard the Constitution."],
      answer:2,hint:"Think of knowing how a statute is put together as a map for finding your way through it.",
      explain:"Understanding the categories, components and technical structure of legislation supports accurate interpretation and application."},
     {type:"tf",q:"Every source of South African law must be an Act passed by Parliament.",
      answer:false,hint:"Recall the different sources of South African law introduced in this chapter.",
      explain:"South African law also includes common law, indigenous customary law and case law, among other recognised sources."},
     {type:"single",q:"A student is reading a municipal by-law and wants to understand its legal meaning. Which approach best reflects the introductory purpose of statutory interpretation?",
      options:["Ignore the wording and rely only on personal opinion.","Assume that all municipal by-laws are invalid.","Treat the by-law as an informal suggestion.","Examine the legislative text and its relevant legal context to determine its meaning and application."],
      answer:3,hint:"A good interpreter starts with the text, but doesn’t read it in isolation.",
      explain:"Statutory interpretation involves examining legislative wording and the relevant legal context to understand how a provision operates."}
    ]}
  ]
 },
 {id:"accounting",name:"Accounting",page:"accounting",style:"yellow",art:"Dr | Cr",
  desc:"Chapter quizzes on recording, reporting and analysing financial information.",
  chapters:[]  /* Coming soon: add chapters here when the questions are ready */
 },
 {id:"business-management",name:"Business Management",page:"business",style:"lilac",art:"S W O T",
  desc:"Chapter quizzes on how organisations are planned, led and managed.",
  chapters:[]  /* Coming soon: add chapters here when the questions are ready */
 }
];
