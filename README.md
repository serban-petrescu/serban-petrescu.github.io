# Personal portfolio [![Release](https://github.com/serban-petrescu/serban-petrescu.github.io/actions/workflows/publish.yml/badge.svg)](https://github.com/serban-petrescu/serban-petrescu.github.io/actions/workflows/publish.yml)

Static site for [spetrescu.ro](https://spetrescu.ro), built with Astro. Content lives as JSON under `content/`, validated by the schemas in `src/content.config.ts`.

| Path | What it is |
| --- | --- |
| `content/` | Projects, work history, education, certifications, talks, writing, CV copy and site metadata |
| `src/pages/` | `/` (portfolio), `/cv/` (printable one-page CV) and `/llms.txt` |
| `public/` | Static files served as is: CV PDF, talk decks, icons, CNAME |
| `docs/` | Writing style, principles, career context and the LinkedIn mirror |
| `.agents/skills/` | Agent skills for content updates, LinkedIn, recruiters, principles and debates (see `AGENTS.md`) |

```sh
pnpm install
pnpm dev        # local dev server
pnpm build      # type and schema check, then static build to dist/
pnpm lint
pnpm format
```

Pushing to `source` builds and deploys `dist/` to the `master` branch (GitHub Pages).

To refresh `public/downloads/CV_Serban_Petrescu.pdf`, open `/cv/` and print to PDF (A4, default margins). The print stylesheet keeps it on one page.
