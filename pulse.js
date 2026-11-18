/* =====================================================================
   STUDY-WITH-ME!  ·  SA ECONOMIC PULSE — SHARED DATA   (data/pulse.js)
   ---------------------------------------------------------------------
   ONE data source for the Economic Pulse ticker on every page that shows
   it (Economics and Business Management). The ticker never fetches data
   itself: it only reads this file.

   CURRENT STATUS: Data integration in development.
   Figures are checked by hand from official sources and are NOT live.

   UPDATING A FIGURE BY HAND
     1. Check the official source (link in "source.url").
     2. Change value, display, period, released, checked and reviewBy.
     3. If you can't verify a figure, set pending:true and display:"—".
   reviewBy = the date by which a newer figure is expected (next release
   or next decision). After that date the ticker shows "may be out of
   date" until someone updates it.

   FUTURE LIVE FEED (not built yet)
     A server-side job (never in this page, so no API keys are exposed)
     would fetch each indicator on its own schedule and write this same
     structure:  exchange rates daily · CPI monthly · repo/prime after
     each MPC decision · unemployment and GDP quarterly.
     Respect each provider's terms of use (Stats SA, SARB).
   ===================================================================== */
window.SWM_PULSE={
 title:"Economic Pulse",
 status:"Data Integration in Development",
 note:"Figures checked by hand from official sources. Not live data.",
 checked:"2026-11-17",
 indicators:[
  {id:"unemployment",name:"Unemployment rate",short:"Unemployment",display:"33.7%",
   period:"Q3 2026 (Jul–Sep)",measure:"Official unemployment rate (LU1), Quarterly Labour Force Survey",
   source:{name:"Stats SA, Quarterly Labour Force Survey Q3 2026 (reported by SAnews)",url:"https://www.sanews.gov.za/south-africa/unemployment-marginally-increases-third-quarter"},
   released:"2026-11-10",checked:"2026-11-17",cadence:"Quarterly",reviewBy:"2027-02-28",
   economics:{
    means:"The share of people in the labour force who want work, are available and have looked for it, but don’t have a job.",
    measure:"Stats SA surveys households every quarter (the QLFS). The official rate counts people who actively looked for work recently. A broader measure also includes discouraged work-seekers who have given up looking.",
    theories:["Types of unemployment: frictional, structural and cyclical","Labour market supply and demand","Okun’s law: weak output growth goes with rising unemployment","The Phillips curve: the short-run trade-off between unemployment and inflation"],
    why:"It rises when businesses hire fewer people (weak demand, high costs, uncertainty) or when more people enter the labour force than jobs are created. Skills mismatches keep it high even when the economy grows.",
    sa:"South Africa’s unemployment is among the highest in the world, and much of it is structural and long-term. It weighs on household spending, tax revenue and inequality.",
    topics:[{label:"Macroeconomics: unemployment (planning phase)",href:"#economics-macro"},{label:"Microeconomics: supply and demand in labour markets",href:"#economics-micro"}],
    practise:{topic:"Supply and demand",label:"Practise supply and demand"}},
   business:{
    means:"How many people are looking for work but can’t find it. It shapes both how easily you can hire and how much your customers can spend.",
    costs:"A large pool of job-seekers can make entry-level hiring easier, but scarce skills (artisans, accountants, engineers) can still be hard and expensive to find.",
    customers:"When unemployment rises, fewer households have a steady income, so spending on non-essentials usually falls first.",
    profit:"Lower sales volumes can squeeze profit, especially for businesses that sell discretionary goods like clothing, furniture or restaurant meals.",
    managers:"Managers may focus on value products, adjust stock levels, invest in training to build skills in-house, or partner with learnership and youth-employment programmes.",
    opportunities:"Value retailers, informal-economy suppliers and skills-training businesses may see demand grow.",
    risks:"Weaker consumer demand, higher bad debts on credit sales and pressure on staff morale.",
    example:"A clothing store in a township mall notices customers choosing cheaper basics over new-season ranges. The manager shifts orders towards affordable lines and runs a lay-by option."},
   },
  {id:"cpi",name:"Inflation (CPI)",short:"CPI inflation",display:"4.5%",
   period:"September 2026 (year on year)",measure:"Annual change in the headline consumer price index",
   source:{name:"Stats SA, Consumer Price Index, September 2026 (P0141)",url:"https://www.statssa.gov.za/publications/P0141/P0141September2026.pdf"},
   released:"2026-10-21",checked:"2026-11-17",cadence:"Monthly",reviewBy:"2026-11-25",
   economics:{
    means:"How fast the general level of prices is rising. 4.5% means a typical basket of goods and services costs about 4.5% more than a year earlier.",
    measure:"Stats SA collects thousands of prices every month for a fixed ‘basket’ of goods and services that households buy, weighted by how much households spend on each.",
    theories:["Demand-pull inflation: too much spending chasing too few goods","Cost-push inflation: rising input costs such as fuel","Inflation expectations and wage–price spirals","Inflation targeting by the central bank"],
    why:"Fuel and food prices, the exchange rate, wage settlements, administered prices (like electricity) and overall demand all push it up or down.",
    sa:"Inflation reduces what a rand can buy, so households on fixed incomes feel it most. The SARB raises interest rates when it expects inflation to stay above its target.",
    topics:[{label:"Macroeconomics: inflation",href:"#economics-macro"},{label:"Microeconomics: prices and purchasing power",href:"#economics-micro"}],
    practise:{topic:"Inflation",label:"Practise inflation"}},
   business:{
    means:"How quickly prices are rising across the economy, including the prices you pay suppliers and the prices your customers can afford.",
    costs:"Rising input prices (stock, fuel, packaging, rent, electricity) push up operating costs, often before you can raise your own prices.",
    customers:"Customers’ money buys less, so they shop around, buy smaller quantities or switch to cheaper brands.",
    profit:"If costs rise faster than you can increase prices, your profit margin shrinks.",
    managers:"Managers may renegotiate supplier contracts, buy in bulk before price increases, cut waste, review pricing more often or offer smaller pack sizes.",
    opportunities:"Businesses that help customers save money (discount retail, energy-saving products) may gain customers.",
    risks:"Shrinking margins, staff asking for bigger increases and customers trading down.",
    example:"A spaza shop owner’s wholesaler raises bread and cooking-oil prices. She can absorb some of the increase, raise her shelf prices slightly or stock a cheaper brand, and each choice affects her margin differently."},
   },
  {id:"repo",name:"SARB repo rate",short:"Repo rate",display:"7.25%",
   period:"Effective 25 September 2026",measure:"The SARB’s policy interest rate, set by the Monetary Policy Committee",
   source:{name:"SARB Monetary Policy Committee decision, 23 September 2026 (reported by SAnews)",url:"https://www.sanews.gov.za/south-africa/mpc-raises-repo-rate-725"},
   released:"2026-09-23",checked:"2026-11-17",cadence:"After each MPC meeting (six a year)",reviewBy:"2026-11-19",
   reviewNote:"The MPC’s next decision is on 19 November 2026.",
   economics:{
    means:"The interest rate the South African Reserve Bank uses to steer borrowing costs across the economy. It’s the SARB’s main tool for controlling inflation.",
    measure:"It isn’t measured: it’s decided. The Monetary Policy Committee meets six times a year and announces whether the rate goes up, down or stays the same.",
    theories:["Monetary policy and inflation targeting","The monetary transmission mechanism: repo → bank rates → spending","Interest rates and the demand for money","Aggregate demand"],
    why:"The SARB raises the rate when it expects inflation to stay above target (for example after fuel-price shocks) and cuts it when inflation is under control and growth needs support.",
    sa:"Higher rates make home loans, car finance and credit cards more expensive, which cools spending and, over time, inflation. They can also support the rand.",
    topics:[{label:"Macroeconomics: monetary policy",href:"#economics-macro"},{label:"Inflation lesson: how the SARB responds",href:"#economics-macro"}],
    practise:{topic:"Inflation",label:"Practise inflation and the repo rate"}},
   business:{
    means:"The starting point for what banks charge businesses to borrow. When the repo rate moves, business loan rates usually follow.",
    costs:"Businesses with overdrafts, vehicle finance or term loans pay more interest when the repo rate rises.",
    customers:"Customers with home loans and credit agreements have less money left over, so spending on extras can slow.",
    profit:"Higher interest costs plus slower sales can both cut into profit.",
    managers:"Managers may delay expansion, pay down expensive debt, keep tighter control of stock and debtors, or lock in fixed rates where possible.",
    opportunities:"Businesses with cash reserves may find better deals on assets or acquisitions when others hold back.",
    risks:"More expensive borrowing for growth, and customers falling behind on credit payments.",
    example:"A small construction company planning to finance a new bakkie compares the monthly instalment before and after a rate increase, then decides whether to buy now, lease, or wait."},
   },
  {id:"prime",name:"Prime lending rate",short:"Prime rate",display:"10.75%",
   period:"Effective 25 September 2026",measure:"The benchmark rate banks charge their lowest-risk borrowers",
   source:{name:"Commercial banks’ prime rate (repo rate + 3.5 percentage points), e.g. Nedbank",url:"https://personal.nedbank.co.za/borrow/debt-assistance/repo-rate.html"},
   released:"2026-09-23",checked:"2026-11-17",cadence:"Changes when the repo rate changes",reviewBy:"2026-11-19",
   reviewNote:"Prime follows the MPC decision on 19 November 2026.",
   economics:{
    means:"The interest rate banks use as the benchmark for most loans. Many home loans and overdrafts are priced as prime plus or minus a margin.",
    measure:"Banks set it, and by convention it sits 3.5 percentage points above the repo rate, so it moves when the SARB changes the repo rate.",
    theories:["The cost of borrowing and investment demand","Consumption and saving decisions","The monetary transmission mechanism"],
    why:"It changes when the SARB changes the repo rate.",
    sa:"Because so much household and business debt is linked to prime, a change affects millions of monthly repayments within weeks.",
    topics:[{label:"Macroeconomics: interest rates and monetary policy",href:"#economics-macro"},{label:"Microeconomics: opportunity cost of borrowing vs saving",href:"#economics-micro"}],
    practise:{topic:"Opportunity cost",label:"Practise opportunity cost"}},
   business:{
    means:"The benchmark for what your bank charges on overdrafts, business loans and asset finance.",
    costs:"Every increase in prime raises interest on variable-rate debt, adding to monthly fixed costs.",
    customers:"Customers paying off bonds and car loans have less disposable income.",
    profit:"Higher finance costs reduce net profit, even if sales stay the same.",
    managers:"Managers may compare fixed versus variable loans, renegotiate terms, or fund growth from retained profit instead of debt.",
    opportunities:"Lower prime rates (when they come) can make expansion cheaper.",
    risks:"Cash-flow pressure for businesses that borrowed heavily when rates were lower.",
    example:"A guesthouse with an overdraft at prime + 2% sees its interest bill rise after a rate hike, so the owner reviews which upgrades can wait."},
   },
  {id:"usdzar",name:"USD/ZAR exchange rate",short:"USD/ZAR",display:"—",pending:true,
   period:"Daily rate",measure:"Rand per one US dollar",
   source:{name:"South African Reserve Bank, published exchange rates",url:"https://www.resbank.co.za/"},
   checked:"2026-11-17",cadence:"Daily (business days)",
   pendingNote:"Exchange rates change every business day. They’ll appear here once a verified daily feed is connected. Until then, check the SARB’s published rates.",
   economics:"fx",business:"fx"},
  {id:"gbpzar",name:"GBP/ZAR exchange rate",short:"GBP/ZAR",display:"—",pending:true,
   period:"Daily rate",measure:"Rand per one British pound",
   source:{name:"South African Reserve Bank, published exchange rates",url:"https://www.resbank.co.za/"},
   checked:"2026-11-17",cadence:"Daily (business days)",
   pendingNote:"Exchange rates change every business day. They’ll appear here once a verified daily feed is connected. Until then, check the SARB’s published rates.",
   economics:"fx",business:"fx"},
  {id:"eurzar",name:"EUR/ZAR exchange rate",short:"EUR/ZAR",display:"—",pending:true,
   period:"Daily rate",measure:"Rand per one euro",
   source:{name:"South African Reserve Bank, published exchange rates",url:"https://www.resbank.co.za/"},
   checked:"2026-11-17",cadence:"Daily (business days)",
   pendingNote:"Exchange rates change every business day. They’ll appear here once a verified daily feed is connected. Until then, check the SARB’s published rates.",
   economics:"fx",business:"fx"},
  {id:"gdp",name:"GDP growth rate",short:"GDP growth",display:"—",pending:true,
   period:"Quarterly (quarter on quarter)",measure:"Change in real GDP, seasonally adjusted",
   source:{name:"Stats SA, Gross Domestic Product (P0441)",url:"https://www.statssa.gov.za/?page_id=1854&PPN=P0441"},
   checked:"2026-11-17",cadence:"Quarterly",
   pendingNote:"Stats SA’s first estimate for Q2 2026 (released 8 September 2026) was a 0.2% contraction. Stats SA then revised its GDP series in a rebasing exercise on 29 October 2026, and the revised quarterly figure hasn’t been verified here yet, so no number is shown.",
   economics:{
    means:"How much the total value of goods and services produced in the economy grew (or shrank) compared with the previous quarter, after removing the effect of inflation.",
    measure:"Stats SA adds up the value added by every industry (mining, manufacturing, trade, finance and so on) each quarter, adjusts for price changes (real GDP) and for normal seasonal patterns.",
    theories:["The circular flow of income","The business cycle: expansion, peak, recession, recovery","Aggregate demand and aggregate supply","Economic growth as an outward shift of the production possibilities frontier"],
    why:"Changes in household spending, investment, government spending and exports versus imports, plus shocks like electricity supply, commodity prices or global conflict.",
    sa:"Slow growth makes it hard to create enough jobs or raise tax revenue. Two quarters of contraction in a row is often called a technical recession.",
    topics:[{label:"Macroeconomics: national income and growth (planning phase)",href:"#economics-macro"},{label:"Microeconomics: the production possibilities frontier",href:"#economics-micro"}],
    practise:{href:"#quiz-economics",label:"Practise with the Economics Chapter 1 quiz"}},
   business:{
    means:"Whether the economy as a whole is growing or shrinking. It’s a signal of how busy customers, suppliers and competitors are likely to be.",
    costs:"In a growing economy, demand for inputs and skilled staff rises, which can push costs up. In a slowdown, suppliers may compete harder on price.",
    customers:"Growth usually means more jobs and higher incomes, so customers spend more. Contraction means the opposite.",
    profit:"Sales and profit often rise and fall with the business cycle, especially for luxury goods, construction and manufacturing.",
    managers:"Managers use growth trends to time expansion, hiring and stock levels, and build buffers for downturns.",
    opportunities:"Growth phases suit expansion and new products. Downturns can suit businesses that offer value or efficiency.",
    risks:"Over-expanding just before a slowdown, or cutting back too hard and missing the recovery.",
    example:"A furniture manufacturer watches quarterly GDP and retail figures before deciding whether to add a second production shift."},
   }
 ],
 fx:{
  economics:{
   means:"How many rand it takes to buy one unit of a foreign currency. A higher number means a weaker rand (it takes more rand to buy the same dollar, pound or euro).",
   measure:"Exchange rates are set in currency markets every second. The SARB publishes daily reference rates.",
   theories:["Supply and demand for currencies in a floating exchange-rate system","Purchasing power parity","Interest-rate differentials and capital flows","Imported inflation and the balance of payments"],
   why:"Interest rates in South Africa versus other countries, commodity prices (gold, platinum, coal), investor confidence, political news and the global US dollar all move the rand.",
   sa:"A weaker rand makes imports such as fuel, medicines and electronics more expensive, which can push up inflation, but it helps exporters like mines and farms earn more rand.",
   topics:[{label:"Microeconomics: a currency’s price is set by supply and demand",href:"#economics-micro"},{label:"Macroeconomics: exchange rates and inflation",href:"#economics-macro"}],
   practise:{topic:"Supply and demand",label:"Practise supply and demand"}},
  business:{
   means:"How much your foreign purchases cost in rand, and how competitive your exports are.",
   costs:"When the rand depreciates, anything imported (stock, machinery, parts, software subscriptions priced in dollars or euros) costs more in rand.",
   customers:"Imported goods become more expensive for customers too, so they may switch to local alternatives.",
   profit:"Importers’ margins shrink if they can’t pass higher costs on. Exporters earn more rand for the same foreign sale.",
   managers:"Managers may buy forward cover from their bank, source more locally, adjust prices, or build currency risk into contracts.",
   opportunities:"A weaker rand can boost exports and tourism, and make local suppliers more competitive than imports.",
   risks:"Sudden cost jumps for importers, and price uncertainty when quoting customers.",
   example:"A Durban electronics importer pays her supplier in US dollars. When the rand weakens, the same shipment costs more in rand, so she weighs raising prices, ordering less, or using forward cover for the next order."}
 }
};
