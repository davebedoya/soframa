# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project status

Soframa is a very early-stage scaffold bootstrapped from the Vite `react-ts` template. There are no commits yet. `README.md` is still the unmodified Vite template boilerplate (no project-specific content). Most component files under `src/components/` are empty placeholders (see Architecture below).

## Commands

- `npm run dev` — start the dev server (`vite --open`, opens a browser automatically)
- `npm run build` — typecheck (`tsc -b`) then production build (`vite build`)
- `npm run lint` — run ESLint over the project
- `npm run preview` — preview the production build locally

There is no test runner configured (no vitest/jest/playwright/etc.) and no separate typecheck script — typechecking happens as part of `npm run build` via `tsc -b`.

## Architecture

- React 19 + TypeScript, built/served by Vite 8 via `@vitejs/plugin-react` (the Babel-based plugin, not the SWC variant).
- Styling is Tailwind CSS v4 via the `@tailwindcss/vite` plugin — there is no `tailwind.config.js`/PostCSS setup; Tailwind is enabled by `@import "tailwindcss";` in `src/index.css`.
- No router or state-management library is installed.
- Entry point: `src/main.tsx` mounts `src/App.tsx` into `#root` (declared in `index.html`).
- Components live one-per-folder under `src/components/<Name>/<Name>.tsx` (e.g. `src/components/Hero/Hero.tsx`). **These files are currently empty (0 bytes) and none are imported by `App.tsx`.** The folder names (Header, Hero, About, Causes, DisasterRelief, SofiaLegacy, CallToAction, Contact, Footer) indicate a nonprofit/foundation landing page is planned, but no component logic exists yet — don't assume any of this is implemented without checking the file first.
- `src/App.css` still contains leftover boilerplate styles from the default Vite template (counter/hero/docs sections) that aren't referenced by any current markup.

## Product Context

SOFRAMA — Vida y Esperanza is a charitable foundation inspired by Sofía,
Francisco, and Marina.

Sofía dreamed of creating a foundation that would help people and animals.
Her legacy is an important part of the foundation's story.

The foundation intends to support:

- Families and vulnerable communities
- Older adults
- Animals and animal shelters
- Disaster and earthquake relief in Colombia

The website should feel warm, trustworthy, modern, and human rather than
corporate.

Use the existing SOFRAMA logo/image in `src/assets/` as the primary visual
reference for the site's colors, typography direction, spacing, and overall
tone when available.

## Design and Responsiveness

- Build mobile-first.
- Every section must be responsive on phones, tablets, laptops, and desktops.
- Use Tailwind CSS utilities for layout, spacing, typography, responsive
  breakpoints, hover/focus states, and reusable visual patterns.
- Avoid separate component CSS files unless Tailwind is genuinely insufficient.
- Use semantic HTML and accessible interactions.
- Maintain readable font sizes and sufficient color contrast.
- Use the SOFRAMA branding as the visual foundation:
  - cream/off-white
  - warm brown
  - muted olive/green
  - elegant, welcoming typography
  - generous whitespace
- The design should look professional enough for donors while remaining
  personal and family-centered.

## Website Content

The planned homepage includes:

- Header / navigation
- Hero
- About / mission
- The story behind SOFRAMA
- Causes
- Disaster relief
- Sofía's legacy
- How to help
- Contact
- Footer

Do not invent:

- Donation amounts
- Impact statistics
- Nonprofit or legal status
- Partnerships
- Programs that have not been confirmed
- Biographical information about Sofía, Francisco, or Marina
- Claims about how donated money has been used

Use clearly marked placeholder content when information still needs approval
from the organization.

## Internationalization

The website will support both Spanish and English.

Do not duplicate entire components for each language and do not scatter
English/Spanish ternaries throughout the JSX.

Internationalization will later be implemented using `i18next` and
`react-i18next`.

Structure components so that visible text can later be moved into translation
resources cleanly.

Do not install or configure i18next until explicitly asked.

## Learning-First Collaboration

This project is also being used to improve my React, TypeScript, and Tailwind
CSS skills.

Claude should act as a pair programmer, not an autonomous website generator.

- Do not build the entire website in one pass unless explicitly asked.
- Work on one component or small feature at a time.
- Explain the approach before making meaningful code changes.
- Explain important React, TypeScript, and Tailwind concepts being used.
- Prefer understandable code over clever abstractions.
- Do not over-engineer the project.
- Do not introduce unnecessary dependencies.
- Ask before making broad architectural changes.
- When introducing a TypeScript type or interface, explain why it is useful.
- When using unfamiliar Tailwind utilities, explain the important classes.
- Give me opportunities to write or modify small pieces of code myself.
- After completing a component, summarize what was built and suggest one small
  modification I can make myself to reinforce what I learned.
- Do not automatically move on to the next major component without asking.

## Development Approach

Build incrementally in roughly this order:

1. Header
2. Hero
3. About / Mission
4. Causes
5. Disaster Relief
6. Sofía's Legacy
7. How to Help
8. Contact
9. Footer
10. English/Spanish internationalization
11. Final responsive/accessibility review

Forms, donation processing, backend services, and other integrations should not
be added until their requirements are confirmed.
