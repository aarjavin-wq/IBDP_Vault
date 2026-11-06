/*
  IBDP Vault — subject list
  -------------------------
  Every subject on the site is listed here. The actual notes for each subject
  live in data/<id>.js (one file per subject).

  To add a new subject:
    1. Add a line below.
    2. Copy data/template.js to data/<id>.js and fill it in.
*/
window.IBV_SUBJECTS = [
  // Group 1 — Studies in language and literature
  { id: "english-lit",      name: "English A: Literature",              level: "SL",    group: 1, colour: "#c2410c", maintainer: "Neel" },
  { id: "english-langlit",  name: "English A: Language and Literature", level: "SL/HL", group: 1, colour: "#b45309", maintainer: "Aarjav" },
  // Group 2 — Language acquisition
  { id: "spanish-b",        name: "Spanish B",                          level: "SL",    group: 2, colour: "#be123c", maintainer: "Neel" },
  { id: "spanish-abinitio", name: "Spanish ab initio",                  level: "SL",    group: 2, colour: "#db2777", maintainer: "Aarjav" },
  // Group 3 — Individuals and societies
  { id: "history",          name: "History",                            level: "HL",    group: 3, colour: "#7c3aed", maintainer: "Neel" },
  { id: "economics",        name: "Economics",                          level: "HL",    group: 3, colour: "#2563eb", maintainer: "Neel" },
  // Group 3/4 — Interdisciplinary
  { id: "ess",              name: "Environmental Systems and Societies", level: "HL",   group: 34, colour: "#15803d", maintainer: "Neel" },
  // Group 4 — Sciences
  { id: "physics",          name: "Physics",                            level: "HL",    group: 4, colour: "#0891b2", maintainer: "Aarjav" },
  { id: "computer-science", name: "Computer Science",                   level: "HL",    group: 4, colour: "#0f766e", maintainer: "Aarjav" },
  // Group 5 — Mathematics
  { id: "maths-aa",         name: "Mathematics: Analysis and Approaches", level: "HL",  group: 5, colour: "#4f46e5", maintainer: "Aarjav" }
];

window.IBV_GROUPS = {
  1: "Group 1 · Language and literature",
  2: "Group 2 · Language acquisition",
  3: "Group 3 · Individuals and societies",
  34: "Interdisciplinary (Groups 3 & 4)",
  4: "Group 4 · Sciences",
  5: "Group 5 · Mathematics"
};
