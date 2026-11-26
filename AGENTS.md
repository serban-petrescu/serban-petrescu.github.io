# Agent notes

Serban Petrescu's portfolio ([spetrescu.ro](https://spetrescu.ro)) plus the personal docs agents use to write in his voice.

## Repository

- **Site:** Astro 7, pnpm, TypeScript. Content is JSON under `content/`, validated by `src/content.config.ts`. Pages are `/` (`src/pages/index.astro`), `/cv/` (printable one-page CV) and `/llms.txt`.
- **Static files:** `public/` holds the CV PDF, talk decks under `presentations/`, icons, `CNAME` and `.nojekyll`. GitHub Pages needs `.nojekyll`, or it drops the `_astro/` asset folder.
- **Scripts:** `pnpm dev`, `pnpm build` (runs `astro check` first), `pnpm preview`, `pnpm lint`, `pnpm format`.
- **Deploy:** push to `source` builds and publishes `dist/` to `master`. Dependabot is off on purpose.
- **Analytics:** Mixpanel events fire from `data-track` attributes and `track()` in `src/lib/analytics.ts`. Keep event names stable, because the dashboards depend on them.

## Docs

| File | What it is |
| --- | --- |
| `docs/style-guide.md` | Serban's writing voice. Applies to anything written as him |
| `docs/principles.md` | His core positions. Check arguments against it |
| `docs/career-strategy.md` | Current role, career story, what he is looking for |
| `docs/recruiter-communication-style.md` | Tone and structure for recruiter replies |
| `docs/linkedin.md` | Mirror of his LinkedIn profile |
| `docs/talks/` | Talk submissions and notes |

## Skills

Project skills live in `.agents/skills/`:

- `portfolio-content`: updating the site, the CV and the CV PDF
- `recruiter-response`: replying to recruiters and evaluating opportunities
- `linkedin-messages`: replying to LinkedIn DMs and comments
- `linkedin-posts`: writing LinkedIn posts
- `principles`: maintaining `docs/principles.md`
- `debate-coach`: running practice debates

## Learning from corrections

When Serban corrects or refines something in a way that reveals a general principle, update the relevant skill or doc as part of the task. Don't announce it. Skip one-off, task-specific preferences.
