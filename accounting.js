/* =====================================================================
   STUDY-WITH-ME!  ·  ACCOUNTING PRACTICE DATA   (data/accounting.js)
   ---------------------------------------------------------------------
   Every interactive Accounting exercise on the site comes from this file.
   Add a question by copying one of the same "type" and changing it:
   the layout, marking and feedback are built automatically.

   COMMON FIELDS (every question)
     id        unique, e.g. "ap-entry-003"        (never reuse an id)
     topic     one of the topic ids listed in "topics" below
     difficulty "Beginner" | "Intermediate" | "Advanced"
     type      entry | equation | classify | journal | taccount | vat |
               calc | statement | bankrec
     title, business, intro (the scenario; use \n for a new line)
     explain   overall explanation shown after submitting
     tip       short learning tip
     tags      ["…"]          status  "published" | "draft" (drafts are hidden)

   TYPES  (marks are worked out automatically)
     entry     rows:[{text, debit, credit, amount, why}]   4 marks per row
               options:[accounts shown in the dropdowns]
     equation  columns:{assets:[…], equity:[…], liabilities:[…]}
               rows:[{text, effects:{"Bank":50000,"Capital":-200}, debit, credit, why}]
               1 mark per non-zero effect (+2 per row if accounts are identified)
     classify  choices:[…], rows:[{text, answer, why}]       1 mark per row
     journal   entries:[{date:"5 March", lines:[{account, dr}|{account, cr}], why}]
               1 mark per date, 2 per line (account + amount on correct side)
     taccount  accounts:[{name, postings:[{side:"dr"|"cr", details, amount}],
               cd:{side, amount}, total, bd:{side, amount}}]
     vat       rate, rows:[{excl, vat, incl, given:"excl"|"vat"|"incl"}]
     calc      rows:[{label, answer, unit:"R"|"%", given:false, any:true, tol, why}]
               any:true accepts a positive or negative figure (e.g. "less" rows)
     statement blocks:[{id, kind:"lines", label, answer:[{account, amount}]},
                       {id, kind:"total", label, answer, formula:[["+","id"],["-","id"]]}]
               data:[["Account", amount], …]  (the trial-balance extract shown)
     bankrec   items:[{text, treat:"dr"|"cr"|"none", amount}], updated, recon:[calc rows]

   ACCOUNT NAMES are matched generously (case, punctuation and the
   aliases list below), e.g. "Creditors" = "Trade payables".
   ===================================================================== */
window.SWM_ACCOUNTING={
 label:"Original Study-With-Me! Accounting Practice",
 topics:[
  {id:"equation",name:"Accounting Equation",icon:"A=E+L",desc:"How every transaction keeps assets equal to equity plus liabilities."},
  {id:"debit-credit",name:"Debit and Credit Entries",icon:"Dr|Cr",desc:"Double-entry bookkeeping: which account to debit and which to credit."},
  {id:"source-documents",name:"Source Documents",icon:"🧾",desc:"Matching each transaction to the document that proves it happened."},
  {id:"general-journal",name:"General Journals",icon:"GJ",desc:"Recording non-routine transactions, with dates and narrations."},
  {id:"crj-cpj",name:"Cash Receipts and Cash Payments Journals",icon:"CRJ",desc:"Recording money in and money out."},
  {id:"debtors-creditors",name:"Debtors and Creditors Journals",icon:"DJ",desc:"Recording credit sales and credit purchases."},
  {id:"ledger",name:"General Ledger and T-Accounts",icon:"T",desc:"Posting, totalling and balancing ledger accounts."},
  {id:"vat",name:"VAT Calculations",icon:"15%",desc:"Working between VAT-exclusive, VAT and VAT-inclusive amounts."},
  {id:"periodic",name:"Periodic Inventory System",icon:"P",desc:"Cost of sales worked out at the end of the period."},
  {id:"perpetual",name:"Perpetual Inventory System",icon:"∞",desc:"Cost of sales recorded every time goods are sold."},
  {id:"cos-gp",name:"Cost of Sales and Gross Profit",icon:"GP",desc:"Mark-up, gross profit and gross margin calculations."},
  {id:"statements",name:"Financial Statements",icon:"FS",desc:"Building the statement of profit or loss and the statement of financial position."},
  {id:"bank-rec",name:"Bank Reconciliation",icon:"⇄",desc:"Updating the cash book and reconciling it with the bank statement."}
 ],
 accounts:["Bank","Petty cash","Debtors control","Creditors control","Inventory","Equipment","Vehicles","Land and buildings","Capital","Drawings","Sales","Cost of sales","Purchases","Services income","Rent income","Interest income","Rent expense","Wages","Salaries","Advertising","Insurance","Bank charges","Repairs","Bad debts","Loan","VAT input","VAT output"],
 aliases:{
  "creditors control":["creditors","trade payables","accounts payable","creditor"],
  "debtors control":["debtors","trade receivables","accounts receivable","debtor"],
  "inventory":["trading stock","stock","merchandise"],
  "bank":["cash at bank","bank account","cash"],
  "capital":["owners capital","owner's capital","owner's equity","owners equity","equity"],
  "services income":["current income","service income","fee income","fees earned","income","repair income"],
  "rent expense":["rent","rent paid"],
  "wages":["wages expense","salaries and wages"],
  "salaries":["salaries expense","salaries and wages"],
  "bad debts":["irrecoverable debts","credit losses","bad debt"],
  "repairs":["repairs and maintenance","repair expense","maintenance"],
  "balance":["balance b/d","balance b d","opening balance","bal b/d"],
  "cost of sales":["cost of goods sold","cogs"],
  "loan":["loan from bank","long-term loan","mortgage loan"]
 },
 questions:[

/* ---------- DEBIT AND CREDIT ENTRIES ---------- */
 {id:"ap-entry-001",topic:"debit-credit",difficulty:"Beginner",type:"entry",status:"published",tags:["double-entry","perpetual","credit purchase"],
  title:"Buying inventory on credit",business:"Naledi Stationery",
  intro:"Naledi Stationery purchases R4,800 of inventory on credit. The business uses the perpetual inventory system. Ignore VAT.\n\nComplete the entry by choosing the account debited and the account credited, and entering both amounts.",
  options:["Inventory","Purchases","Creditors control","Debtors control","Bank","Capital","Sales","Cost of sales"],
  rows:[{text:"Purchased inventory on credit, R4,800",debit:"Inventory",credit:"Creditors control",amount:4800,
   why:"Inventory increases and is debited. The liability owed to the supplier increases and is credited."}],
  explain:"Under the perpetual system, goods bought for resale go straight into the Inventory account (an asset), so Inventory is debited. Because the business has not paid yet, it owes the supplier: the liability Creditors control increases, so it is credited. Both sides are R4,800, so the accounting equation stays balanced.",
  tip:"Perpetual system: debit Inventory. Periodic system: debit Purchases. Same transaction, different account."},

 {id:"ap-entry-002",topic:"debit-credit",difficulty:"Beginner",type:"entry",status:"published",tags:["double-entry","capital","expenses","drawings"],
  title:"Four everyday transactions",business:"Naledi Stationery",
  intro:"Naledi Stationery uses the perpetual inventory system. Ignore VAT.\n\nFor each transaction, choose the account debited and the account credited, and enter the amounts.",
  options:["Bank","Capital","Drawings","Inventory","Debtors control","Creditors control","Rent expense","Sales","Cost of sales"],
  rows:[
   {text:"The owner, Naledi, deposits R20,000 of her own money into the business bank account as capital.",debit:"Bank",credit:"Capital",amount:20000,why:"Bank (an asset) increases, so it is debited. The owner’s capital (equity) increases, so it is credited."},
   {text:"Paid rent of R6,500 by EFT.",debit:"Rent expense",credit:"Bank",amount:6500,why:"Rent is an expense, and expenses increase on the debit side. Bank decreases, so it is credited."},
   {text:"Naledi takes stationery costing R300 from the shop for her personal use.",debit:"Drawings",credit:"Inventory",amount:300,why:"Goods taken by the owner reduce equity through Drawings (debited). Inventory decreases at cost price, so it is credited."},
   {text:"Received R1,750 from a debtor in settlement of their account.",debit:"Bank",credit:"Debtors control",amount:1750,why:"Bank increases (debit). The debtor now owes less, so the asset Debtors control decreases (credit). No income is earned here: the sale was recorded earlier."}
  ],
  explain:"Each transaction affects at least two accounts with equal debits and credits. Assets, expenses and drawings increase on the debit side; equity, liabilities and income increase on the credit side.",
  tip:"Receiving money from a debtor is not a new sale. The income was recorded when the credit sale happened."},

/* ---------- PERPETUAL INVENTORY ---------- */
 {id:"ap-entry-003",topic:"perpetual",difficulty:"Intermediate",type:"entry",status:"published",tags:["perpetual","cost of sales","credit sale"],
  title:"A credit sale under the perpetual system",business:"Naledi Stationery",
  intro:"Naledi Stationery uses the perpetual inventory system. It sells stationery on credit to a school for R6,000. The goods cost Naledi R4,000. Ignore VAT.\n\nUnder the perpetual system, a sale needs two entries. Complete both.",
  options:["Debtors control","Sales","Cost of sales","Inventory","Bank","Purchases","Creditors control"],
  rows:[
   {text:"Entry 1: record the sale at selling price.",debit:"Debtors control",credit:"Sales",amount:6000,why:"The school owes Naledi R6,000, so Debtors control (asset) is debited. Income from sales increases, so Sales is credited."},
   {text:"Entry 2: record the cost of the goods sold.",debit:"Cost of sales",credit:"Inventory",amount:4000,why:"The goods leave inventory at cost. Cost of sales (an expense) is debited and Inventory (asset) is credited."}
  ],
  explain:"The perpetual system updates inventory every time goods are sold. The first entry records the income at selling price; the second moves the cost of the goods from Inventory to Cost of sales. The R2,000 difference is the gross profit on this sale.",
  tip:"Two entries per sale: one at selling price, one at cost price."},

/* ---------- ACCOUNTING EQUATION ---------- */
 {id:"ap-eq-001",topic:"equation",difficulty:"Beginner",type:"equation",status:"published",tags:["accounting equation","assets","net zero"],
  title:"Five transactions on the accounting equation",business:"Thabo’s Car Wash",
  intro:"Show the effect of each transaction on the accounting equation. Use a minus sign for decreases (e.g. -12000). Leave a cell empty if there is no effect. Ignore VAT.",
  columns:{assets:["Bank","Equipment"],equity:["Owner’s equity"],liabilities:["Creditors"]},
  options:["Bank","Equipment","Capital","Creditors control","Services income","Wages"],
  rows:[
   {text:"Thabo deposits R50,000 into the business bank account as capital.",effects:{"Bank":50000,"Owner’s equity":50000},debit:"Bank",credit:"Capital",why:"Bank increases by R50,000 and owner’s equity increases by R50,000."},
   {text:"Bought a pressure washer (equipment) for R12,000 and paid by EFT.",effects:{"Bank":-12000,"Equipment":12000},debit:"Equipment",credit:"Bank",why:"One asset goes up and another goes down by the same amount. Total assets do not change, and equity and liabilities are not affected."},
   {text:"Bought a vacuum cleaner (equipment) for R8,000 on credit from Shine Supplies.",effects:{"Equipment":8000,"Creditors":8000},debit:"Equipment",credit:"Creditors control",why:"Equipment increases and the business now owes the supplier, so liabilities increase."},
   {text:"Washed cars for customers and received R3,500 cash, deposited immediately.",effects:{"Bank":3500,"Owner’s equity":3500},debit:"Bank",credit:"Services income",why:"Income increases equity. Bank also increases."},
   {text:"Paid wages of R1,200 by EFT.",effects:{"Bank":-1200,"Owner’s equity":-1200},debit:"Wages",credit:"Bank",why:"Expenses reduce equity. Bank decreases by the same amount."}
  ],
  explain:"After every transaction, the change in assets must equal the change in equity plus the change in liabilities. Transaction 2 is the tricky one: two assets change, but the total change in assets is zero.",
  tip:"Income increases owner’s equity; expenses decrease it."},

/* ---------- SOURCE DOCUMENTS ---------- */
 {id:"ap-src-001",topic:"source-documents",difficulty:"Beginner",type:"classify",status:"published",tags:["source documents"],
  title:"Which source document?",business:"Amahle’s Craft Shop",
  intro:"For each transaction, choose the source document that Amahle’s Craft Shop would use to record it.",
  choices:["Duplicate invoice","Original invoice","Duplicate receipt","Original receipt","Cheque counterfoil or EFT proof of payment","Duplicate credit note"],
  rows:[
   {text:"Sold craft goods on credit to a customer.",answer:"Duplicate invoice",why:"The business issues an invoice to the customer and keeps a copy (the duplicate) as its record of a credit sale."},
   {text:"Bought beads on credit from a supplier.",answer:"Original invoice",why:"The supplier sends its invoice. The business records the purchase from the original invoice it receives."},
   {text:"Received cash from a customer.",answer:"Duplicate receipt",why:"The business issues a receipt to the customer and keeps the duplicate as proof of money received."},
   {text:"Paid a supplier by EFT.",answer:"Cheque counterfoil or EFT proof of payment",why:"The business’s own record of a payment is the cheque counterfoil or the EFT confirmation."},
   {text:"A customer returned damaged goods bought on credit, and the shop issued a credit note.",answer:"Duplicate credit note",why:"The shop issues a credit note reducing what the customer owes, and keeps the duplicate as its record."}
  ],
  explain:"The rule of thumb: if the business issues the document, it records from its copy (the duplicate). If it receives the document from someone else, it records from the original.",
  tip:"Issued by us → duplicate. Received from others → original."},

/* ---------- GENERAL JOURNAL ---------- */
 {id:"ap-gj-001",topic:"general-journal",difficulty:"Intermediate",type:"journal",status:"published",tags:["general journal","bad debts","drawings","correction of errors"],
  title:"Four general journal entries",business:"Lindiwe’s Bakery",
  intro:"Record the following transactions of Lindiwe’s Bakery for March 2026 in the general journal. The bakery uses the perpetual inventory system. Ignore VAT.\n\n5 March: Lindiwe contributes her own oven, worth R15,000, to the business as capital.\n12 March: A debtor’s account of R900 is written off as irrecoverable.\n28 March: Lindiwe takes baked goods costing R450 (inventory) for her personal use.\n31 March: Repairs of R1,200 were incorrectly debited to the Equipment account. Correct the error.\n\nStart each entry with its date on the first row. Use one row per account, and add a narration under each entry.",
  options:["Equipment","Capital","Bad debts","Debtors control","Drawings","Inventory","Repairs","Bank","Creditors control"],
  entries:[
   {date:"5 March",lines:[{account:"Equipment",dr:15000},{account:"Capital",cr:15000}],why:"Equipment (asset) increases: debit. Capital increases because the owner contributed an asset: credit."},
   {date:"12 March",lines:[{account:"Bad debts",dr:900},{account:"Debtors control",cr:900}],why:"The irrecoverable amount is an expense: debit Bad debts. The debtor no longer owes it, so the asset Debtors control decreases: credit."},
   {date:"28 March",lines:[{account:"Drawings",dr:450},{account:"Inventory",cr:450}],why:"Goods taken by the owner are drawings (debit), recorded at cost. Inventory decreases (credit)."},
   {date:"31 March",lines:[{account:"Repairs",dr:1200},{account:"Equipment",cr:1200}],why:"The R1,200 belongs in Repairs (expense), so debit Repairs and credit Equipment to remove it from the asset account."}
  ],
  explain:"The general journal is used for transactions that don’t belong in the other journals: owner contributions of non-cash assets, write-offs, drawings of goods and corrections of errors. Each entry needs a date, equal debits and credits, and a short narration explaining it.",
  tip:"Corrections: work out what was done, what should have been done, and journalise the difference."},

/* ---------- T-ACCOUNTS ---------- */
 {id:"ap-t-001",topic:"ledger",difficulty:"Intermediate",type:"taccount",status:"published",tags:["ledger","T-account","balancing"],
  title:"Post to the Bank account and balance it",business:"Sipho’s Bike Repairs",
  intro:"Post the following to the Bank account of Sipho’s Bike Repairs for March 2026, then balance the account. Ignore VAT.\n\n1 March: Balance in the bank, R8,200 (favourable).\n3 March: Received R2,500 for bike repairs (Services income).\n9 March: Paid rent, R4,000.\n15 March: Sipho contributed additional capital, R5,000.\n22 March: Paid wages, R3,100.\n28 March: Received R1,800 from a debtor.\n\nIn the Details column, write the name of the other account affected (for the opening balance, write ‘Balance’).",
  accounts:[{name:"Bank",
   postings:[
    {side:"dr",details:"Balance",amount:8200},
    {side:"dr",details:"Services income",amount:2500},
    {side:"cr",details:"Rent expense",amount:4000},
    {side:"dr",details:"Capital",amount:5000},
    {side:"cr",details:"Wages",amount:3100},
    {side:"dr",details:"Debtors control",amount:1800}
   ],
   cd:{side:"cr",amount:10400},total:17500,bd:{side:"dr",amount:10400}}],
  explain:"Money received is debited to Bank and money paid out is credited. Debits total R17,500 and credits R7,100, so the balancing figure (balance c/d) of R10,400 goes on the credit side to make both sides R17,500. It is brought down on the debit side as the opening balance for April: a favourable bank balance.",
  tip:"The balance c/d goes on the smaller side; the balance b/d appears on the opposite side."},

/* ---------- VAT ---------- */
 {id:"ap-vat-001",topic:"vat",difficulty:"Beginner",type:"vat",status:"published",tags:["VAT","15%"],
  title:"Complete the VAT table",business:"Various suppliers (2026)",
  intro:"Assume VAT at 15%, the standard rate in South Africa in 2026. Complete the missing amounts. Round to two decimals where necessary.",
  rate:15,
  rows:[
   {excl:2000,vat:300,incl:2300,given:"excl"},
   {excl:5000,vat:750,incl:5750,given:"incl"},
   {excl:8000,vat:1200,incl:9200,given:"vat"},
   {excl:900,vat:135,incl:1035,given:"incl"}
  ],
  explain:"VAT = VAT-exclusive amount × 15%. VAT-inclusive = VAT-exclusive × 1.15. To go backwards: VAT-exclusive = VAT-inclusive ÷ 1.15, and VAT = VAT-inclusive × 15/115. If you only know the VAT, VAT-exclusive = VAT ÷ 0.15.",
  tip:"At 15%, VAT is 15/115 of a VAT-inclusive price, not 15% of it."},

/* ---------- PERIODIC INVENTORY ---------- */
 {id:"ap-per-001",topic:"periodic",difficulty:"Intermediate",type:"calc",status:"published",tags:["periodic","cost of sales","gross profit"],
  title:"Cost of sales under the periodic system",business:"Bongi’s Boutique",
  intro:"Bongi’s Boutique uses the periodic inventory system. Use the information below for the year ended 28 February 2026 to complete the calculation. Ignore VAT.",
  data:[["Inventory, 1 March 2025",42000],["Purchases",186000],["Purchase returns",6500],["Carriage on purchases (carriage inwards)",3200],["Import duties on purchases",4800],["Inventory, 28 February 2026 (physical count)",38500],["Sales",312000]],
  rows:[
   {label:"Opening inventory",answer:42000},
   {label:"Purchases",answer:186000},
   {label:"Less: Purchase returns",answer:6500,any:true},
   {label:"Add: Carriage inwards",answer:3200},
   {label:"Add: Import duties",answer:4800},
   {label:"Cost of goods available for sale",answer:229500,why:"42,000 + 186,000 − 6,500 + 3,200 + 4,800 = 229,500"},
   {label:"Less: Closing inventory",answer:38500,any:true},
   {label:"Cost of sales",answer:191000,why:"229,500 − 38,500 = 191,000"},
   {label:"Sales",answer:312000},
   {label:"Gross profit",answer:121000,why:"312,000 − 191,000 = 121,000"}
  ],
  explain:"Under the periodic system, cost of sales is only worked out at year-end: opening inventory plus net purchases (purchases less returns, plus carriage inwards and import duties) gives goods available for sale; subtracting the closing inventory counted at year-end gives cost of sales.",
  tip:"Carriage inwards and import duties are part of the cost of the goods. Carriage outwards is a selling expense instead."},

/* ---------- PERPETUAL CALCULATION ---------- */
 {id:"ap-perp-001",topic:"perpetual",difficulty:"Intermediate",type:"calc",status:"published",tags:["perpetual","inventory deficit","stock count"],
  title:"Inventory per ledger vs the stock count",business:"Ruri’s Hardware",
  intro:"Ruri’s Hardware uses the perpetual inventory system. Use the information for the year ended 28 February 2026 to work out the closing inventory per the ledger and any inventory deficit or surplus. Ignore VAT.",
  data:[["Opening inventory",30000],["Purchases",120000],["Purchase returns",2000],["Carriage inwards",1500],["Cost of sales recorded during the year",110000],["Inventory per physical count, 28 February 2026",39100]],
  rows:[
   {label:"Opening inventory",answer:30000},
   {label:"Add: Purchases",answer:120000},
   {label:"Less: Purchase returns",answer:2000,any:true},
   {label:"Add: Carriage inwards",answer:1500},
   {label:"Less: Cost of sales recorded",answer:110000,any:true},
   {label:"Closing inventory per ledger",answer:39500,why:"30,000 + 120,000 − 2,000 + 1,500 − 110,000 = 39,500"},
   {label:"Inventory per physical count",answer:39100},
   {label:"Inventory deficit",answer:400,any:true,why:"39,500 − 39,100 = 400 (fewer goods on hand than the ledger shows)"}
  ],
  explain:"Under the perpetual system the Inventory account is updated with every purchase and sale, so it shows what should be on hand. A physical count checks this. If the count is lower than the ledger, the difference is an inventory deficit (for example theft, damage or errors).",
  tip:"Perpetual: the ledger tells you what you should have. The count tells you what you do have."},

/* ---------- COST OF SALES AND GROSS PROFIT ---------- */
 {id:"ap-gp-001",topic:"cos-gp",difficulty:"Beginner",type:"calc",status:"published",tags:["mark-up","gross profit","percentages"],
  title:"Mark-up and gross profit",business:"Zinhle’s Shoe Store",
  intro:"Zinhle’s Shoe Store sold shoes that cost R80,000 at a mark-up of 50% on cost. Complete the calculation. Give the percentage to two decimals. Ignore VAT.",
  data:[["Cost of sales",80000],["Mark-up on cost","50%"]],
  rows:[
   {label:"Cost of sales",answer:80000},
   {label:"Mark-up on cost (%)",answer:50,unit:"%"},
   {label:"Sales",answer:120000,why:"80,000 + (50% × 80,000) = 120,000"},
   {label:"Gross profit",answer:40000,why:"120,000 − 80,000 = 40,000"},
   {label:"Gross profit as a % of sales",answer:33.33,unit:"%",tol:0.01,why:"40,000 ÷ 120,000 × 100 = 33.33%"}
  ],
  explain:"Mark-up is calculated on cost; gross profit margin is calculated on sales. That’s why a 50% mark-up gives a gross profit of only 33.33% of sales.",
  tip:"Mark-up is on cost. Margin is on sales. Same rand amount, different percentages."},

/* ---------- FINANCIAL STATEMENTS ---------- */
 {id:"ap-fs-001",topic:"statements",difficulty:"Intermediate",type:"statement",status:"published",tags:["statement of profit or loss","classification"],
  title:"Statement of profit or loss",business:"Mpho’s Mobile Repairs",
  heading:"Mpho’s Mobile Repairs · Statement of profit or loss for the year ended 28 February 2026",
  intro:"Use the balances below to prepare the statement of profit or loss. Not every balance belongs in this statement. Choose each account from the list, enter its amount, and work out every subtotal. Ignore VAT.",
  data:[["Sales",480000],["Cost of sales",260000],["Rent income",18000],["Interest income",2400],["Salaries",96000],["Rent expense",36000],["Advertising",8500],["Depreciation",12000],["Telephone",4900],["Interest expense",3600],["Drawings",40000],["Equipment",64000]],
  blocks:[
   {id:"sales",kind:"lines",label:"Sales",answer:[{account:"Sales",amount:480000}]},
   {id:"cos",kind:"lines",label:"Cost of sales",answer:[{account:"Cost of sales",amount:260000}]},
   {id:"gp",kind:"total",label:"Gross profit",answer:220000,formula:[["+","sales"],["-","cos"]]},
   {id:"oi",kind:"lines",label:"Other income",answer:[{account:"Rent income",amount:18000},{account:"Interest income",amount:2400}]},
   {id:"goi",kind:"total",label:"Gross operating income",answer:240400,formula:[["+","gp"],["+","oi"]]},
   {id:"opex",kind:"lines",label:"Operating expenses",answer:[{account:"Salaries",amount:96000},{account:"Rent expense",amount:36000},{account:"Advertising",amount:8500},{account:"Depreciation",amount:12000},{account:"Telephone",amount:4900}]},
   {id:"op",kind:"total",label:"Operating profit",answer:83000,formula:[["+","goi"],["-","opex"]]},
   {id:"fin",kind:"lines",label:"Finance cost",answer:[{account:"Interest expense",amount:3600}]},
   {id:"np",kind:"total",label:"Net profit for the year",answer:79400,formula:[["+","op"],["-","fin"]]}
  ],
  explain:"Income and expenses go in the statement of profit or loss. Drawings (a reduction in equity) and Equipment (an asset) do not: they belong in the statement of financial position. Gross profit is sales less cost of sales; other income is added; operating expenses are subtracted; finance cost (interest expense) is subtracted last.",
  tip:"Ask of every account: is it income or an expense? If not, it doesn’t belong here."},

 {id:"ap-fs-002",topic:"statements",difficulty:"Intermediate",type:"statement",status:"published",tags:["statement of financial position","classification","current vs non-current"],
  title:"Statement of financial position",business:"Mpho’s Mobile Repairs",
  heading:"Mpho’s Mobile Repairs · Statement of financial position at 28 February 2026",
  intro:"Use the balances below to prepare the statement of financial position. Not every balance belongs in this statement. Classify each item correctly and work out every total. Ignore VAT.",
  data:[["Equipment (carrying amount)",64000],["Fixed deposit (matures in 2028)",30000],["Inventory",22500],["Debtors control",15300],["Bank (favourable)",18200],["Cash float",1000],["Capital (closing balance)",101000],["Loan from Ubuntu Bank (repayable in 2030)",30000],["Creditors control",17600],["Accrued expenses",2400],["Sales",480000],["Salaries",96000]],
  accountNames:["Equipment","Fixed deposit","Inventory","Debtors control","Bank","Cash float","Capital","Loan","Creditors control","Accrued expenses","Sales","Salaries"],
  blocks:[
   {id:"nca",kind:"lines",label:"Non-current assets",answer:[{account:"Equipment",amount:64000},{account:"Fixed deposit",amount:30000}]},
   {id:"tnca",kind:"total",label:"Total non-current assets",answer:94000,formula:[["+","nca"]]},
   {id:"ca",kind:"lines",label:"Current assets",answer:[{account:"Inventory",amount:22500},{account:"Debtors control",amount:15300},{account:"Bank",amount:18200},{account:"Cash float",amount:1000}]},
   {id:"tca",kind:"total",label:"Total current assets",answer:57000,formula:[["+","ca"]]},
   {id:"ta",kind:"total",label:"TOTAL ASSETS",answer:151000,formula:[["+","tnca"],["+","tca"]]},
   {id:"eq",kind:"lines",label:"Owner’s equity",answer:[{account:"Capital",amount:101000}]},
   {id:"ncl",kind:"lines",label:"Non-current liabilities",answer:[{account:"Loan",amount:30000}]},
   {id:"cl",kind:"lines",label:"Current liabilities",answer:[{account:"Creditors control",amount:17600},{account:"Accrued expenses",amount:2400}]},
   {id:"tel",kind:"total",label:"TOTAL EQUITY AND LIABILITIES",answer:151000,formula:[["+","eq"],["+","ncl"],["+","cl"]]}
  ],
  explain:"Assets are split into non-current (held for longer than 12 months, such as equipment and a fixed deposit maturing after more than a year) and current (expected to be used or converted to cash within 12 months). Liabilities are split the same way. Sales and Salaries are income and expenses, so they belong in the statement of profit or loss. Total assets must equal total equity and liabilities.",
  tip:"The 12-month rule decides current vs non-current, for assets and liabilities alike."},

/* ---------- BANK RECONCILIATION ---------- */
 {id:"ap-br-001",topic:"bank-rec",difficulty:"Intermediate",type:"bankrec",status:"published",tags:["bank reconciliation","cash book","outstanding items"],
  title:"Update the cash book and reconcile",business:"Kagiso Traders",
  intro:"On 31 March 2026, Kagiso Traders’ cash book shows a favourable balance of R14,350 before any adjustments. The bank statement shows a favourable balance of R15,740. Compare them and use the information below.\n\nPart 1: decide how each item is treated and, if it belongs in the cash book, enter the amount. Then work out the updated cash book balance.\nPart 2: complete the bank reconciliation statement.",
  cbStart:14350,
  items:[
   {text:"Bank charges of R185 appear on the bank statement only.",treat:"cr",amount:185,why:"The bank has already deducted the charges, so record them as a payment in the cash book."},
   {text:"Interest of R65 earned on the account appears on the bank statement only.",treat:"dr",amount:65,why:"The bank has already added the interest, so record it as a receipt in the cash book."},
   {text:"A debit order of R1,240 for insurance appears on the bank statement only.",treat:"cr",amount:1240,why:"The bank has paid the insurer, so record it as a payment in the cash book."},
   {text:"A debtor paid R2,300 directly into the bank account; it appears on the bank statement only.",treat:"dr",amount:2300,why:"The money is already in the bank, so record it as a receipt in the cash book."},
   {text:"A deposit of R3,600 made on 31 March is in the cash book but not yet on the bank statement.",treat:"none",amount:3600,why:"This is an outstanding deposit: a timing difference. It is already in the cash book and goes on the reconciliation statement only."},
   {text:"An EFT payment of R4,050 to a supplier on 30 March is in the cash book but not yet on the bank statement.",treat:"none",amount:4050,why:"This is an unpresented (outstanding) payment: a timing difference. It is already in the cash book and goes on the reconciliation statement only."}
  ],
  updated:15290,
  updatedWhy:"14,350 − 185 + 65 − 1,240 + 2,300 = 15,290",
  recon:[
   {label:"Balance as per bank statement (favourable)",answer:15740},
   {label:"Add: Outstanding deposit",answer:3600},
   {label:"Less: Unpresented payment",answer:4050,any:true},
   {label:"Balance as per updated cash book (favourable)",answer:15290,why:"15,740 + 3,600 − 4,050 = 15,290, which agrees with the updated cash book"}
  ],
  explain:"First update the cash book with items the bank already knows about but the business doesn’t (charges, interest, debit orders, direct deposits). Timing differences (outstanding deposits and unpresented payments) are already in the cash book and only appear on the reconciliation statement. When the statement agrees with the updated cash book, the records reconcile.",
  tip:"Bank knows, we don’t → update the cash book. We know, bank doesn’t yet → reconciliation statement."}
 ]
};
