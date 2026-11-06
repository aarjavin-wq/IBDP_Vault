# IBDP Vault

A free revision website for Grade 11–12 IB Diploma students — topic summaries, key terms, practice questions and exam tips, organised by the IB syllabus.

**Live site:** https://aarjavin-wq.github.io/IBDP_Vault/

A CAS project (Creativity + Service) by Neel and Aarjav.

## Subjects

| Subject | Level | Notes file | Maintainer |
|---|---|---|---|
| History | HL | `data/history.js` | Neel |
| Economics | HL | `data/economics.js` | Neel |
| Environmental Systems and Societies | HL | `data/ess.js` | Neel |
| English A: Literature | SL | `data/english-lit.js` | Neel |
| Spanish B | SL | `data/spanish-b.js` | Neel |
| Mathematics: Analysis and Approaches | HL | `data/maths-aa.js` | Aarjav |
| Computer Science | HL | `data/computer-science.js` | Aarjav |
| Physics | HL | `data/physics.js` | Aarjav |
| English A: Language and Literature | SL/HL | `data/english-langlit.js` | Aarjav |
| Spanish ab initio | SL | `data/spanish-abinitio.js` | Aarjav |

## How the site works

```
index.html        Home page: subject grid + search
subject.html      One page for every subject (subject.html?s=economics)
style.css         All styling (light + dark mode)
app.js            Site logic — you don't need to touch this to add notes
subjects.js       The list of subjects shown on the home page
data/<id>.js      The notes for each subject  ← this is where you write
data/template.js  Copy this to start a new subject
```

No build step, no frameworks. GitHub Pages serves the files directly.

## Adding notes (no coding needed)

1. Open the subject's file in `data/` on GitHub and click the ✏️ pencil icon.
2. Find the topic and add any of `summary`, `terms`, `questions`, `tips`:

```js
{
  num: "2.5", title: "Elasticity of demand",
  summary: [
    "**PED** measures how responsive quantity demanded is to a change in price.",
    "",
    "- Key point one",
    "- Key point two"
  ],
  terms: [
    ["Term", "Definition"]
  ],
  questions: [
    { q: "Question text", marks: 4, a: ["Model answer line 1", "- mark scheme point"] }
  ],
  tips: ["Exam tip"]
}
```

3. Commit the change. The live site updates within a minute or two.

Formatting you can use inside text: `**bold**`, `*italic*`, `- bullets`, `1. numbered`, `### heading`, `| tables |`, and maths with `$x^2$` or `$$\int x\,dx$$` (inside JS strings, write a backslash as `\\`).

Topics with no content automatically show as "coming soon", so list the full syllabus first and fill it in over time.

## Checklist before committing

- Commas between items, quotes closed — if a subject page stops loading, a missing comma is the usual cause.
- Content matches the **current IB subject guide**.
- Notes are written in your own words — don't paste from textbooks or paid revision sites.

---
Not affiliated with or endorsed by the International Baccalaureate Organization.
