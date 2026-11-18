/* =====================================================================
   STUDY-WITH-ME!  ·  WRITTEN PRACTICE DATA   (data/written.js)
   ---------------------------------------------------------------------
   Every Written Practice question, model-answer outline and marking
   memorandum on the site comes from this one file.

   ADD A SUBJECT   Copy a subject block { id, name, … chapters:[ ] }.
                   An empty chapters list shows "Coming soon".
                   page  : (optional) subject page it also appears on:
                           economics, business, accounting or law
                   style : sage, pink, yellow, lilac or blue

   ADD A CHAPTER   Copy a chapter block. Set status:"draft" while a
                   memorandum still needs checking against the source,
                   and status:"reviewed" once you have checked it.
                   sourceNote is shown at the top of every memorandum.

   ADD A QUESTION  Copy a question block. Fields:
     id, title, type (e.g. "Application scenario"), marks,
     words  : suggested length shown to students, e.g. "350–500"
     prompt : the question. Use \n\n for a new paragraph.
     scenario: (optional) true if the facts are fictional
     outline: model-answer outline, one point per line
     memo   : principles[], discussion, rubric[], mistakes[], simple
     rubric : [{criterion, marks, lookFor:[…]}]
              THE RUBRIC MARKS MUST ADD UP TO THE QUESTION'S MARKS.
              (The site checks this and warns you if they don't.)

   REMOVE          Delete the question, chapter or subject block.
   Keep the commas between blocks, and the quotes around text.
   ===================================================================== */
window.SWM_WRITTEN=[
 {id:"legal-interpretation",name:"Legal Interpretation",page:"law",style:"pink",art:"§ 39(2)",
  desc:"University-style written questions on how legislation is read, understood and applied.",
  chapters:[
   {id:"ch1",number:1,title:"General Introduction",status:"draft",
    sourceNote:"Draft memorandum – requires source review. Written to align with Chapter 1 of Christo Botha, Statutory Interpretation: An Introduction for Students (6th ed.), but not yet checked against the textbook. It contains no textbook quotations or page references. Constitutional references are to the Constitution of the Republic of South Africa, 1996.",
    questions:[

     {id:"q1",title:"Sources of Law",type:"Explain & discuss",marks:10,words:"350–500",
      prompt:"Explain the difference between legislation and common law in South Africa. Discuss how each source develops and provide two examples of legislation.",
      outline:[
       "Define legislation: written law formally enacted by a body that has legislative authority.",
       "Explain how legislation develops: it is made through a formal law-making process by Parliament, provincial legislatures, municipal councils, or by an executive body acting under powers given by an Act (subordinate legislation), and is published.",
       "Define common law: legal rules and principles that developed outside the legislative process and are recognised as law. In South Africa its roots are largely Roman-Dutch, with English-law influence.",
       "Explain how common law develops: courts apply, refine and develop it in judgments over time, guided by precedent. Courts must develop it in line with the Bill of Rights.",
       "Contrast the two: legislation is deliberately enacted and written in one place, while common law is uncodified and found in judgments and authoritative writings. Legislation can amend or replace common-law rules. Both are subject to the Constitution.",
       "Give two correct examples of legislation, with name and number, e.g. the Companies Act 71 of 2008 and the Consumer Protection Act 68 of 2008."
      ],
      memo:{
       principles:[
        "Legislation is enacted law made by a body with legislative authority, through a formal process.",
        "Common law consists of legal principles developed outside the legislative process and recognised as law.",
        "The Constitution is the supreme law (section 2). Legislation and common law must both be consistent with it.",
        "When developing the common law, courts must promote the spirit, purport and objects of the Bill of Rights (section 39(2))."
       ],
       discussion:"A good answer clearly defines both sources, then explains how each comes into existence and changes over time: legislation through enactment by an authorised law-maker, and common law through the courts. The student should show the relationship between the two, in particular that legislation can change the common law and that both are subject to the Constitution. Two accurate examples of legislation, properly cited by name and number, complete the answer.",
       rubric:[
        {criterion:"Legislation: definition and how it develops",marks:3,lookFor:["Enacted by a body with legislative authority","Formal law-making process, written and published","Mentions different law-makers or subordinate legislation"]},
        {criterion:"Common law: definition and how it develops",marks:3,lookFor:["Developed outside the legislative process and recognised as law","Roman-Dutch roots, with English influence","Developed by courts through judgments and precedent, in line with the Bill of Rights"]},
        {criterion:"Comparison of the two sources",marks:2,lookFor:["Legislation can amend or replace common-law rules","Both are subject to the Constitution"]},
        {criterion:"Two correct examples of legislation",marks:2,lookFor:["1 mark per correctly named and numbered Act (or other enacted legislation)"]}
       ],
       mistakes:[
        "Confusing common law with indigenous customary law. They are separate sources.",
        "Giving court cases as examples of legislation.",
        "Describing common law as simply ‘unwritten law’ without explaining where it is found.",
        "Listing examples without the Act’s number and year."
       ],
       simple:"Think of legislation as rules that someone with law-making power sat down and wrote and passed. Common law is the set of rules that grew over centuries and is kept alive and updated by the courts. A new Act can change a common-law rule, but neither can go against the Constitution."
      }},

     {id:"q2",title:"Statutory Interpretation",type:"Explain & discuss",marks:10,words:"350–500",
      prompt:"Explain the purpose of statutory interpretation and discuss why understanding the structure, terminology and categories of legislation is important when interpreting an Act.",
      outline:[
       "Purpose: to determine what legislation means and how it applies to particular facts.",
       "Interpretation takes place within the constitutional framework: courts read legislation in its context and with regard to its purpose, not only its wording, and must promote the spirit, purport and objects of the Bill of Rights (section 39(2)).",
       "Structure: knowing the parts of an Act (long title, preamble, definitions section, chapters and parts, sections and subsections, schedules) helps the reader find the relevant provision and read it in context. Definitions in the Act control what key words mean in that Act.",
       "Terminology: accurate terms (Act, regulation, by-law, section, subsection) avoid confusion about what kind of law is being applied and where it fits.",
       "Categories: distinguishing original legislation from subordinate (delegated) legislation, and national, provincial and municipal legislation, shows where a measure sits in the hierarchy and what limits its validity.",
       "Conclusion: these foundations make interpretation accurate and help the interpreter apply the provision correctly."
      ],
      memo:{
       principles:[
        "Statutory interpretation determines the meaning and application of legislation.",
        "Words are read in context and with regard to purpose, within the constitutional framework.",
        "Section 39(2) of the Constitution requires every court, tribunal or forum interpreting legislation to promote the spirit, purport and objects of the Bill of Rights.",
        "Subordinate legislation must stay within the powers given by its empowering Act and the Constitution."
       ],
       discussion:"The student should first state the purpose of interpretation clearly, then explain that it is not a mechanical reading of words but happens in context and within the Constitution. The second half should show practical understanding: how the parts of an Act guide the reader, why exact terminology matters, and how knowing the category of legislation tells you where it sits in the hierarchy and which rules govern its validity.",
       rubric:[
        {criterion:"Purpose of statutory interpretation",marks:4,lookFor:["Determining meaning and application to facts","Reading in context and with regard to purpose, not words alone","Within the constitutional framework / section 39(2)"]},
        {criterion:"Importance of structure",marks:2,lookFor:["Names relevant parts of an Act (e.g. long title, definitions, sections, schedules)","Explains how structure helps locate and contextualise provisions"]},
        {criterion:"Importance of terminology",marks:2,lookFor:["Accurate use of terms like Act, regulation, by-law, section","Explains how precise terms avoid confusion"]},
        {criterion:"Importance of categories",marks:2,lookFor:["Original vs subordinate legislation; national, provincial, municipal","Links category to hierarchy and validity"]}
       ],
       mistakes:[
        "Saying interpretation is about what the judge personally thinks the law should be.",
        "Only listing the parts of an Act without explaining why they matter.",
        "Ignoring the Constitution entirely.",
        "Treating all legislation as if it were an Act of Parliament."
       ],
       simple:"Interpreting an Act is like reading a set of instructions to work out exactly what they ask you to do in a real situation. If you know how the instructions are laid out, what the special words mean and what kind of instruction it is, you’re far less likely to get it wrong."
      }},

     {id:"q3",title:"Application Scenario",type:"Application scenario",marks:15,words:"500–700",scenario:true,
      prompt:"A municipality introduces a by-law regulating trading in public spaces.\n\nA trader argues that the by-law is not legally binding because it was not passed by the national Parliament.\n\nDiscuss whether the trader’s argument is correct. Explain the different forms of legislation recognised in South Africa.",
      outline:[
       "Identify the issue: can legislation that was not passed by Parliament be legally binding?",
       "Legislative authority is shared between three spheres of government: national (Parliament), provincial (provincial legislatures) and local (municipal councils) (section 43 of the Constitution).",
       "Municipalities may make and administer by-laws on the matters they have the right to administer (section 156(2)). Street trading is listed as a local government matter in Part B of Schedule 5 of the Constitution.",
       "Forms of legislation recognised in South Africa: the Constitution; national Acts of Parliament; provincial Acts; municipal by-laws; and subordinate legislation such as regulations and proclamations made under the authority of an Act.",
       "Limits on validity: a by-law must be within the municipality’s powers, properly made, and published in the provincial gazette before it can be enforced (section 162). It must be consistent with the Constitution, including the Bill of Rights, and a by-law that conflicts with national or provincial legislation is invalid (section 156(3), subject to section 151(4)).",
       "Conclusion: the trader’s argument is incorrect. Legislation does not have to be passed by Parliament to be binding. The trader could only challenge the by-law on other grounds, for example that it was not properly made or published, or that it is unconstitutional."
      ],
      memo:{
       principles:[
        "Legislative authority is vested in Parliament, provincial legislatures and municipal councils (section 43).",
        "A municipality may make and administer by-laws for the matters it has the right to administer (section 156(2)); street trading appears in Part B of Schedule 5.",
        "A by-law may be enforced only after publication in the official gazette of the relevant province (section 162(1)).",
        "A by-law that conflicts with national or provincial legislation is invalid, subject to section 151(4) (section 156(3)). All legislation is subject to the Constitution (section 2)."
       ],
       discussion:"The best answers apply the law to the facts rather than only describing it. The student should identify the trader’s mistaken assumption that only Parliament makes binding law, explain the three spheres of legislative authority, and show that trading in public spaces falls within municipal competence. A complete answer lists the forms of legislation, explains the conditions a valid by-law must meet, and reaches a clear, reasoned conclusion. Note: the scenario is fictional and created for practice.",
       rubric:[
        {criterion:"Identifies the legal issue",marks:1,lookFor:["Whether legislation not passed by Parliament can be binding"]},
        {criterion:"Three spheres of legislative authority",marks:3,lookFor:["National: Parliament","Provincial: provincial legislatures","Local: municipal councils (section 43)"]},
        {criterion:"Municipal power to make by-laws",marks:3,lookFor:["Section 156(2) power to make by-laws","Trading in public spaces / street trading is a local government matter (Schedule 5, Part B)","Applies this to the facts"]},
        {criterion:"Forms of legislation recognised in South Africa",marks:3,lookFor:["Constitution, national Acts, provincial Acts","Municipal by-laws","Subordinate legislation (regulations, proclamations)"]},
        {criterion:"Requirements for a valid by-law",marks:3,lookFor:["Within powers and properly made","Published in the provincial gazette (section 162)","Consistent with the Constitution and not in conflict with national or provincial legislation (section 156(3))"]},
        {criterion:"Reasoned conclusion",marks:2,lookFor:["Trader’s argument is incorrect","Notes possible other grounds of challenge"]}
       ],
       mistakes:[
        "Agreeing with the trader because ‘only Parliament makes laws’.",
        "Describing the law without applying it to the trader’s situation.",
        "Forgetting that a by-law must itself be valid (properly made, published and constitutional).",
        "Listing forms of legislation without explaining how they relate to each other."
       ],
       simple:"South Africa has three ‘levels’ of law-makers: national, provincial and local. Your local council is allowed to make rules about local issues, like trading on the streets. Those rules count as real law, as long as the council followed the proper steps and the rules don’t clash with the Constitution or with national or provincial law."
      }},

     {id:"q4",title:"Legal Terminology",type:"Distinguish & explain",marks:10,words:"300–450",
      prompt:"Distinguish between the terms law, a law, Act and act. Explain why accurate terminology matters in legal interpretation.",
      outline:[
       "‘Law’ (in the broad sense): the legal system as a whole and all its recognised sources, such as legislation, common law, indigenous customary law and case law.",
       "‘A law’: a particular enacted legislative measure, for example one specific statute or by-law.",
       "‘Act’ (capital A): a statute passed by Parliament or a provincial legislature, usually cited by name, number and year.",
       "‘act’ (lowercase a): conduct or an action by a person or body, for example an act of a public official.",
       "Why it matters: legal meaning depends on precise words. Using the wrong term can confuse which source of law applies, where a measure sits in the hierarchy and which rules govern it, which can lead to an incorrect interpretation or argument."
      ],
      memo:{
       principles:[
        "‘Law’ in the broad sense refers to the legal system and its sources.",
        "‘A law’ refers to a specific enacted measure.",
        "An ‘Act’ is a statute enacted by Parliament or a provincial legislature; an ‘act’ is conduct.",
        "Precision in terminology is essential to accurate interpretation."
       ],
       discussion:"The student should give a clear, accurate meaning for each of the four terms, ideally with a short example of each, and show the contrast between them. The final part should explain, not just state, why precise terminology matters, linking it to identifying the correct source of law and applying the right rules.",
       rubric:[
        {criterion:"‘Law’ explained",marks:2,lookFor:["Broad sense: legal system and its sources","Example of sources"]},
        {criterion:"‘A law’ explained",marks:2,lookFor:["A specific enacted measure","Example"]},
        {criterion:"‘Act’ explained",marks:2,lookFor:["Statute of Parliament or a provincial legislature","Cited by name, number and year"]},
        {criterion:"‘act’ explained",marks:2,lookFor:["Conduct or action","Example, e.g. an act of an official"]},
        {criterion:"Why accurate terminology matters",marks:2,lookFor:["Identifies the right source and its place in the hierarchy","Avoids misinterpretation or flawed argument"]}
       ],
       mistakes:[
        "Treating ‘law’ and ‘a law’ as the same thing.",
        "Ignoring the capital letter difference between ‘Act’ and ‘act’.",
        "Giving definitions without any examples.",
        "Stating that terminology matters without explaining why."
       ],
       simple:"‘Law’ is the whole system. ‘A law’ is one specific rule that was enacted. An ‘Act’ is one specific statute passed by a legislature, and an ‘act’ is just something someone does. Small differences in words can lead to big differences in meaning."
      }},

     {id:"q5",title:"Integrated Essay",type:"Essay",marks:20,words:"800–1,100",
      prompt:"South African law consists of several recognised sources rather than legislation alone.\n\nDiscuss this statement with reference to legislation, common law, indigenous customary law and case law. Explain why recognising these different sources is important when interpreting legislation.",
      outline:[
       "Introduction: agree with the statement and set out the structure. The Constitution is the supreme law (section 2) and sits above all other sources.",
       "Legislation: enacted law at national, provincial and local level, plus subordinate legislation. It can amend common law and customary law, but must comply with the Constitution.",
       "Common law: principles developed outside the legislative process, largely Roman-Dutch with English influence, applied and developed by courts in line with the Bill of Rights (section 39(2)).",
       "Indigenous customary law: a recognised and independent source. Courts must apply it when it is applicable, subject to the Constitution and legislation that specifically deals with customary law (section 211(3)). It reflects the living practices of communities.",
       "Case law: court judgments interpret legislation and develop the common law and customary law. Through precedent (stare decisis), decisions of higher courts bind lower courts.",
       "How the sources relate: the Constitution is supreme; legislation can change common law and customary law; all are subject to the Bill of Rights.",
       "Why this matters for interpretation: legislation operates against the background of the other sources. Courts presume the legislature does not intend to change the existing law more than necessary; case law shows how provisions have been interpreted; section 39(2) requires interpretation that promotes the Bill of Rights; and customary-law contexts must be respected. Looking at legislation alone gives an incomplete and sometimes wrong picture.",
       "Conclusion: South African law is a combined system, and a good interpreter reads legislation as part of that whole."
      ],
      memo:{
       principles:[
        "The Constitution is the supreme law (section 2).",
        "Courts must apply customary law when it is applicable, subject to the Constitution and legislation that specifically deals with customary law (section 211(3)).",
        "Section 39(2) applies to interpreting legislation and to developing the common law and customary law.",
        "Precedent (stare decisis) means the decisions of higher courts bind lower courts.",
        "There is a presumption that legislation does not change the existing law more than necessary."
       ],
       discussion:"This essay rewards integration, not a list. The student should explain each of the four sources accurately and then show how they fit together under the Constitution. The strongest answers dedicate real attention to the second part of the question, using concrete reasons why an interpreter must look beyond the text of an Act. Structure, a clear introduction and a concluding position count.",
       rubric:[
        {criterion:"Introduction and position (Constitution supreme)",marks:2,lookFor:["Takes a clear position on the statement","Recognises constitutional supremacy (section 2)"]},
        {criterion:"Legislation",marks:3,lookFor:["Definition and levels of legislation","Subordinate legislation","Can amend other sources but subject to the Constitution"]},
        {criterion:"Common law",marks:3,lookFor:["Definition and origins","Developed by courts","Developed in line with the Bill of Rights"]},
        {criterion:"Indigenous customary law",marks:3,lookFor:["Recognised, independent source","Section 211(3)","Living law of communities, subject to the Constitution"]},
        {criterion:"Case law and precedent",marks:3,lookFor:["Judgments interpret legislation and develop the law","Stare decisis / court hierarchy","Example of its role"]},
        {criterion:"How the sources relate to each other",marks:2,lookFor:["Hierarchy under the Constitution","Legislation can change common law and customary law"]},
        {criterion:"Importance for interpreting legislation",marks:3,lookFor:["Legislation read against the background of other sources","Precedent and section 39(2)","Presumption against changing existing law more than necessary"]},
        {criterion:"Structure, clarity and conclusion",marks:1,lookFor:["Logical flow and a clear conclusion"]}
       ],
       mistakes:[
        "Writing four separate mini-answers without linking the sources together.",
        "Leaving out the second part of the question (why this matters for interpretation).",
        "Treating customary law as inferior to common law. Both are recognised sources subject to the Constitution.",
        "Forgetting to mention the Constitution."
       ],
       simple:"South African law is like a team, not a solo player. Acts are important, but so are the old common-law rules, customary law and court decisions. When you read an Act, you need to know what the rest of the team is doing, or you might misunderstand what the Act really means."
      }}
    ]}
  ]},
 {id:"economics",name:"Economics",page:"economics",style:"sage",art:"This or that?",desc:"Written questions on economic theory and real-world application.",chapters:[]},
 {id:"accounting",name:"Accounting",page:"accounting",style:"yellow",art:"Dr | Cr",desc:"Written questions that ask you to explain the accounting, not just do it.",
  chapters:[
   {id:"concepts",number:1,title:"Core Accounting Concepts",status:"draft",
    sourceNote:"Original Study-With-Me! memorandum based on general accounting principles. Please review it before relying on it, and check it against your own course material.",
    questions:[
     {id:"q1",title:"Why debit, why credit?",type:"Explain",marks:8,words:"250–350",
      prompt:"Naledi Stationery buys R4,800 of inventory on credit. The business uses the perpetual inventory system.\n\nExplain why Inventory is debited and Creditors control is credited. Refer to the double-entry principle and the accounting equation in your answer.",
      outline:[
       "Double-entry principle: every transaction affects at least two accounts, and total debits equal total credits.",
       "Accounting equation: Assets = Owner’s equity + Liabilities.",
       "Inventory is an asset. Assets increase on the debit side, so Inventory is debited with R4,800. (Under the perpetual system, goods for resale go directly to Inventory, not Purchases.)",
       "Creditors control is a liability: the business owes the supplier. Liabilities increase on the credit side, so Creditors control is credited with R4,800.",
       "Effect on the equation: assets +R4,800 and liabilities +R4,800, so the equation stays in balance; owner’s equity is not affected."
      ],
      memo:{
       principles:["Every transaction has equal debit and credit entries.","Assets increase with debits; liabilities and equity increase with credits.","Under the perpetual system, inventory purchases are debited to the Inventory account."],
       discussion:"The student should state the double-entry principle, classify both accounts correctly, link each classification to the side on which that type of account increases, and show with figures that the accounting equation stays balanced.",
       rubric:[
        {criterion:"Double-entry principle explained",marks:2,lookFor:["At least two accounts affected","Debits equal credits"]},
        {criterion:"Inventory: asset, increases with a debit",marks:2,lookFor:["Classifies Inventory as an asset","Explains why it is debited (perpetual system)"]},
        {criterion:"Creditors control: liability, increases with a credit",marks:2,lookFor:["Classifies Creditors control as a liability","Explains why it is credited"]},
        {criterion:"Effect on the accounting equation, with figures",marks:2,lookFor:["Assets +R4,800 and liabilities +R4,800","Equation remains balanced; equity unaffected"]}
       ],
       mistakes:["Thinking ‘credit’ means good or money coming in.","Debiting Purchases, which is used under the periodic system.","Not mentioning the accounting equation.","Saying owner’s equity changes."],
       simple:"The business got something (inventory, an asset), so that side goes up with a debit. It also now owes money (a liability), so that side goes up with a credit. Both go up by R4,800, so everything still balances."
      }},
     {id:"q2",title:"Periodic vs perpetual",type:"Distinguish & recommend",marks:10,words:"350–500",
      prompt:"Distinguish between the periodic and perpetual inventory systems. Explain how cost of sales is determined under each system.\n\nThen recommend which system you would suggest for a small shop that sells a large number of low-value items, and justify your recommendation.",
      outline:[
       "Periodic system: purchases of goods are recorded in a Purchases account; the Inventory account is only updated at the end of the period after a physical stock count.",
       "Perpetual system: the Inventory account is updated every time goods are bought, returned or sold, so it always shows what should be on hand.",
       "Cost of sales under the periodic system is calculated at the end of the period: opening inventory + net purchases (including carriage inwards and import duties) − closing inventory.",
       "Cost of sales under the perpetual system is recorded with each sale (debit Cost of sales, credit Inventory at cost), so it is known continuously.",
       "Recommendation (either accepted if justified): periodic may be simpler and cheaper for many low-value items without a point-of-sale system; perpetual gives better control and up-to-date information, and is practical if the shop uses barcode or point-of-sale software. Stock counts are still needed under both systems."
      ],
      memo:{
       principles:["The systems differ in when inventory and cost of sales are updated.","Periodic cost of sales = opening inventory + net purchases − closing inventory.","Perpetual cost of sales is recorded at cost with every sale."],
       discussion:"A strong answer explains both systems clearly, gives the cost of sales method for each (with the formula for periodic), and makes a recommendation that is linked to the facts: many low-value items, cost, technology and control. Either system can earn full marks if the reasoning is sound.",
       rubric:[
        {criterion:"Periodic system explained",marks:2,lookFor:["Purchases account used","Inventory updated at period-end after a count"]},
        {criterion:"Perpetual system explained",marks:2,lookFor:["Inventory updated with every purchase and sale","Shows what should be on hand at any time"]},
        {criterion:"Cost of sales: periodic",marks:2,lookFor:["Opening inventory + net purchases − closing inventory","Determined at period-end"]},
        {criterion:"Cost of sales: perpetual",marks:2,lookFor:["Recorded at cost with each sale","Debit Cost of sales, credit Inventory"]},
        {criterion:"Reasoned recommendation",marks:2,lookFor:["Clear choice","Justified with the shop’s circumstances (cost, technology, control)"]}
       ],
       mistakes:["Saying the perpetual system needs no stock counts.","Giving the periodic formula without explaining when it is used.","Recommending a system without reasons linked to the scenario."],
       simple:"Periodic: you work out what you sold at the end, by counting what’s left. Perpetual: you keep track of every item as it goes out. The first is simpler; the second gives you better information all the time."
      }},
     {id:"q3",title:"Why reconcile?",type:"Explain",marks:8,words:"250–350",
      prompt:"Explain why a business prepares a bank reconciliation statement. Discuss the types of differences that can arise between the cash book and the bank statement, and give one example of each type.",
      outline:[
       "Purpose: to check that the cash book and the bank statement agree, to find and explain every difference, and to make sure the cash book shows the correct balance for the financial statements.",
       "Timing differences: items recorded by the business that the bank has not processed yet, e.g. an outstanding deposit or an unpresented EFT payment.",
       "Items known only to the bank: e.g. bank charges, interest, debit orders or direct deposits by debtors. These must be recorded in the cash book.",
       "Errors, and internal control: mistakes by the business or the bank (e.g. an amount recorded incorrectly); regular reconciliation helps detect errors and possible fraud early."
      ],
      memo:{
       principles:["The cash book and bank statement record the same account from two perspectives.","Items the bank knows about but the business doesn’t are recorded in the cash book.","Timing differences appear on the reconciliation statement only."],
       discussion:"The student should explain the purpose of the reconciliation and then discuss three types of difference, each with a correct example, ending with the control benefit of reconciling regularly.",
       rubric:[
        {criterion:"Purpose of a bank reconciliation",marks:2,lookFor:["Agree and explain the difference between the two records","Correct cash book balance for the financial statements"]},
        {criterion:"Timing differences with an example",marks:2,lookFor:["Explains timing differences","Outstanding deposit or unpresented payment"]},
        {criterion:"Items known only to the bank with an example",marks:2,lookFor:["Explains why the cash book must be updated","Bank charges, interest, debit order or direct deposit"]},
        {criterion:"Errors and internal control",marks:2,lookFor:["Errors by either party","Helps detect errors and fraud early"]}
       ],
       mistakes:["Recording outstanding deposits or unpresented payments in the cash book again.","Saying the bank statement is always right.","Listing examples without explaining the type of difference."],
       simple:"The business and the bank each keep their own record of the same account. A reconciliation lines them up, explains every difference, and fixes the business’s record where it’s missing something the bank already knows."
      }}
    ]}
  ]},
 {id:"business-management",name:"Business Management",page:"business",style:"lilac",art:"S W O T",desc:"Case-study questions on planning, leading and managing organisations.",chapters:[]}
];
