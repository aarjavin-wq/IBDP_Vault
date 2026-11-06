IBV.add({
  id: "maths-aa",
  syllabus: "Guide for first assessment 2021",
  intro: [
    "Mathematics: Analysis and Approaches has five topics. HL students study all SL content plus additional higher level (AHL) content, marked **HL** below."
  ],
  assessment: [
    ["Paper 1", "2 h · no calculator · short and extended-response questions (110 marks)", "30%"],
    ["Paper 2", "2 h · graphic display calculator (GDC) allowed (110 marks)", "30%"],
    ["Paper 3", "1 h · two extended problem-solving questions, GDC allowed (55 marks)", "20%"],
    ["Internal assessment", "Mathematical exploration (12–20 pages)", "20%"]
  ],
  generalTips: [
    "Show every step — method marks (M) are awarded even if the final answer is wrong.",
    "Give exact answers in Paper 1 (surds, π, fractions) unless told otherwise; 3 s.f. in Paper 2.",
    "Know your formula booklet — and the formulas that are *not* in it.",
    "Don't forget $+C$ on indefinite integrals."
  ],
  units: [
    {
      title: "Topic 1: Number and algebra",
      topics: [
        { title: "Arithmetic and geometric sequences and series" },
        { title: "Exponents and logarithms" },
        { title: "Simple proof" },
        { title: "Binomial theorem" },
        { title: "Counting principles: permutations and combinations", hl: true },
        { title: "Partial fractions", hl: true },
        { title: "Complex numbers", hl: true },
        { title: "Proof by induction, contradiction and counterexample", hl: true },
        { title: "Systems of linear equations", hl: true }
      ]
    },
    {
      title: "Topic 2: Functions",
      topics: [
        { title: "Lines, functions, domain and range" },
        { title: "Composite and inverse functions" },
        { title: "Quadratic, rational, exponential and log functions" },
        { title: "Transformations of graphs" },
        { title: "Polynomial functions and the factor/remainder theorems", hl: true },
        { title: "Rational functions, odd/even functions, modulus", hl: true },
        { title: "Solving inequalities", hl: true }
      ]
    },
    {
      title: "Topic 3: Geometry and trigonometry",
      topics: [
        { title: "3D geometry, volume and surface area" },
        { title: "Sine rule, cosine rule and area of a triangle" },
        { title: "Radians, arcs and sectors" },
        { title: "The unit circle and trig identities" },
        { title: "Trig functions and equations" },
        { title: "Reciprocal and inverse trig functions; compound angles", hl: true },
        { title: "Vectors, lines and planes", hl: true }
      ]
    },
    {
      title: "Topic 4: Statistics and probability",
      topics: [
        { title: "Sampling and data presentation" },
        { title: "Measures of central tendency and spread" },
        { title: "Correlation and regression" },
        { title: "Probability and Venn/tree diagrams" },
        { title: "Discrete random variables and the binomial distribution" },
        { title: "The normal distribution" },
        { title: "Bayes' theorem", hl: true },
        { title: "Continuous random variables", hl: true }
      ]
    },
    {
      title: "Topic 5: Calculus",
      topics: [
        {
          title: "Differentiation rules",
          summary: [
            "### The rules",
            "| Rule | Formula |",
            "|---|---|",
            "| Power | $\\frac{d}{dx}x^n = nx^{n-1}$ |",
            "| Chain | $\\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx}$ |",
            "| Product | $\\frac{d}{dx}(uv) = u\\frac{dv}{dx} + v\\frac{du}{dx}$ |",
            "| Quotient | $\\frac{d}{dx}\\left(\\frac{u}{v}\\right) = \\frac{v\\frac{du}{dx} - u\\frac{dv}{dx}}{v^2}$ |",
            "",
            "### Standard derivatives",
            "- $\\frac{d}{dx}\\sin x = \\cos x$, $\\frac{d}{dx}\\cos x = -\\sin x$",
            "- $\\frac{d}{dx}e^x = e^x$, $\\frac{d}{dx}\\ln x = \\frac{1}{x}$"
          ],
          questions: [
            {
              q: "Differentiate $y = (3x^2 + 1)^5$.",
              marks: 3,
              a: [
                "Let $u = 3x^2 + 1$",
                "So, $y = u^5$",
                "Then, $\\frac{du}{dx} = 6x$",
                "And, $\\frac{dy}{du} = 5u^4$",
                "Using the chain rule: $\\frac{dy}{dx} = 5u^4 \\cdot 6x$",
                "Therefore, $\\frac{dy}{dx} = 30x(3x^2 + 1)^4$"
              ]
            }
          ]
        },
        { title: "Limits and introduction to differentiation" },
        { title: "Tangents, normals and stationary points" },
        { title: "Integration and areas" },
        { title: "Kinematics" },
        { title: "Limits, continuity and differentiability; L'Hôpital's rule", hl: true },
        { title: "Implicit differentiation and related rates", hl: true },
        { title: "Further integration: by parts and substitution", hl: true },
        { title: "Volumes of revolution", hl: true },
        { title: "Differential equations", hl: true },
        { title: "Maclaurin series", hl: true }
      ]
    }
  ]
});
