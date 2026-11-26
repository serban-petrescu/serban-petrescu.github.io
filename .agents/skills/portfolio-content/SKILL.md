---
name: portfolio-content
description: How to update Serban's portfolio site (spetrescu.ro), the printable CV and the CV PDF. Use when adding or editing projects, work history, education, certifications, talks or writing, when changing the CV or site copy, or when syncing LinkedIn with the site.
---

# Portfolio content

The site is Astro 7 with pnpm. Every piece of content is a JSON file under `content/`, validated by the Zod schemas in `src/content.config.ts`. Never hardcode content in components.

## Where content lives

| Folder | One file per | Notes |
| --- | --- | --- |
| `content/metadata/metadata.json` | site | Name, role, tagline, About summary (HTML), socials, links |
| `content/cv/cv.json` | CV | Summary, achievements, skill groups. Feeds `/cv/` and `/llms.txt` |
| `content/work/` | role | `featured: true` roles get full entries on the CV, the rest go under Additional Roles |
| `content/project/` | project | `highlighted: true` plus `order` puts it in Selected work, everything else goes to the archive |
| `content/education/` | degree or course | `featured: true` plus `degree` shows it on the CV and in Credentials |
| `content/certification/` | certification | `short` is the compact name used on the CV and site |
| `content/talk/` | talk | Slides and PDF live under `public/presentations/<slug>/` |
| `content/writing/` | post | `source` is `wseng.ai` or `Medium` |
| `content/media/` | image | Referenced from JSON as `../media/<file>` |

Dates are ISO (`2026-02-16`). An open-ended period uses `"to": ""`. Bodies separate paragraphs with a blank line (`\n\n`).

## Field shapes

- **Project:** `name, type (work|academic|personal), role?, outcome?, order?, highlighted, description, technologies[{name}], tags[], period{from,to}, images[{path,description}], link?, linkLabel?, blog?, blogLabel?, github?, youtube?`
- **Work:** `title, body, period{from,to}, logo, featured`
- **Education:** `title, body, degree?, period{from,to}, logo, featured`
- **Certification:** `title, short, body, period{at}, logo, link?`
- **Talk:** `title, event, date, abstract, slides, pdf, image`
- **Writing:** `title, summary, url, source, date, order`

Archive rows show only the first sentence of `description`, so lead with what the project is.

## Workflow

1. Edit or add the JSON. Copy the closest existing file for the shape.
2. Keep the story consistent across files. The same facts appear in `metadata.summary`, `cv.json`, the featured work entries and `docs/linkedin.md`. Change one, check the others.
3. Run `pnpm build`. It runs the schema and type check first, so a malformed entry fails here.
4. Check the page with `pnpm preview`.
5. If the CV changed, regenerate `public/downloads/CV_Serban_Petrescu.pdf`: open `/cv/`, print to PDF (A4, default margins), and confirm it is still one page.

## Copy rules

- Write in Serban's voice. Follow `docs/style-guide.md`.
- Round numbers to the scale a reader can check ("around 1,000", "about 90%"). Avoid false precision such as quarter-by-quarter counts.
- No em dashes, no semicolons in prose, and no "it's not X, it's Y" contrasts.
- State facts plainly. The CV reflects reality, with no sugar-coating.
- Colleague names and customer names other than Alpha School stay off the site.

## LinkedIn sync

`docs/linkedin.md` mirrors the LinkedIn profile. Base it on `cv.json` and the featured work entries. LinkedIn can carry slightly more detail than the CV, and the About section can expand on the player-coach approach.
