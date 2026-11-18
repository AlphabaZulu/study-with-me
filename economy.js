/* =====================================================================
   STUDY-WITH-ME!  ·  THE ECONOMY EXPLAINED — SHARED NEWS DATA
   (data/economy.js)
   ---------------------------------------------------------------------
   ONE news file for Economics AND Business Management. Each article has
   an Economics view and a Business view; the page picks the right one.

   CURRENT STATUS: In Development. Articles are chosen, checked and
   written up BY HAND. There is no live news feed yet.

   RULES FOR EVERY ARTICLE
   - headline  = the original publisher's headline, word for word.
   - summary and all explanations = written by Study-With-Me! in our own
     words. Never paste paragraphs from the source article.
   - facts     = confirmed figures, each with where it came from.
   - forecasts = what named experts or institutions EXPECT (not facts).
   - Everything under "explain" is Study-With-Me! analysis.
   - indicators = Economic Pulse ids (unemployment, cpi, repo, prime,
     gdp, usdzar, eurzar, gbpzar). The page shows the CURRENT Pulse
     figure next to the article, so the two never disagree silently.
   - retrieved = the date we checked the source.

   ADD AN ARTICLE: copy one block, change every field, keep the id
   unique and web-safe. Set visible:false to hide one without deleting.
   ===================================================================== */
window.SWM_ECONOMY={
 title:"The Economy Explained",
 subtitle:"What’s happening, why it matters, and what we can learn.",
 status:"In Development",
 statusNote:"Explainers are checked and written by hand. The automatic news feed is not running yet, so newer events may not appear here.",
 lastChecked:"2026-11-18",
 categories:[
  {id:"sa",name:"South African Economy",icon:"🇿🇦"},
  {id:"rates",name:"Interest Rates",icon:"🏦"},
  {id:"inflation",name:"Inflation",icon:"🛒"},
  {id:"unemployment",name:"Unemployment",icon:"👷"},
  {id:"fx",name:"Exchange Rates",icon:"💱"},
  {id:"business",name:"Business & Industry",icon:"🏭"},
  {id:"global",name:"Global Markets",icon:"🌍"},
  {id:"policy",name:"Economic Policy",icon:"📜"}
 ],

 /* ---------- SARB Rate Watch ----------
    The rate and prime figures are read from the Economic Pulse
    (data/pulse.js, ids "repo" and "prime") so they always match.
    Update the decision details below after each MPC meeting. */
 rateWatch:{
  decisionDate:"2026-09-23",
  effective:"2026-09-25",
  direction:"increase",          /* increase | decrease | unchanged */
  changeBps:25,
  previous:"7.00%",
  vote:"Unanimous (six members)",
  announcement:{name:"SARB, Statement of the Monetary Policy Committee, 23 September 2026",url:"https://www.resbank.co.za/content/dam/sarb/publications/statements/monetary-policy-statements/2026/september/september-statement.pdf"},
  nextDecision:"2026-11-19",
  nextConfirmedBy:"SARB MPC statement, 23 September 2026",
  upcoming2027:["2027-01-28","2027-03-18","2027-05-27","2027-07-22","2027-09-29","2027-11-25"],
  retrieved:"2026-11-18",
  explain:"In September 2026 the SARB’s Monetary Policy Committee raised the repo rate by a quarter of a percentage point. Its main worry was inflation: higher global oil prices were pushing up fuel prices, and the committee wanted to stop that from spreading into other prices and wage demands. A higher rate makes borrowing more expensive, which cools spending and, over time, inflation.",
  effects:{
   borrowing:"Home loans, car finance, credit cards and business overdrafts linked to prime become more expensive. Repayments on a typical variable-rate loan rise slightly.",
   saving:"Savings accounts and fixed deposits usually pay a little more interest, which rewards saving.",
   inflation:"Higher rates aim to slow spending so that price increases ease over the following one to two years. The effect is not immediate.",
   business:"Businesses with debt pay more interest. Some may delay expansion or new equipment, and customers with tighter budgets may spend less."
  },
  repoVsPrime:"The repo rate is the rate at which the SARB lends money to commercial banks. The prime lending rate is the benchmark rate banks charge their customers. In South Africa, prime is normally 3.5 percentage points above repo, so when repo moves, prime usually moves by the same amount on the same day. Your own loan rate is often quoted as prime plus or minus a margin."
 },

 articles:[
 /* ------------------------------------------------------------ */
 {id:"sarb-sept-2026-hike",visible:true,featured:true,
  categories:["rates","global"],indicators:["repo","prime","cpi"],
  headline:"MPC raises repo rate to 7.25%",
  published:"2026-09-23",
  source:{name:"SAnews (South African Government News Agency)",url:"https://www.sanews.gov.za/south-africa/mpc-raises-repo-rate-725"},
  official:{name:"SARB Monetary Policy Committee statement, 23 September 2026",url:"https://www.resbank.co.za/content/dam/sarb/publications/statements/monetary-policy-statements/2026/september/september-statement.pdf"},
  retrieved:"2026-11-18",
  summary:"The South African Reserve Bank raised its main interest rate by 0.25 percentage points to 7.25%. It said rising fuel prices, caused by disruptions to global oil supply, were the biggest risk to inflation.",
  facts:[
   {text:"The repo rate rose by 25 basis points, from 7.00% to 7.25%, effective 25 September 2026.",src:"SARB MPC statement"},
   {text:"The decision was unanimous among the committee’s six members.",src:"SARB MPC statement"},
   {text:"The prime lending rate rose to 10.75%.",src:"Widely reported, e.g. Business Day, 23 Sep 2026"},
   {text:"The SARB’s inflation target is 3%, with a tolerance band of 1 percentage point either side.",src:"SARB"}
  ],
  forecasts:[
   {text:"The SARB projected that headline inflation would rise above 5% later in 2026, peaking at about 5.7% in November.",who:"SARB MPC statement, September 2026"},
   {text:"The SARB lowered its 2026 GDP growth forecast to 1.2%, from 1.4%.",who:"SARB MPC statement, September 2026"}
  ],
  explain:{
   simple:"The Reserve Bank made borrowing slightly more expensive. It did this because petrol and diesel were getting pricier, and it didn’t want those higher costs to spread into the prices of everything else.",
   why:"Interest rates affect almost everyone: people paying off loans, people saving, and businesses deciding whether to borrow and grow. This was the second increase in 2026, so the extra cost of debt is adding up.",
   sa:{households:"Monthly repayments on home loans, car finance and credit cards rise a little, leaving less money for other spending.",businesses:"Firms with overdrafts or loans pay more interest, and some may postpone expansion.",economy:"Spending and borrowing slow down, which should ease inflation over time but can also weaken growth in an economy that was already struggling."},
   econ:"This is monetary policy in action. The SARB targets inflation, and its main tool is the repo rate. Raising it is contractionary: it increases the cost of credit, reduces aggregate demand and is meant to anchor inflation expectations. The trade-off is lower short-run growth, which connects to the idea of the Phillips curve. Note that the cause here was mainly cost-push inflation from oil, which interest rates can’t fix directly. The SARB is trying to prevent second-round effects, where higher fuel costs feed into wages and other prices.",
   econConcepts:["Monetary policy and the repo rate","Inflation targeting","Cost-push vs demand-pull inflation","Aggregate demand","Inflation expectations"],
   biz:"For a business, a rate hike changes the cost of capital. Loans and overdrafts linked to prime cost more, so investment projects need a higher return to be worth it. Customers who rely on credit may buy less, especially big-ticket items like furniture, cars and appliances. Managers might review pricing, cut unnecessary borrowing, manage stock levels more tightly and chase overdue customer accounts sooner to protect cash flow.",
   bizAreas:["Financial management: cost of debt","Investment decisions","Cash-flow management","Consumer demand and pricing"],
   next:[
    "The MPC could keep the rate unchanged at its 19 November 2026 meeting if it judges the September increase to be enough.",
    "It could raise the rate again if inflation rises faster than it expected.",
    "If oil prices fall and inflation eases, the conversation could eventually turn to rate cuts in 2027."
   ],
   example:"Thandi has a car loan at prime plus 2%. When prime rises from 10.50% to 10.75%, her interest rate rises from 12.50% to 12.75%, so her monthly instalment goes up slightly. Meanwhile, a small furniture store notices fewer customers applying for store credit.",
   discuss:["Should a central bank raise interest rates when inflation is caused mainly by oil prices it can’t control? Argue both sides.","Who is hurt most by a rate increase: savers, borrowers or the unemployed? Why?","If you ran a small business with an overdraft, what is one thing you would change after this decision?"]
  },
  questions:[
   {q:"By how many basis points did the repo rate change, and what is that as a percentage?",a:"25 basis points, which is 0.25 percentage points (from 7.00% to 7.25%)."},
   {q:"Why did the SARB say it raised the rate, even though the economy was weak?",a:"It saw upside risks to inflation, mainly from higher fuel prices linked to global oil supply disruptions, and wanted to stop those costs from spreading to other prices and wages (second-round effects)."},
   {q:"Application: Explain how this decision could affect the sales of a business that sells fridges on credit.",a:"Credit becomes more expensive for customers, so monthly instalments rise and some customers delay or cancel purchases. Sales volumes may fall, and the business may face more bad debts. It might respond with cash discounts, longer promotions or cheaper models."}
  ],
  practise:[{label:"Economics Chapter 1 quiz",href:"#quiz-economics"},{label:"Macroeconomics (planning phase)",href:"#economics-macro"},{label:"Business Management",href:"#business-management"}]
 },
 /* ------------------------------------------------------------ */
 {id:"cpi-sept-2026",visible:true,
  categories:["inflation","sa"],indicators:["cpi"],
  headline:"CPI rises in September",
  published:"2026-10-21",
  source:{name:"SAnews (South African Government News Agency)",url:"https://www.sanews.gov.za/node/85109"},
  official:{name:"Stats SA, Consumer Price Index, September 2026 (P0141)",url:"https://www.statssa.gov.za/publications/P0141/P0141September2026.pdf"},
  retrieved:"2026-11-18",
  summary:"Consumer inflation edged up for a second month, to 4.5% in September 2026. That is above the SARB’s 3% target and above the top of its 2–4% tolerance band.",
  facts:[
   {text:"Annual CPI inflation was 4.5% in September 2026, up from 4.4% in August and 4.3% in July.",src:"Stats SA, P0141"},
   {text:"Prices rose by 0.4% between August and September.",src:"Stats SA, P0141"},
   {text:"Stats SA’s next CPI release (for October 2026) was scheduled for 18 November 2026.",src:"Stats SA, P0141"}
  ],
  forecasts:[
   {text:"The market consensus had expected 4.7% for September, so the result was lower than forecast.",who:"Reported by Business Day, 22 Oct 2026"},
   {text:"Some economists expected October’s large petrol price increase to push inflation above 5%.",who:"Reported by Reuters via Engineering News, 21 Oct 2026"}
  ],
  explain:{
   simple:"On average, the things households buy cost 4.5% more than a year earlier. Prices are still rising a bit faster each month.",
   why:"Inflation decides how far your money goes. When it rises faster than incomes, people can afford less. It also guides the Reserve Bank’s interest-rate decisions.",
   sa:{households:"Groceries, transport and other essentials take a bigger share of the budget, especially for low-income households.",businesses:"Suppliers raise their prices, so operating costs go up. Businesses must decide whether to pass costs on to customers.",economy:"Inflation above the target makes it less likely that interest rates will fall soon."},
   econ:"CPI measures the change in the price of a fixed basket of goods and services. A rise from 4.4% to 4.5% means prices are increasing slightly faster, not that prices fell. Inflation erodes purchasing power and real incomes. When inflation is above target, the central bank is more likely to keep interest rates high. This links to the difference between nominal and real values: a 4% pay rise with 4.5% inflation is a real pay cut.",
   econConcepts:["Consumer price index","Purchasing power","Nominal vs real values","Inflation target and tolerance band"],
   biz:"Rising inflation pushes up input costs such as stock, transport, packaging and rent. If a business can’t raise its own prices at the same pace, its profit margin shrinks. Customers become more price-sensitive and may switch to cheaper brands. Managers often respond by reviewing prices more often, negotiating with suppliers, buying in bulk before increases and offering value ranges.",
   bizAreas:["Pricing strategy","Cost control","Supplier negotiations","Consumer behaviour"],
   next:[
    "October’s figure could come in higher if the sharp petrol price increase that month shows up in the data.",
    "If fuel prices ease in the coming months, inflation could start to slow.",
    "Continued above-target inflation could keep interest rates higher for longer."
   ],
   example:"Sipho runs a small bakery. Flour, electricity and delivery costs have all gone up, but his customers are already stretched. He keeps his standard loaf price steady, raises the price of speciality bread slightly and buys flour in bulk to lock in a better price.",
   discuss:["Does 4.5% inflation feel the same for every household? Who feels it most and why?","Is it better for a business to raise prices now or absorb costs and risk lower profits?"]
  },
  questions:[
   {q:"What does an annual inflation rate of 4.5% mean?",a:"On average, the basket of goods and services households buy costs 4.5% more than it did 12 months earlier."},
   {q:"Inflation rose from 4.4% to 4.5%. Did prices fall, stay the same or rise faster?",a:"Prices rose slightly faster. Inflation measures the rate of increase, so a higher rate means prices are rising more quickly."},
   {q:"Application: An employee gets a 4% salary increase this year. If inflation is 4.5%, what has happened to her real income?",a:"Her real income has fallen by roughly 0.5%, because her pay rose more slowly than prices. She can buy slightly less than before."}
  ],
  practise:[{label:"Economics Chapter 1 quiz",href:"#quiz-economics"},{label:"Microeconomics: prices and markets",href:"#economics-micro"},{label:"Business Management",href:"#business-management"}]
 },
 /* ------------------------------------------------------------ */
 {id:"qlfs-q3-2026",visible:true,
  categories:["unemployment","sa"],indicators:["unemployment"],
  headline:"Unemployment marginally increases in third quarter",
  published:"2026-11-10",
  source:{name:"SAnews (South African Government News Agency)",url:"https://www.sanews.gov.za/south-africa/unemployment-marginally-increases-third-quarter"},
  official:{name:"Stats SA website (Quarterly Labour Force Survey, Q3 2026)",url:"https://www.statssa.gov.za/"},
  retrieved:"2026-11-18",
  summary:"South Africa’s official unemployment rate edged up to 33.7% in the third quarter of 2026. More people found jobs, but even more people joined the search for work.",
  facts:[
   {text:"The official unemployment rate rose by 0.1 percentage points, from 33.6% in Q2 to 33.7% in Q3 2026.",src:"Stats SA QLFS, via SAnews"},
   {text:"Employment rose by 101,000 to 16.8 million, while the number of unemployed people rose by 97,000 to 8.6 million.",src:"Stats SA QLFS, reported by BusinessTech and EWN"},
   {text:"The youth unemployment rate fell by 0.1 percentage points to 47.3%.",src:"Stats SA QLFS, via SAnews"},
   {text:"Formal-sector employment grew by 268,000, while informal and household-sector employment fell by 166,000.",src:"Stats SA QLFS, reported by Business Day"}
  ],
  forecasts:[],
  explain:{
   simple:"About one in three people who want a job and are looking for one can’t find work. Jobs were created, but not enough for everyone entering the job market.",
   why:"Unemployment affects household incomes, poverty, crime, tax revenue and how much people can spend. Youth unemployment, at nearly half of young people in the labour force, is a major long-term concern.",
   sa:{households:"Many households rely on one income or on social grants, which limits spending and savings.",businesses:"There is a large pool of job-seekers, but scarce skills can still be hard to find. Weak incomes also limit customer demand.",economy:"High unemployment means the economy is producing far below its potential and puts pressure on government finances."},
   econ:"The unemployment rate is the number of unemployed people divided by the labour force (employed plus unemployed). Here, employment and unemployment both rose because the labour force grew. That is why a rate can rise even when jobs are created. South Africa’s unemployment is largely structural (a mismatch between skills and available jobs) rather than only cyclical.",
   econConcepts:["Labour force and unemployment rate","Structural vs cyclical unemployment","Formal and informal sectors","Labour supply and demand"],
   biz:"For businesses, high unemployment means lower purchasing power among customers, which affects sales of non-essential goods. It also shapes human-resource decisions: entry-level roles attract many applicants, while skilled positions can stay vacant. Businesses may invest in training, learnerships and youth-employment programmes, which can also support their social responsibility goals.",
   bizAreas:["Human resource management","Corporate social responsibility","Market demand","Skills development"],
   next:[
    "If formal-sector job growth continues, unemployment could stabilise or fall slightly.",
    "If the economy remains weak, more people may become discouraged and stop looking for work, which can lower the official rate without real improvement.",
    "Policy debates about skills, youth employment and small-business support are likely to continue."
   ],
   example:"A retailer advertises five entry-level jobs and receives hundreds of applications in a day. At the same time, it has struggled for months to hire a qualified refrigeration technician for its cold-storage room.",
   discuss:["Why can unemployment rise even when the number of jobs increases?","What could businesses do to help reduce youth unemployment, and what is in it for them?"]
  },
  questions:[
   {q:"What was the official unemployment rate in Q3 2026, and how did it change?",a:"33.7%, up by 0.1 percentage points from 33.6% in Q2 2026."},
   {q:"Employment grew by 101,000, yet unemployment rose. Explain how this is possible.",a:"The labour force grew faster than jobs were created. The number of unemployed people rose by 97,000 because more people started looking for work, so the unemployment rate still increased."},
   {q:"Application: Suggest two ways a medium-sized manufacturer could respond to a shortage of skilled workers.",a:"For example: run in-house training or learnership programmes, partner with TVET colleges, offer bursaries, improve pay or benefits for scarce skills, or invest in equipment that is easier to operate."}
  ],
  practise:[{label:"Microeconomics: labour markets",href:"#economics-micro"},{label:"Business Management",href:"#business-management"}]
 },
 /* ------------------------------------------------------------ */
 {id:"gdp-rebasing-2026",visible:true,
  categories:["sa"],indicators:["gdp"],
  headline:"Benchmarking and rebasing lift the economy by 4,9%",
  published:"2026-10-29",
  source:{name:"Stats SA press statement",url:"https://www.statssa.gov.za/publications/Report%2004-04-04/Press%20statement.pdf"},
  official:null,
  retrieved:"2026-11-18",
  summary:"Stats SA updated how it measures the size of the economy, moving the base year from 2015 to 2022. The update showed the economy was about 4.9% larger than previously estimated.",
  facts:[
   {text:"Stats SA changed the GDP base year from 2015 to 2022 and published revised estimates on 29 October 2026.",src:"Stats SA press statement"},
   {text:"The revision raised the estimated size of the economy by 4.9%.",src:"Stats SA press statement"},
   {text:"Mining had the largest upward revision, at 12.5%, partly because of better coverage of illegal mining.",src:"Stats SA, reported by EWN, 29 Oct 2026"},
   {text:"Real GDP growth for 2025 was revised to 0.9%, from 1.1%.",src:"Stats SA, reported by Business Day, 29 Oct 2026"}
  ],
  forecasts:[],
  explain:{
   simple:"Stats SA updated its measuring tools and found the economy is bigger than we thought. Nothing new was produced overnight: the old measurements were simply missing some activity.",
   why:"Many important figures are calculated as a share of GDP, such as government debt and the budget deficit. A larger GDP makes those ratios look smaller, which can affect how investors and ratings agencies see the country.",
   sa:{households:"There is no direct effect on household incomes. The economy’s size was remeasured, not changed.",businesses:"Better data gives businesses a more accurate picture of which industries are larger or growing.",economy:"Debt-to-GDP and deficit ratios improve on paper, which may help investor confidence. Growth rates, though, barely changed."},
   econ:"GDP is the total value of final goods and services produced in a country. Rebasing updates the base year used to calculate real GDP, and benchmarking updates the data sources and methods. This changes the measured level of GDP but usually changes growth rates much less. It is a good example of why economists distinguish between the level of a variable and its rate of change.",
   econConcepts:["Gross domestic product","Real vs nominal GDP","Base year","Level vs growth rate"],
   biz:"For businesses, the revised figures give a clearer view of where economic activity is happening. Industries revised upward, such as mining, may be bigger markets than previously thought. Improved government finance ratios could support business confidence, but the underlying growth rate, which drives demand, is still low.",
   bizAreas:["Market research","Business environment (macro)","Investment decisions"],
   next:[
    "Stats SA said it would release revised historical data back to 1993 later in November 2026.",
    "The next regular quarterly GDP release will be the first to use the new 2022 base year.",
    "Ratings agencies and investors may take the improved debt ratios into account."
   ],
   example:"Imagine a school measuring learners’ heights with an old tape measure that was missing the first few centimetres. A new tape shows everyone is taller than recorded, but nobody grew overnight.",
   discuss:["Why might a government welcome a larger GDP estimate even if growth hasn’t changed?","What does this revision teach us about the limits of economic statistics?"]
  },
  questions:[
   {q:"What did Stats SA change in October 2026?",a:"It rebased GDP from a 2015 base year to 2022 and updated (benchmarked) its data sources, which showed the economy is about 4.9% larger than previously estimated."},
   {q:"Does a 4.9% upward revision mean the economy grew by 4.9%? Explain.",a:"No. It means the level of GDP was underestimated. Growth rates changed very little; for example, 2025 growth was revised from 1.1% to 0.9%."},
   {q:"Application: How could a larger GDP estimate affect the government’s debt-to-GDP ratio, and why does that matter?",a:"The same amount of debt divided by a larger GDP gives a lower ratio. That can make the government look more able to repay its debt, which may improve investor confidence and borrowing costs."}
  ],
  practise:[{label:"Macroeconomics (planning phase)",href:"#economics-macro"},{label:"Economics Chapter 1 quiz",href:"#quiz-economics"}]
 },
 /* ------------------------------------------------------------ */
 {id:"treasury-ratios-2026",visible:true,
  categories:["policy","sa"],indicators:["gdp"],
  headline:"Revised GDP figures improve key fiscal ratios",
  published:"2026-11-05",
  source:{name:"SAnews (South African Government News Agency)",url:"https://www.sanews.gov.za/node/85459"},
  official:null,
  retrieved:"2026-11-18",
  summary:"After Stats SA’s GDP revision, National Treasury recalculated its main budget ratios. Because GDP is larger, debt and the deficit now make up a smaller share of the economy.",
  facts:[
   {text:"National Treasury said the rebasing raised measured nominal GDP by 5.1% (R393 billion).",src:"National Treasury, via SAnews"},
   {text:"Debt-to-GDP peaked at 74.6% in 2025/26, down from the 78.4% estimated in the 2026 Medium Term Budget Policy Statement.",src:"National Treasury, via SAnews / AllAfrica"},
   {text:"The main budget deficit for 2026/27 is now 3.5% of GDP, compared with 3.7% before.",src:"National Treasury, via SAnews / AllAfrica"}
  ],
  forecasts:[],
  explain:{
   simple:"The government owes the same amount of money as before, but because the economy turned out to be bigger, that debt is a smaller share of it.",
   why:"Investors and ratings agencies watch debt-to-GDP closely. A lower ratio suggests the government is better able to manage its debt.",
   sa:{households:"No immediate change, but healthier public finances can, over time, reduce pressure for tax increases.",businesses:"Improved ratios may support confidence and could help lower government borrowing costs, which influence other interest rates.",economy:"Public finances look healthier on paper, although the actual amount of debt hasn’t changed."},
   econ:"This is fiscal policy measurement. Ratios such as debt-to-GDP put government debt in context by comparing it with the size of the economy. Treasury called this a mechanical adjustment: the numerator (debt) stayed the same while the denominator (GDP) rose.",
   econConcepts:["Fiscal policy","Government debt and deficits","Debt-to-GDP ratio"],
   biz:"For businesses, government finances matter because they affect taxes, government spending and the country’s borrowing costs. A healthier-looking debt ratio may support investor sentiment, but businesses will still watch actual spending and tax decisions in the budget.",
   bizAreas:["Macro business environment","Government policy and taxation"],
   next:[
    "Treasury will use the revised figures in future budget documents.",
    "Ratings agencies may consider the new ratios in their next reviews.",
    "The actual debt level will still depend on future spending, revenue and growth."
   ],
   example:"If you owe R74,000 and earn R100,000, your debt is 74% of your income. If you discover you actually earn R105,000, your debt ratio drops, even though you still owe R74,000.",
   discuss:["Is a lower debt ratio from rebasing ‘real’ progress? Why or why not?"]
  },
  questions:[
   {q:"What happened to the debt-to-GDP ratio after the revision, and why?",a:"It fell (peaking at 74.6% instead of 78.4%) because GDP was revised upward while the amount of debt stayed the same."},
   {q:"Application: Why might lower government borrowing costs benefit businesses?",a:"Government bond yields influence other interest rates in the economy. Lower government borrowing costs can ease financing costs for businesses and support investment."}
  ],
  practise:[{label:"Macroeconomics (planning phase)",href:"#economics-macro"}]
 },
 /* ------------------------------------------------------------ */
 {id:"fuel-levy-nov-2026",visible:true,
  categories:["inflation","policy","global"],indicators:["cpi"],
  headline:"South Africa's diesel price to drop this month, petrol little changed after levy cut",
  published:"2026-11-03",
  source:{name:"Reuters, published by Engineering News",url:"https://engineeringnews.co.za/print-version/south-africas-diesel-price-to-drop-this-month-petrol-little-changed-2026-11-03"},
  official:null,
  retrieved:"2026-11-18",
  summary:"A temporary cut to the fuel levy lowered the wholesale diesel price by up to R1.20 a litre from 4 November 2026, while the petrol price fell by just 1c a litre.",
  facts:[
   {text:"From 4 November 2026, the wholesale diesel price fell by up to R1.20 a litre and the petrol price fell by 1c a litre.",src:"Petroleum department announcement, reported by Reuters"},
   {text:"The fuel levy was cut by R3 a litre for diesel and R1.50 a litre for petrol from 4 November to 1 December 2026.",src:"Reported by Reuters"},
   {text:"From 2 December 2026 to 5 January 2027, the levy relief is smaller: R1.50 a litre for diesel and R1.00 a litre for petrol.",src:"Reported by TopAuto and CAR magazine"}
  ],
  forecasts:[
   {text:"Mid-November projections pointed to lower petrol prices and higher diesel prices in December. Official December prices had not been announced when we checked.",who:"Central Energy Fund data, reported by EWN and CAR magazine"}
  ],
  explain:{
   simple:"The government temporarily reduced the tax it charges on fuel. That stopped petrol prices from rising and made diesel cheaper for a few weeks.",
   why:"South Africa imports most of its fuel, so global oil prices feed directly into transport and food costs. Fuel prices were a major reason inflation and interest rates rose in 2026.",
   sa:{households:"Petrol drivers saw little change, but cheaper diesel can ease transport and food costs over time.",businesses:"Transport, farming, logistics and mining businesses that use diesel benefit most from the relief.",economy:"The cut eases inflation pressure for a short time but reduces government tax revenue."},
   econ:"A fuel levy is an indirect tax. Cutting it lowers the price consumers pay and shifts the supply curve to the right. Because fuel is an input into almost everything, fuel prices are a classic source of cost-push inflation. The relief is temporary, so prices may rise again when it ends.",
   econConcepts:["Indirect taxes","Cost-push inflation","Price elasticity of demand for fuel","Government intervention in markets"],
   biz:"Fuel is a major operating cost for many businesses. Cheaper diesel lowers transport and production costs, which can protect margins or allow lower prices. Because the relief is temporary, managers should avoid locking in prices that assume diesel will stay cheap.",
   bizAreas:["Operating costs","Logistics","Pricing decisions","Risk management"],
   next:[
    "When the levy relief shrinks on 2 December, diesel prices could rise even if global prices stay the same.",
    "If global oil prices fall, the end of the relief may be partly cushioned.",
    "Government may need to decide whether to extend relief, which has a cost to the budget."
   ],
   example:"A trucking company that delivers vegetables from Limpopo to Gauteng saves on diesel in November. The owner uses the saving to repair a truck rather than cutting delivery prices, because she knows the relief ends soon.",
   discuss:["Should the government cut fuel taxes when prices rise? Who benefits most, and who pays?","How should a business plan for a cost saving it knows is temporary?"]
  },
  questions:[
   {q:"What is a fuel levy, and what kind of tax is it?",a:"A tax added to the price of each litre of fuel. It is an indirect tax, because it is collected through the price of a product rather than from income."},
   {q:"Why did diesel prices fall more than petrol prices in November 2026?",a:"The levy cut was larger for diesel (R3 a litre) than for petrol (R1.50 a litre), and other price factors largely cancelled out the petrol saving."},
   {q:"Application: A delivery business saves money on diesel for one month. Give one sensible and one risky way to use the saving.",a:"Sensible: maintain vehicles, pay down debt or build a cash buffer. Risky: permanently cutting delivery prices, which would be hard to reverse when diesel rises again."}
  ],
  practise:[{label:"Microeconomics: markets and taxes",href:"#economics-micro"},{label:"Business Management",href:"#business-management"}]
 },
 /* ------------------------------------------------------------ */
 {id:"retail-aug-2026",visible:true,
  categories:["business","sa"],indicators:["cpi"],
  headline:"Retail trade sales (Preliminary), August 2026",
  published:"2026-10-21",
  source:{name:"Stats SA, statistical release P6242.1",url:"https://www.statssa.gov.za/publications/P62421/P62421August2026.pdf"},
  official:null,
  retrieved:"2026-11-18",
  summary:"Retail sales grew by 3.3% in August 2026 compared with a year earlier, after adjusting for price changes. Shoppers kept spending despite rising living costs.",
  facts:[
   {text:"Retail trade sales rose by 3.3% year on year in August 2026, measured at constant 2019 prices.",src:"Stats SA, P6242.1"},
   {text:"Stats SA scheduled the September 2026 retail figures for release on 18 November 2026.",src:"Stats SA, P6242.1"}
  ],
  forecasts:[],
  explain:{
   simple:"People bought more in shops in August than a year before, even after taking higher prices into account.",
   why:"Household spending is the biggest part of South Africa’s economy, so retail sales are a useful early sign of how consumers are coping.",
   sa:{households:"Spending held up, although rising costs and interest rates are squeezing budgets.",businesses:"Retailers saw growth, but performance varied between types of stores.",economy:"Resilient consumer spending supports economic growth in a year when other parts of the economy were weak."},
   econ:"Retail sales are reported at constant prices to remove the effect of inflation, so the 3.3% figure reflects a real increase in volume. Household consumption is a major component of aggregate demand (C in C + I + G + (X − M)). Rising interest rates and inflation would normally be expected to slow it over time.",
   econConcepts:["Real vs nominal values","Consumption and aggregate demand","Business cycles"],
   biz:"For retailers, the figures show demand is holding up, but managers should look beyond the headline. Different categories perform differently, and customers are price-sensitive. Retailers may focus on stock planning for the festive season, promotions, value ranges and controlling costs as interest rates rise.",
   bizAreas:["Retail management","Marketing and promotions","Stock control","Consumer behaviour"],
   next:[
    "Festive-season spending could lift sales further at the end of the year.",
    "Higher interest rates and inflation could start to slow spending in the coming months.",
    "The September release (due 18 November 2026) will show whether the trend continued."
   ],
   example:"A clothing chain sees strong August sales and orders extra stock for December, but chooses mostly mid-priced lines because its customers are watching their spending.",
   discuss:["Why do economists adjust retail sales for inflation before comparing years?","If you managed a store, how would you prepare for the festive season in a year of rising interest rates?"]
  },
  questions:[
   {q:"What does ‘at constant 2019 prices’ mean in this release?",a:"The figures are adjusted to remove price changes since 2019, so the growth rate reflects changes in the real volume of goods sold, not just higher prices."},
   {q:"Application: Give two reasons a retailer should be cautious despite strong August sales.",a:"For example: rising interest rates and inflation could reduce future spending; growth may be uneven across product categories; one month’s data may not show a lasting trend."}
  ],
  practise:[{label:"Business Management",href:"#business-management"},{label:"Microeconomics",href:"#economics-micro"}]
 }
 ]
};
