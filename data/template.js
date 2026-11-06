/*
  TEMPLATE — copy this file to data/<subject-id>.js to start a new subject.
  The <subject-id> must match the "id" in subjects.js.

  Writing notes (works in summary, answers, terms and tips):
    **bold**   *italic*   `code`   [link text](https://...)
    - bullet point            (start a line with "- ")
    1. numbered point         (start a line with "1. ")
    ### Small heading         (start a line with "### ")
    | Col A | Col B |         (simple tables)
    $x^2$  or  $$\int x\,dx$$ (maths, rendered with KaTeX)

  Multi-line text: use an array of strings, one per line, e.g.
    summary: [
      "First paragraph.",
      "",
      "- bullet one",
      "- bullet two"
    ]

  A topic with no summary/terms/questions/tips shows as "coming soon",
  so you can list the whole syllabus first and fill topics in later.
*/
IBV.add({
  id: "subject-id",
  syllabus: "First assessment 20XX guide",
  intro: "One or two sentences about the course.",
  assessment: [
    // [component, description, weighting]
    ["Paper 1", "1 h · what it tests", "XX%"],
    ["Internal assessment", "what it is", "XX%"]
  ],
  note: "Optional yellow note shown on the overview page.",
  generalTips: ["Tip that applies to the whole subject."],

  units: [
    {
      title: "Unit 1: Name",
      topics: [
        {
          num: "1.1",                 // optional — shown before the title
          title: "Topic title",
          hl: false,                  // true = HL-only badge
          summary: [
            "Short, clear explanation of the topic.",
            "",
            "- Key point",
            "- Key point"
          ],
          terms: [
            ["Term", "Definition (syllabus wording where possible)."]
          ],
          questions: [
            { q: "Question text", marks: 4, a: ["Model answer / mark scheme points.", "- point 1", "- point 2"] }
          ],
          tips: ["Exam tip specific to this topic."]
        },
        { num: "1.2", title: "Another topic (notes coming soon)" }
      ]
    }
  ]
});
