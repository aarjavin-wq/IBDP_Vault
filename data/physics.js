IBV.add({
  id: "physics",
  syllabus: "Guide for first assessment 2025",
  intro: [
    "Physics is organised into five themes (A–E). Subtopics marked **HL** are additional higher level content. Use the IB **data booklet** in the exam — know what's in it and what isn't."
  ],
  assessment: [
    ["Paper 1", "2 h · Paper 1A multiple-choice + Paper 1B data-based questions", "36%"],
    ["Paper 2", "2 h 30 · short-answer and extended-response questions", "44%"],
    ["Internal assessment", "Scientific investigation (report of max 3,000 words)", "20%"]
  ],
  generalTips: [
    "Always show the equation, substitution, answer and unit.",
    "Give final answers to an appropriate number of significant figures (match the data).",
    "Read graphs carefully: check the axes' units and powers of ten."
  ],
  units: [
    {
      title: "A. Space, time and motion",
      topics: [
        {
          num: "A.1", title: "Kinematics",
          summary: [
            "Kinematics describes motion using displacement $s$, velocity $v$, acceleration $a$ and time $t$.",
            "",
            "### Equations of motion (constant acceleration)",
            "$$v = u + at$$",
            "$$s = ut + \\tfrac{1}{2}at^2$$",
            "$$v^2 = u^2 + 2as$$",
            "$$s = \\frac{(u+v)}{2}t$$",
            "",
            "### Graphs",
            "- Gradient of a displacement–time graph = velocity",
            "- Gradient of a velocity–time graph = acceleration",
            "- Area under a velocity–time graph = displacement",
            "",
            "### Projectile motion (no air resistance)",
            "Treat horizontal and vertical motion separately: horizontal velocity is constant; vertical acceleration is $g = 9.8\\ \\text{m s}^{-2}$ downwards."
          ],
          terms: [
            ["Displacement", "Distance moved in a particular direction (vector)."],
            ["Velocity", "Rate of change of displacement (vector)."],
            ["Speed", "Rate of change of distance (scalar)."],
            ["Acceleration", "Rate of change of velocity."]
          ],
          questions: [
            {
              q: "A car accelerates uniformly from rest to $20\\ \\text{m s}^{-1}$ in 8.0 s. Calculate the distance travelled.",
              marks: 2,
              a: [
                "Using $s = \\frac{(u+v)}{2}t$:",
                "Substitute: $s = \\frac{(0+20)}{2} \\times 8.0$",
                "Therefore, $s = 80\\ \\text{m}$"
              ]
            }
          ]
        },
        { num: "A.2", title: "Forces and momentum" },
        { num: "A.3", title: "Work, energy and power" },
        { num: "A.4", title: "Rigid body mechanics", hl: true },
        { num: "A.5", title: "Galilean and special relativity", hl: true }
      ]
    },
    {
      title: "B. The particulate nature of matter",
      topics: [
        { num: "B.1", title: "Thermal energy transfers" },
        { num: "B.2", title: "Greenhouse effect" },
        { num: "B.3", title: "Gas laws" },
        { num: "B.4", title: "Thermodynamics", hl: true },
        { num: "B.5", title: "Current and circuits" }
      ]
    },
    {
      title: "C. Wave behaviour",
      topics: [
        { num: "C.1", title: "Simple harmonic motion" },
        { num: "C.2", title: "Wave model" },
        { num: "C.3", title: "Wave phenomena" },
        { num: "C.4", title: "Standing waves and resonance" },
        { num: "C.5", title: "Doppler effect" }
      ]
    },
    {
      title: "D. Fields",
      topics: [
        { num: "D.1", title: "Gravitational fields" },
        { num: "D.2", title: "Electric and magnetic fields" },
        { num: "D.3", title: "Motion in electromagnetic fields" },
        { num: "D.4", title: "Induction", hl: true }
      ]
    },
    {
      title: "E. Nuclear and quantum physics",
      topics: [
        { num: "E.1", title: "Structure of the atom" },
        { num: "E.2", title: "Quantum physics", hl: true },
        { num: "E.3", title: "Radioactive decay" },
        { num: "E.4", title: "Fission" },
        { num: "E.5", title: "Fusion and stars" }
      ]
    }
  ]
});
