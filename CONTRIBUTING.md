# Contributing

Thanks for wanting to help. This is a small static site — the contribution loop is short.

## Setup

```bash
git clone https://github.com/aransys/Project-1.git
cd Project-1
npm install        # optional, only for the dev tooling
npm run dev        # live-reload server at http://localhost:3000
```

If you don't want the tooling, just open `index.html` in a browser.

## Project layout

```
index.html              ← main page
thankyou.html           ← contact-form confirmation
newsletter-thanks.html  ← newsletter confirmation
assets/css/main.css     ← all styles (single file)
assets/js/script.js     ← all interactions (single file)
```

The single-file CSS and JS are deliberate — the project is small enough that splitting it added more friction than value.

## House style

### HTML
- Semantic landmarks (`<header>`, `<main>`, `<section>`, `<footer>`)
- ARIA only where it adds value — don't repeat semantic info
- Two-space indent
- IDs and classes in `kebab-case`

### CSS
- All colours, spacing, shadows, and timings live as custom properties on `:root` (light) and `[data-theme="dark"]` (dark) at the top of `main.css`. **Always use the variables** — no raw hex codes inside components.
- Mobile-first where reasonable, but the file uses `max-width` breakpoints at 1024 / 720 / 480 to keep the cascade simple
- Keep specificity low — flat class selectors, not deeply nested ones
- Respect `prefers-reduced-motion` for any new animation

### JavaScript
- Vanilla — no dependencies
- `"use strict"` and a single IIFE wrap the whole file
- Use the existing `$` / `$$` helpers for DOM queries
- Wrap scroll/resize handlers in `{ passive: true }` and prefer `IntersectionObserver` over scroll-position math

## Before you push

```bash
npm run validate    # html-validate + stylelint + eslint
npm run format      # prettier
```

Then sanity-check in a browser:

- Mobile (~390px), tablet (~768px), desktop (1280px+)
- Light and dark mode
- Tab through the page — focus rings visible, skip link works
- Lighthouse desktop &amp; mobile both >90 across the board

## Commits and PRs

- Use clear, present-tense commit messages: "Fix navbar contrast on dark hero", not "fixed navbar"
- One logical change per PR
- Include a before/after screenshot if you're touching visuals

## Accessibility baseline

Anything you add should keep the site at WCAG 2.1 AA:

- Colour contrast 4.5:1 for body text, 3:1 for large text
- Keyboard navigable, with a visible focus indicator
- Form fields have associated `<label>`s
- Images have meaningful `alt` text (decorative images use `alt=""`)

## License

By contributing you agree your work is licensed under the project's MIT license.
