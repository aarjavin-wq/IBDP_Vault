IBV.add({
  id: "economics",
  syllabus: "Guide for first assessment 2022",
  intro: [
    "Economics HL is split into four units: Introduction, Microeconomics, Macroeconomics and the Global economy. Topics marked **HL** are only examined at HL.",
    "",
    "The nine key concepts (scarcity, choice, efficiency, equity, economic well-being, sustainability, change, interdependence, intervention) should run through your answers — especially your IA commentaries."
  ],
  assessment: [
    ["Paper 1", "1 h 15 · extended response — part (a) explain (10 marks) + part (b) evaluate with real-world examples (15 marks)", "20%"],
    ["Paper 2", "1 h 45 · data response — one question from a choice, using the text and data provided", "30%"],
    ["Paper 3", "1 h 45 · policy paper — calculations, then a recommended policy (HL only)", "30%"],
    ["Internal assessment", "Portfolio of three commentaries (max 800 words each) on news articles, each using a different key concept", "20%"]
  ],
  generalTips: [
    "Define the key terms in the question first — examiners reward precise definitions.",
    "Every diagram needs labelled axes, curves, equilibrium points and a title. Refer to the diagram in your writing (\"as shown in Figure 1, …\").",
    "Paper 1(b) and Paper 2 final parts need **real-world examples** (country, year, policy) — generic examples cap your mark.",
    "Evaluation = weigh up: short run vs long run, stakeholders affected, assumptions, priorities, and a justified conclusion.",
    "In Paper 3 show every step of a calculation with units, and keep your policy recommendation linked to the data given."
  ],
  units: [
    {
      title: "Unit 1: Introduction to economics",
      topics: [
        { num: "1.1", title: "What is economics?" },
        { num: "1.2", title: "How do economists approach the world?" }
      ]
    },
    {
      title: "Unit 2: Microeconomics",
      topics: [
        { num: "2.1", title: "Demand" },
        { num: "2.2", title: "Supply" },
        { num: "2.3", title: "Competitive market equilibrium" },
        { num: "2.4", title: "Critique of the maximizing behaviour of consumers and producers" },
        {
          num: "2.5", title: "Elasticity of demand",
          summary: [
            "**Price elasticity of demand (PED)** measures how responsive quantity demanded is to a change in the good's own price.",
            "",
            "$$PED = \\frac{\\%\\Delta Q_d}{\\%\\Delta P}$$",
            "",
            "PED is normally negative (law of demand), so we usually talk about its absolute value.",
            "",
            "| Value of PED | Description | Effect of a price rise on total revenue |",
            "|---|---|---|",
            "| 0 | Perfectly inelastic | Rises |",
            "| between 0 and 1 | Inelastic | Rises |",
            "| 1 | Unit elastic | No change |",
            "| greater than 1 | Elastic | Falls |",
            "| ∞ | Perfectly elastic | Falls to zero |",
            "",
            "### Determinants of PED",
            "- Number and closeness of substitutes (more substitutes → more elastic)",
            "- Degree of necessity / whether the good is habit-forming (necessities and addictive goods → inelastic)",
            "- Proportion of income spent on the good (larger share → more elastic)",
            "- Time period (demand becomes more elastic over time as consumers find alternatives)",
            "",
            "### Income elasticity of demand (YED)",
            "$$YED = \\frac{\\%\\Delta Q_d}{\\%\\Delta Y}$$",
            "- YED > 0: **normal good** (0 < YED < 1 necessity; YED > 1 luxury)",
            "- YED < 0: **inferior good**",
            "",
            "### Why it matters",
            "- Governments raise more tax revenue from goods with inelastic demand, and more of the tax burden falls on consumers.",
            "- Firms with inelastic demand can raise prices to increase revenue.",
            "- Primary commodities tend to have low PED and low YED, which helps explain volatile prices and the falling share of income spent on them as economies grow."
          ],
          terms: [
            ["Price elasticity of demand (PED)", "Responsiveness of quantity demanded to a change in the good's own price."],
            ["Elastic demand", "|PED| > 1: quantity demanded changes by a larger percentage than price."],
            ["Inelastic demand", "|PED| < 1: quantity demanded changes by a smaller percentage than price."],
            ["Unit elastic demand", "|PED| = 1: total revenue is unchanged when price changes."],
            ["Total revenue (TR)", "Price × quantity sold."],
            ["Income elasticity of demand (YED)", "Responsiveness of demand to a change in consumer income."],
            ["Normal good", "A good with positive YED — demand rises as income rises."],
            ["Inferior good", "A good with negative YED — demand falls as income rises."],
            ["Luxury good", "A normal good with YED > 1."]
          ],
          questions: [
            {
              q: "The price of a coffee rises from $4 to $5 and quantity demanded falls from 200 to 170 cups a day. Calculate the PED and state whether demand is elastic or inelastic.",
              marks: 2,
              a: [
                "So, %ΔQd = (170 − 200) / 200 × 100 = −15%",
                "Then, %ΔP = (5 − 4) / 4 × 100 = 25%",
                "Therefore, PED = −15 / 25 = **−0.6** → demand is **price inelastic** (|PED| < 1).",
                "",
                "Check: TR rises from $800 to $850, as expected for inelastic demand."
              ]
            },
            {
              q: "Using a diagram, explain why a government might choose to place an indirect tax on a good with price-inelastic demand.",
              marks: 4,
              a: [
                "- Diagram: steep demand curve; supply shifts up/left by the amount of the tax; new price P1 rises by nearly the full tax, quantity falls only slightly.",
                "- Because demand is inelastic, quantity falls proportionally less than price, so the tax base stays large → **high tax revenue** (shaded rectangle).",
                "- Most of the tax incidence falls on consumers.",
                "- Award marks for correct, labelled diagram (2) + explanation linked to the diagram (2)."
              ]
            }
          ],
          tips: [
            "Always calculate percentage changes first — don't divide the raw changes.",
            "A straight-line demand curve does **not** have a constant PED: demand is elastic at high prices and inelastic at low prices.",
            "If asked about tax incidence, link it to elasticity: the more inelastic side of the market bears more of the tax."
          ]
        },
        { num: "2.6", title: "Elasticity of supply" },
        { num: "2.7", title: "Role of government in microeconomics" },
        {
          num: "2.8", title: "Market failure — externalities and common pool or common access resources",
          summary: [
            "An **externality** is a cost or benefit to a third party that is not reflected in the market price. Because the market only accounts for private costs and benefits, it produces the wrong quantity → allocative inefficiency and a **welfare loss**.",
            "",
            "| Type | Diagram | Result |",
            "|---|---|---|",
            "| Negative production (e.g. factory pollution) | MSC above MPC | Over-production |",
            "| Negative consumption (e.g. smoking) | MSB below MPB | Over-consumption |",
            "| Positive production (e.g. firm training workers) | MSC below MPC | Under-production |",
            "| Positive consumption (e.g. vaccination, education) | MSB above MPB | Under-consumption |",
            "",
            "At the social optimum, **MSB = MSC**. The welfare loss triangle lies between the market quantity and the socially optimal quantity.",
            "",
            "### Policy responses",
            "- Negative externalities: Pigouvian/carbon taxes, tradable permits (cap and trade), legislation and regulation, education campaigns, nudges",
            "- Positive externalities: subsidies, direct government provision, legislation (e.g. compulsory schooling), advertising, nudges",
            "",
            "### Common pool resources",
            "Resources that are **rivalrous** but **non-excludable** (fish stocks, groundwater, forests). Individuals have an incentive to over-use them → depletion (the *tragedy of the commons*). This threatens sustainability. Responses include legislation, quotas, tradable permits and international cooperation."
          ],
          terms: [
            ["Externality", "A cost or benefit to a third party not involved in the transaction, not reflected in the price."],
            ["Marginal private cost (MPC)", "The cost to the producer of producing one more unit."],
            ["Marginal social cost (MSC)", "MPC plus any external cost of producing one more unit."],
            ["Marginal social benefit (MSB)", "MPB plus any external benefit of consuming one more unit."],
            ["Welfare loss", "The loss of social surplus when output is not at the socially optimal level (MSB = MSC)."],
            ["Pigouvian tax", "A tax set equal to the external cost, designed to internalise a negative externality."],
            ["Tradable permits", "Permits allowing a set amount of pollution that firms can buy and sell; the cap limits total pollution."],
            ["Common pool resource", "A resource that is rivalrous but non-excludable, so it tends to be over-used."]
          ],
          questions: [
            {
              q: "Explain, using a diagram, why a negative production externality leads to market failure.",
              marks: 10,
              a: [
                "- Define **market failure** and **negative production externality**.",
                "- Diagram: MPC (= S), MSC above MPC, MPB = MSB (= D). Mark market equilibrium Qm (MPB = MPC) and social optimum Qopt (MSB = MSC). Shade the welfare loss triangle.",
                "- Explain: the producer ignores the external cost, so Qm > Qopt — too many resources are allocated to the good.",
                "- At units between Qopt and Qm, MSC > MSB, so society loses welfare → allocative inefficiency.",
                "- Real-world example earns credit (e.g. coal-fired power stations, CO₂ emissions)."
              ]
            }
          ],
          tips: [
            "Label curves exactly: MPC, MSC, MPB, MSB — not just S and D.",
            "Point the welfare-loss triangle towards the socially optimal quantity.",
            "In evaluation questions, compare at least two policies (e.g. carbon tax vs cap-and-trade) on effectiveness, cost, equity and political feasibility."
          ]
        },
        { num: "2.9", title: "Market failure — public goods" },
        { num: "2.10", title: "Market failure — asymmetric information", hl: true },
        { num: "2.11", title: "Market failure — market power", hl: true },
        { num: "2.12", title: "The market's inability to achieve equity", hl: true }
      ]
    },
    {
      title: "Unit 3: Macroeconomics",
      topics: [
        { num: "3.1", title: "Measuring economic activity and illustrating its variations" },
        { num: "3.2", title: "Variations in economic activity — aggregate demand and aggregate supply" },
        { num: "3.3", title: "Macroeconomic objectives" },
        { num: "3.4", title: "Economics of inequality and poverty" },
        { num: "3.5", title: "Demand management — monetary policy" },
        { num: "3.6", title: "Demand management — fiscal policy" },
        { num: "3.7", title: "Supply-side policies" }
      ]
    },
    {
      title: "Unit 4: The global economy",
      topics: [
        { num: "4.1", title: "Benefits of international trade" },
        { num: "4.2", title: "Types of trade protection" },
        { num: "4.3", title: "Arguments for and against trade control/protection" },
        { num: "4.4", title: "Economic integration" },
        {
          num: "4.5", title: "Exchange rates",
          summary: [
            "An **exchange rate** is the value of one currency in terms of another (e.g. US$1 = ₹85).",
            "",
            "### Floating exchange rates",
            "Set by the demand for and supply of the currency on the foreign exchange market.",
            "- **Demand** for rupees comes from: foreigners buying Indian exports, inward FDI, portfolio investment into India, remittances sent to India, speculators expecting the rupee to rise.",
            "- **Supply** of rupees comes from: Indians buying imports, investing abroad, and speculators selling rupees.",
            "",
            "### Why exchange rates change",
            "- Relative interest rates (higher rates attract hot money → appreciation)",
            "- Relative inflation rates (higher inflation makes exports less competitive → depreciation)",
            "- Relative growth rates and investment flows",
            "- Speculation",
            "- Central bank intervention (buying/selling reserves, changing interest rates)",
            "",
            "### Effects of a depreciation",
            "- Exports become cheaper abroad, imports dearer → current account may improve (subject to Marshall–Lerner and the J-curve, HL)",
            "- Higher import prices → cost-push inflation",
            "- Can boost AD, growth and employment",
            "",
            "**Fixed** and **managed** exchange rate systems also exist — a central bank keeps the currency at, or within a band around, a target value."
          ],
          terms: [
            ["Exchange rate", "The value of one currency expressed in terms of another."],
            ["Appreciation", "A rise in the value of a currency under a floating system."],
            ["Depreciation", "A fall in the value of a currency under a floating system."],
            ["Revaluation / devaluation", "A deliberate rise / fall in the value of a currency under a fixed system."],
            ["Managed float", "A system where the rate floats but the central bank intervenes to influence it."],
            ["Hot money", "Short-term financial capital that moves between countries to earn higher interest returns."]
          ],
          questions: [
            {
              q: "The exchange rate moves from US$1 = ₹80 to US$1 = ₹85. Calculate the change in the rupee price of a US product costing $100, and state whether the rupee has appreciated or depreciated.",
              marks: 2,
              a: [
                "So, before: 100 × 80 = ₹8,000",
                "Then, after: 100 × 85 = ₹8,500",
                "Therefore, the price rises by **₹500** and the rupee has **depreciated** (each dollar now costs more rupees)."
              ]
            }
          ],
          tips: [
            "On exchange-rate diagrams the vertical axis is the price of the currency in terms of the *other* currency (e.g. $ per ₹) — label it carefully.",
            "When converting, ask yourself: should the answer be bigger or smaller? That catches multiply/divide mix-ups."
          ]
        },
        { num: "4.6", title: "Balance of payments" },
        { num: "4.7", title: "Sustainable development" },
        { num: "4.8", title: "Measuring development" },
        { num: "4.9", title: "Barriers to economic growth and/or economic development" },
        { num: "4.10", title: "Economic growth and/or economic development strategies" }
      ]
    }
  ]
});
