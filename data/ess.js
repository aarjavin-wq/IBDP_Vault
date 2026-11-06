IBV.add({
  id: "ess",
  syllabus: "Guide for first assessment 2026",
  intro: [
    "ESS is an interdisciplinary course (Group 3 and Group 4). From 2026 it is offered at **HL**: HL students study the same eight topics in more depth plus three **HL lenses** — environmental law, environmental economics and environmental ethics."
  ],
  assessment: [
    ["Paper 1", "2 h · case-study based paper using a resource booklet (70 marks)", "30%"],
    ["Paper 2", "2 h 30 · short-answer, data-based and extended-response questions (80 marks)", "50%"],
    ["Internal assessment", "Individual investigation — your own research question, data collection and analysis", "20%"]
  ],
  generalTips: [
    "Learn the definitions word-for-word — many marks are for precise terminology.",
    "Use named, located case studies with data (place, year, figures).",
    "For \"evaluate\" and \"discuss\" questions, show more than one environmental value system (EVS) perspective.",
    "Draw systems diagrams with labelled storages (boxes) and flows (arrows)."
  ],
  units: [
    {
      title: "Topic 1: Foundation",
      topics: [
        { num: "1.1", title: "Perspectives" },
        {
          num: "1.2", title: "Systems",
          summary: [
            "A **system** is a set of interrelated parts working together to make a complex whole. Systems are shown as **storages** (stocks) linked by **flows**.",
            "",
            "### Types of system",
            "| System | Exchanges energy? | Exchanges matter? | Example |",
            "|---|---|---|---|",
            "| Open | Yes | Yes | Most ecosystems (a forest, a lake) |",
            "| Closed | Yes | No | Earth (approximately) |",
            "| Isolated | No | No | Does not exist naturally (the universe as a whole) |",
            "",
            "### Flows",
            "- **Transfer** — moves matter or energy to a new place without changing its state (e.g. water flowing in a river)",
            "- **Transformation** — changes the state, or forms a new product (e.g. evaporation; photosynthesis)",
            "",
            "### Feedback loops",
            "- **Negative feedback** — counteracts change and returns the system to equilibrium (stabilising). e.g. predator–prey populations.",
            "- **Positive feedback** — amplifies change, moving the system away from equilibrium (destabilising). e.g. melting ice → lower albedo → more warming → more melting.",
            "",
            "A **tipping point** is the critical threshold beyond which a system shifts to a new equilibrium — often driven by positive feedback. **Resilience** is a system's ability to avoid tipping points and maintain stability."
          ],
          terms: [
            ["Open system", "Exchanges both energy and matter with its surroundings."],
            ["Closed system", "Exchanges energy but not matter with its surroundings."],
            ["Isolated system", "Exchanges neither energy nor matter with its surroundings."],
            ["Negative feedback", "A loop that counteracts deviation and stabilises the system."],
            ["Positive feedback", "A loop that amplifies deviation and destabilises the system."],
            ["Steady-state equilibrium", "A system with continuous inputs and outputs whose overall state stays roughly constant."],
            ["Tipping point", "A critical threshold where a small change pushes a system into a new, often irreversible, state."],
            ["Resilience", "The ability of a system to maintain stability and avoid tipping points."]
          ],
          questions: [
            {
              q: "Distinguish between positive and negative feedback, using an example of each.",
              marks: 4,
              a: [
                "- Negative feedback counteracts change and stabilises the system [1], e.g. more prey → more predators → prey numbers fall [1].",
                "- Positive feedback amplifies change and destabilises the system [1], e.g. warming melts ice → lower albedo → more warming [1]."
              ]
            }
          ],
          tips: ["\"Distinguish\" questions need both sides of the contrast in each point — use \"whereas\"."]
        },
        { num: "1.3", title: "Sustainability" }
      ]
    },
    {
      title: "Topic 2: Ecology",
      topics: [
        {
          num: "2.1", title: "Individuals, populations, communities and ecosystems",
          terms: [
            ["Species", "A group of organisms that can interbreed to produce fertile offspring."],
            ["Population", "A group of organisms of the same species living in the same area at the same time, which can interbreed."],
            ["Community", "A group of populations living and interacting in the same area."],
            ["Ecosystem", "A community and the physical environment it interacts with."],
            ["Fundamental niche", "The full range of conditions and resources a species could use in the absence of competition."],
            ["Realised niche", "The actual range of conditions and resources a species uses, given competition and other limiting factors."]
          ]
        },
        {
          num: "2.2", title: "Energy and biomass in ecosystems",
          summary: [
            "Energy enters ecosystems through **photosynthesis** and is lost at each trophic level, mainly as heat from respiration. Typically only about **10%** is passed on to the next trophic level, which limits food chains to a few levels.",
            "",
            "### Productivity",
            "$$NPP = GPP - R$$",
            "$$NSP = GSP - R$$",
            "",
            "### Ecological pyramids",
            "- **Numbers** — can be inverted (e.g. one tree, many insects)",
            "- **Biomass** — can be inverted in some aquatic systems",
            "- **Productivity (energy)** — never inverted, because energy is lost at every level",
            "",
            "### Pollutants in food chains",
            "Persistent, non-biodegradable pollutants (e.g. DDT, mercury) build up inside organisms (**bioaccumulation**) and reach higher concentrations at higher trophic levels (**biomagnification**)."
          ],
          terms: [
            ["Gross primary productivity (GPP)", "The total gain in energy or biomass per unit area per unit time fixed by photosynthesis in producers."],
            ["Net primary productivity (NPP)", "GPP minus energy lost through respiration — the energy available to consumers."],
            ["Gross secondary productivity (GSP)", "The total energy or biomass assimilated by consumers (food eaten minus faecal loss)."],
            ["Net secondary productivity (NSP)", "GSP minus respiratory losses."],
            ["Bioaccumulation", "The build-up of a persistent pollutant within an individual organism over its lifetime."],
            ["Biomagnification", "The increase in concentration of a persistent pollutant at successively higher trophic levels."]
          ],
          questions: [
            {
              q: "Explain why pyramids of productivity are never inverted.",
              marks: 2,
              a: [
                "- Energy is lost at each trophic level, mainly as heat through respiration [1].",
                "- So each level must have less energy flowing through it than the level below (second law of thermodynamics) [1]."
              ]
            }
          ],
          tips: ["Don't mix up **bioaccumulation** (one organism, over time) and **biomagnification** (along the food chain)."]
        },
        { num: "2.3", title: "Biogeochemical cycles" },
        { num: "2.4", title: "Climate and biomes" },
        {
          num: "2.5", title: "Zonation, succession and change in ecosystems",
          summary: [
            "- **Zonation** = change in community along an **environmental gradient** (space), e.g. altitude on a mountain, or a rocky shore.",
            "- **Succession** = change in community over **time**.",
            "",
            "### Succession",
            "- **Primary** succession starts on bare, lifeless substrate with no soil (e.g. new volcanic rock).",
            "- **Secondary** succession starts where soil already exists after a disturbance (e.g. abandoned farmland, after a fire).",
            "",
            "Stages: pioneer species (often r-strategists) → seral stages → **climax community** (often dominated by K-strategists). Over succession, typically: soil depth, biomass, biodiversity and complexity increase; NPP is high in early-middle stages and GPP ≈ R at climax.",
            "",
            "Human activity can halt succession, creating a **plagioclimax** (e.g. grazing or burning)."
          ],
          terms: [
            ["Zonation", "Change in community composition along an environmental gradient."],
            ["Succession", "Change in community composition over time."],
            ["Pioneer species", "The first species to colonise a bare area, able to tolerate harsh conditions."],
            ["Climax community", "The relatively stable final community at the end of succession."],
            ["Plagioclimax", "A community prevented from reaching climax by human activity."],
            ["r-strategist", "Species with many offspring, little parental care, short lifespans — good colonisers."],
            ["K-strategist", "Species with few offspring, high parental care, long lifespans — good competitors in stable environments."]
          ],
          tips: ["Zonation = **space**; succession = **time**. Say this explicitly in \"distinguish\" questions."]
        }
      ]
    },
    {
      title: "Topic 3: Biodiversity and conservation",
      topics: [
        { num: "3.1", title: "Biodiversity and evolution" },
        { num: "3.2", title: "Human impact on biodiversity" },
        { num: "3.3", title: "Conservation and regeneration" }
      ]
    },
    {
      title: "Topic 4: Water",
      topics: [
        { num: "4.1", title: "Water systems" },
        {
          num: "4.2", title: "Water access, use and security",
          terms: [
            ["Physical water scarcity", "Not enough water is available to meet demand — e.g. arid regions."],
            ["Economic water scarcity", "Water is available but people lack the money or infrastructure to access it."],
            ["Water security", "Reliable access to enough safe water for health, livelihoods and production."]
          ]
        },
        { num: "4.3", title: "Aquatic food production systems" },
        { num: "4.4", title: "Water pollution" }
      ]
    },
    {
      title: "Topic 5: Land",
      topics: [
        { num: "5.1", title: "Soil" },
        { num: "5.2", title: "Agriculture and food" }
      ]
    },
    {
      title: "Topic 6: Atmosphere and climate change",
      topics: [
        { num: "6.1", title: "Introduction to the atmosphere" },
        { num: "6.2", title: "Climate change — causes and impacts" },
        { num: "6.3", title: "Climate change — mitigation and adaptation" },
        { num: "6.4", title: "Stratospheric ozone" }
      ]
    },
    {
      title: "Topic 7: Natural resources",
      topics: [
        { num: "7.1", title: "Natural resources — uses and management" },
        { num: "7.2", title: "Energy sources — uses and management" },
        { num: "7.3", title: "Solid waste" }
      ]
    },
    {
      title: "Topic 8: Human populations and urban systems",
      topics: [
        { num: "8.1", title: "Human populations" },
        { num: "8.2", title: "Urban systems and urban planning" },
        { num: "8.3", title: "Urban air pollution" }
      ]
    },
    {
      title: "HL lenses",
      topics: [
        { num: "HL.a", title: "Environmental law", hl: true },
        { num: "HL.b", title: "Environmental economics", hl: true },
        { num: "HL.c", title: "Environmental ethics", hl: true }
      ]
    }
  ]
});
