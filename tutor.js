/* =====================================================================
   STUDY-WITH-ME!  ·  WORK THROUGH IT — GUIDED TUTOR SCRIPTS (data/tutor.js)
   ---------------------------------------------------------------------
   Stage 1: each sample question has a pre-written, checked tutoring path.
   (Live AI tutoring for uploaded papers is a later stage.)

   A QUESTION has:
     id, subject, mode ("accounting" | "essay"), title, source, marks,
     question (the original wording; \n\n = new paragraph), highlights[],
     terms[{term, def}], hints[4]  (clue, concept, different example, full solution),
     actions{simple, why, number, example, another, visual}   (defaults for every step)
     work   accounting: {type:"journal", options[], rows[{account, dr|cr}], narration}
            essay:      {type:"irac"}
     situation (essay only): parties[{name, position, interests}], unknown[]
     steps[] — each step:
       phase  "understand" | "plan" | "work" | "assemble"
       say[]  tutor messages shown when the step starts
       ask    {type:"choice", prompt, options[{t, ok, clue}], why}
              {type:"multi",  prompt, options[{t, ok, clue}], why}
              {type:"cell",   prompt, cells{"r0.acc":"Equipment",…}, clues{"Bank":"…"}, clue, why}
              {type:"text",   prompt, field, checklist[], model}
              {type:"info",   prompt, button}
       actions{…}  (optional: replaces the question's default answers for this step)
     review {practise[{label, href}]}
     similar {question, work? (accounting rows) | checks[{prompt, options[{t, ok, clue}], why}], explain}
   ===================================================================== */
window.SWM_TUTOR={questions:[

/* ===================== ACCOUNTING ===================== */
{id:"acc-equipment",subject:"Accounting",mode:"accounting",title:"Equipment bought on credit",
 source:"Original Study-With-Me! example",marks:4,
 question:"A business purchases equipment for R12,000 on credit. Ignore VAT.\n\nRecord the transaction in the general journal.",
 highlights:["equipment","R12,000","on credit","Ignore VAT","general journal"],
 terms:[
  {term:"On credit",def:"Getting goods or services now and paying for them later. The business owes the supplier until it pays."},
  {term:"Equipment",def:"Items a business uses to operate for several years, like machines, computers or tools. It is not bought to resell."},
  {term:"Asset",def:"Something the business owns or controls that will bring it benefits, such as equipment, inventory or money in the bank."},
  {term:"Liability",def:"An amount the business owes to someone else, such as a supplier or a bank."},
  {term:"Creditors control",def:"The account that shows the total amount the business owes to the suppliers it buys from on credit."},
  {term:"Debit and credit",def:"The left (debit) and right (credit) sides of an account. They don’t mean good or bad: they’re just the two sides used to record every transaction twice."},
  {term:"Journal entry",def:"The first record of a transaction, showing the date, the accounts debited and credited, the amounts and a short narration."},
  {term:"VAT",def:"Value-Added Tax. ‘Ignore VAT’ means you leave it out completely and use the amount exactly as given."}
 ],
 work:{type:"journal",options:["Equipment","Inventory","Creditors control","Debtors control","Bank","Capital","Purchases"],
  rows:[{account:"Equipment",dr:12000},{account:"Creditors control",cr:12000}],narration:"Purchased equipment on credit."},
 actions:{
  simple:"The business got a piece of equipment now and promised to pay for it later. So it owns more (the equipment) and it owes more (to the supplier). Both go up by R12,000.",
  why:"Every transaction is recorded twice, once on the debit side and once on the credit side, so the books always balance. That keeps the accounting equation true: Assets = Owner’s equity + Liabilities.",
  number:"The R12,000 comes straight from the question: it’s the price of the equipment. Because the question says ‘Ignore VAT’, we don’t add 15%. We use R12,000 exactly.",
  example:"It’s like getting a new phone on a contract. You walk out of the shop with the phone today (something you own), and you owe the network money (something you owe).",
  another:"Picture two lists: ‘what the business has’ and ‘what the business owes’. This transaction adds R12,000 to both lists. In accounting, increases in what the business has are recorded on the left (debit) and increases in what it owes on the right (credit).",
  visual:"equation"
 },
 steps:[
  {phase:"understand",
   say:["Let’s make this make sense. In everyday words: the business got a piece of equipment worth R12,000, but it hasn’t paid for it yet. Your job is to record that in the general journal.","Instruction word: record (as a journal entry). Key facts: equipment · R12,000 · on credit · ignore VAT. You’ll find them highlighted in the question."],
   ask:{type:"choice",prompt:"First things first: what does ‘on credit’ mean here?",
    options:[
     {t:"The business paid the R12,000 immediately by EFT.",clue:"If it had paid immediately, the question would say ‘for cash’ or ‘by EFT’. ‘On credit’ is about timing: when will the business pay?"},
     {t:"The business will pay later, so it now owes the supplier.",ok:true},
     {t:"The supplier now owes the business R12,000.",clue:"Who received something? The business got the equipment. So who owes whom?"}
    ],
    why:"Exactly. Buying on credit means getting the item now and paying later, so the business now has a debt to the supplier."}},
  {phase:"understand",
   say:["Great. Now let’s look at what the business actually got."],
   ask:{type:"choice",prompt:"What did the business acquire, and what kind of account is it?",
    options:[
     {t:"Equipment: an asset",ok:true},
     {t:"Inventory: an asset",clue:"Inventory is bought to resell to customers. Is this equipment for reselling, or for using in the business?"},
     {t:"Equipment: an expense",clue:"An expense is used up quickly, like rent or wages. Equipment is used for years. What does that make it?"}
    ],
    why:"Yes. Equipment is something the business owns and will use for several years, so it’s an asset (a non-current asset)."}},
  {phase:"plan",
   say:["Plan time. Before we write anything, let’s decide which accounts are involved."],
   ask:{type:"multi",prompt:"Which two accounts does this transaction affect? Choose two, then press Check.",
    options:[
     {t:"Equipment",ok:true},
     {t:"Creditors control",ok:true},
     {t:"Bank",clue:"Did any money leave the bank? Look at ‘on credit’ again."},
     {t:"Capital",clue:"Capital changes when the owner puts value in or takes it out. Is the owner involved here?"},
     {t:"Inventory",clue:"Remember, this equipment isn’t for resale."}
    ],
    why:"Spot on: Equipment (what the business got) and Creditors control (what it now owes). Here’s our plan: ① choose the account to debit, ② choose the account to credit, ③ fill in the amounts, ④ check that it balances."}},
  {phase:"work",
   say:["Step ① of our plan. Look at the journal in the work area."],
   ask:{type:"cell",prompt:"In the TOP row of the journal, choose the account to DEBIT. Then press Check.",cells:{"r0.acc":"Equipment"},
    clues:{"Creditors control":"Close! Creditors control is affected, but it’s a liability, and liabilities increase on the credit side. Which account increased on the asset side?","Bank":"No money has moved yet: the business bought on credit. Which account did the business gain?","Inventory":"This equipment is for using, not reselling."},
    clue:"Which account increased because of what the business got? Assets increase on the debit side.",
    why:"Correct. Equipment is an asset, it increased, and assets increase on the debit side."},
   actions:{why:"Assets increase on the debit side. That’s simply the convention that keeps every transaction balanced: whatever the business gains as an asset is recorded on the left."}},
  {phase:"work",
   say:["Step ② of our plan."],
   ask:{type:"cell",prompt:"In the SECOND row, choose the account to CREDIT. Then press Check.",cells:{"r1.acc":"Creditors control"},
    clues:{"Bank":"The business hasn’t paid yet, so Bank hasn’t changed. Who does the business owe now?","Equipment":"Equipment is already your debit. The credit is the other account affected.","Capital":"The owner isn’t involved here. Who does the business owe?"},
    clue:"Who does the business owe now? Liabilities increase on the credit side.",
    why:"Correct. The business owes the supplier more, so the liability Creditors control increases on the credit side."},
   actions:{why:"Liabilities increase on the credit side, the opposite side to assets. Because one account is debited and the other credited with the same amount, the entry balances."}},
  {phase:"work",
   say:["Step ③: the amounts."],
   ask:{type:"cell",prompt:"Enter the debit amount in the top row and the credit amount in the second row. Then press Check.",cells:{"r0.dr":12000,"r1.cr":12000},
    clues:{"13800":"Careful: the question says ‘Ignore VAT’, so don’t add 15%. Use the amount exactly as given."},
    clue:"Look back at the question: how much did the equipment cost? Both sides must be equal.",
    why:"Both sides are R12,000, so the entry balances: total debits equal total credits."}},
  {phase:"assemble",
   say:["You’ve done every step. Let’s put it together."],
   ask:{type:"info",prompt:"Your completed journal entry is now in the work area, with its narration. The accounting equation: Assets +R12,000 = Owner’s equity R0 + Liabilities +R12,000. It balances.",button:"See my review →"}}
 ],
 hints:[
  "Ask yourself two questions: what did the business get, and did any money leave the bank?",
  "Plain language first: when a business gets something it owns, an asset goes up. When it promises to pay later, a liability goes up. In the books, assets increase on the debit side and liabilities increase on the credit side. In symbols: Assets = Owner’s equity + Liabilities.",
  "A different example: a shop buys shelves for R5,000 and pays immediately by EFT. The shelves are equipment (an asset that increases), so debit Equipment R5,000. Money left the bank (an asset that decreases), so credit Bank R5,000. Notice how ‘paid immediately’ changes the account that is credited.",
  "Debit Equipment R12,000; credit Creditors control R12,000. Narration: Purchased equipment on credit. Equipment (an asset) increases on the debit side, and the amount owed to the supplier (a liability) increases on the credit side."
 ],
 review:{practise:[{label:"Debit and Credit Entries",href:"#ap-debit-credit"},{label:"General Journals",href:"#ap-general-journal"},{label:"Accounting Equation",href:"#ap-equation"}]},
 similar:{question:"A florist buys a delivery vehicle for R85,000 on credit from Moto Dealers. Ignore VAT. Record the journal entry.",
  options:["Vehicles","Equipment","Creditors control","Bank","Capital","Inventory"],
  work:[{account:"Vehicles",dr:85000},{account:"Creditors control",cr:85000}],
  explain:"Same pattern: the florist gains an asset (Vehicles, debit) and owes the dealer (Creditors control, credit), both R85,000."}
},

/* ===================== ESSAY / LAW ===================== */
{id:"law-land",subject:"Law",mode:"essay",title:"A handshake deal for land",
 source:"Original Study-With-Me! scenario (the facts are fictional)",marks:10,
 question:"Thandi verbally agrees to buy a plot of land from Mr Dlamini for R250,000. They shake hands, but nothing is written down or signed. A week later, Mr Dlamini sells the same plot to someone else. Thandi wants to enforce their agreement.\n\nAdvise Thandi. (10 marks)",
 highlights:["verbally","plot of land","R250,000","nothing is written down or signed","sells the same plot to someone else","Advise Thandi"],
 terms:[
  {term:"Advise",def:"Tell the person what the law says about their situation and what the likely outcome is."},
  {term:"Verbal agreement",def:"An agreement made by speaking, without a written document."},
  {term:"Enforce",def:"Use the law to make the other person do what they agreed to do."},
  {term:"Formalities",def:"Extra requirements the law sets for certain contracts, such as being in writing and signed."},
  {term:"Deed of alienation",def:"The written document used for a sale of land, signed by the parties."},
  {term:"Consensus",def:"Both parties agreeing on the same thing (here, the plot and the price)."},
  {term:"IRAC",def:"A way to structure a legal answer: Issue, Rule, Application, Conclusion."}
 ],
 work:{type:"irac"},
 situation:{
  parties:[
   {name:"Thandi",position:"Believes she and Mr Dlamini have a deal for the plot at R250,000.",interests:"Wants the plot she agreed to buy."},
   {name:"Mr Dlamini",position:"Has sold the same plot to someone else.",interests:"From the facts, he appears to treat the handshake deal as not binding."},
   {name:"The other buyer",position:"Bought the plot from Mr Dlamini.",interests:"The facts tell us nothing more about this person."}
  ],
  unknown:["Whether Thandi paid anything.","Why Mr Dlamini sold to someone else.","Whether anything was put in writing later."]
 },
 actions:{
  simple:"Spoken deals usually count. But for land, the law says the deal must be written down and signed by the parties. Thandi’s deal wasn’t, so it isn’t a valid sale she can enforce.",
  why:"Why IRAC? It makes you show the marker every link: what the legal question is, what the law says, how it applies to these exact facts, and what the answer is.",
  number:"The only number is R250,000, the price. It shows they agreed on a price, but it doesn’t change the legal outcome.",
  example:"It’s like an exam rule that answers must be written in the answer book. Even a perfect answer said out loud to the invigilator doesn’t count, because it didn’t meet the required form.",
  another:"Think of the writing requirement as a gate. Before anyone asks whether the deal was fair, a sale of land must pass through the gate: a written document signed by the parties. This deal never went through the gate.",
  visual:"irac"
 },
 steps:[
  {phase:"understand",
   say:["Let’s make this make sense. In everyday words: Thandi and Mr Dlamini agreed on a sale of land with only a handshake. He then sold the land to someone else. Thandi wants to hold him to their deal.","Instruction word: ‘Advise’. That means tell Thandi what the law says about her situation and what is likely to happen. It’s worth 10 marks, so plan a structured answer using IRAC. Try ‘Put me in the situation’ in the work area to see each person’s position."],
   ask:{type:"choice",prompt:"Which fact is most likely to matter legally?",
    options:[
     {t:"The price was R250,000.",clue:"The price shows they agreed, but would the legal result change if the price were different?"},
     {t:"Nothing was written down or signed.",ok:true},
     {t:"They shook hands.",clue:"A handshake shows agreement. But think about what’s missing."}
    ],
    why:"Yes. For some contracts, the law requires writing. That one detail is the heart of this question."}},
  {phase:"plan",
   say:["Let’s identify the issue. The issue is the legal question a court would have to answer."],
   ask:{type:"text",field:"issue",prompt:"In the Issue box, write one sentence stating the legal question. Then press ‘Check with me’.",
    checklist:["It’s phrased as a question or starts with ‘whether…’","It mentions that the agreement was verbal (not written or signed)","It asks whether there is a valid, enforceable sale of land"],
    model:"Whether a verbal agreement to sell land, which was never written down or signed, is a valid and enforceable contract of sale."}},
  {phase:"plan",
   say:["Now the rule. Start with what makes a contract valid."],
   ask:{type:"choice",prompt:"Which requirement for a valid contract is the problem here?",
    options:[
     {t:"Consensus",clue:"They both agreed on the plot and the price, so consensus seems to be there."},
     {t:"Capacity",clue:"Nothing in the facts suggests either person lacks capacity. Don’t add facts that aren’t given."},
     {t:"Legality",clue:"Selling land is lawful."},
     {t:"Formalities: some contracts must be in writing",ok:true}
    ],
    why:"Right. A contract needs consensus, capacity, legality, possibility and any required formalities. Here, it’s the formality that’s missing."}},
  {phase:"plan",
   say:["Which law sets that formality?"],
   ask:{type:"choice",prompt:"Which law requires a sale of land to be in writing?",
    options:[
     {t:"Section 2(1) of the Alienation of Land Act 68 of 1981",ok:true},
     {t:"None: verbal agreements are always enough",clue:"Most contracts can be verbal, but the law makes exceptions. Is selling land one of them?"},
     {t:"The Consumer Protection Act 68 of 2008",clue:"That Act deals with consumers buying goods and services. Look for the Act that deals specifically with selling land."}
    ],
    why:"Correct. Section 2(1) says a sale of land has no force or effect unless it’s contained in a deed of alienation signed by the parties (or by their agents acting on their written authority)."}},
  {phase:"work",
   say:["Write your Rule paragraph now."],
   ask:{type:"text",field:"rule",prompt:"In the Rule box, explain the legal rule in your own words. Then press ‘Check with me’.",
    checklist:["States the requirements for a valid contract, or at least that some contracts need formalities","Names section 2(1) of the Alienation of Land Act 68 of 1981","Explains that a sale of land must be in writing and signed by the parties"],
    model:"A valid contract requires consensus, capacity, legality, possibility of performance and compliance with any formalities. Section 2(1) of the Alienation of Land Act 68 of 1981 provides that a sale of land has no force or effect unless it is in a deed of alienation signed by the parties or their agents acting on written authority."}},
  {phase:"work",
   say:["Now the most important part: application. Link each fact to the rule. Don’t just repeat the rule."],
   ask:{type:"text",field:"application",prompt:"In the Application box, apply the rule to Thandi’s facts. Then press ‘Check with me’.",
    checklist:["Uses the facts: the agreement was only verbal; nothing was written or signed","Explains that the section 2(1) requirement was therefore not met","Notes that agreeing (consensus) is not enough on its own for a sale of land","Doesn’t add facts that aren’t in the question, like payments"],
    model:"Thandi and Mr Dlamini agreed on the plot and the price, so there was consensus. However, their agreement was only verbal: nothing was written down or signed. The formality required by section 2(1) was therefore not met, and the agreement has no force or effect, regardless of the handshake."}},
  {phase:"work",
   say:["Almost there. Let’s reach a conclusion."],
   ask:{type:"choice",prompt:"What is the most likely conclusion?",
    options:[
     {t:"Thandi can force Mr Dlamini to transfer the plot to her.",clue:"Go back to the rule. What effect does section 2(1) give to a sale of land that isn’t in writing?"},
     {t:"There is no valid sale, so Thandi cannot enforce the agreement.",ok:true},
     {t:"The other buyer must give the plot to Thandi.",clue:"Thandi’s claim depends on her having a valid contract first. Does she?"}
    ],
    why:"Yes. Because the sale was never put in writing and signed, it has no force or effect, so Thandi can’t enforce it."}},
  {phase:"work",
   say:["Write your conclusion."],
   ask:{type:"text",field:"conclusion",prompt:"In the Conclusion box, answer the issue in one or two sentences. Then press ‘Check with me’.",
    checklist:["Answers the issue directly","States that the verbal sale has no force or effect, so Thandi cannot enforce it","Is short: one or two sentences"],
    model:"Thandi should be advised that, because their agreement was not in writing and signed, there is no valid sale of land, and she cannot enforce it against Mr Dlamini."}},
  {phase:"assemble",
   say:["Let’s put your paragraphs together."],
   ask:{type:"info",prompt:"Your four IRAC paragraphs are now combined into one answer in the work area. Read it once more: does each part lead logically to the next?",button:"See my review →"}}
 ],
 hints:[
  "Focus on the words ‘nothing is written down or signed’. Why might that matter for a sale of land?",
  "Plain language: most agreements are binding even if they’re only spoken. But for a few important deals, the law insists on writing so there’s clear proof. A sale of land is one of them.",
  "A different situation: two friends verbally agree that one will buy the other’s used car for R40,000. No special formality applies to selling a car, so that verbal agreement can be valid if the other requirements are met. What’s different about land?",
  "Issue: whether a verbal agreement to sell land, never written down or signed, is valid and enforceable. Rule: a valid contract needs consensus, capacity, legality, possibility and any required formalities; section 2(1) of the Alienation of Land Act 68 of 1981 says a sale of land has no force or effect unless it’s in a deed of alienation signed by the parties (or their agents with written authority). Application: Thandi and Mr Dlamini agreed on the plot and price, but nothing was written or signed, so the formality wasn’t met. Conclusion: there is no valid sale; Thandi cannot enforce the agreement."
 ],
 review:{practise:[{label:"Contract law lesson",href:"#law"},{label:"Legal Interpretation written practice",href:"#written-legal-interpretation"},{label:"Legal Interpretation quiz",href:"#quiz-legal-interpretation"}]},
 similar:{question:"Sipho verbally agrees to buy a used laptop from his neighbour for R6,000, and they shake hands. The next day, the neighbour changes his mind. Advise Sipho. (10 marks)",
  checks:[
   {prompt:"Does the law require this sale to be in writing?",options:[{t:"Yes, all sales must be in writing.",clue:"Only some contracts need writing. Is a laptop land?"},{t:"No: no special formality applies to selling a laptop.",ok:true}],why:"Right. The writing requirement in section 2(1) is for land. Selling movable goods like a laptop has no such formality."},
   {prompt:"What is the most likely conclusion?",options:[{t:"There is probably a valid contract Sipho can rely on, if the other requirements are met.",ok:true},{t:"There is no contract because nothing was written.",clue:"Writing isn’t required here. What else would make the contract valid?"}],why:"Yes. If there was consensus, capacity, legality and possibility, a verbal sale of a laptop can be a valid contract."}
  ],
  explain:"Same skills, different result: the facts decide which rule applies. Spotting why the answer changes is exactly what examiners test."}
}
]};
