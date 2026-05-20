# Changelog

All notable changes to Worcester Laundry are documented here.
This project follows [Semantic Versioning](https://semver.org/).

## [3.0.0] — 2026-05-20

### Redesign

A complete visual and structural overhaul. The page got a new design system, four new sections, dark mode, and a price estimator. The codebase was simplified back to a single CSS file and a single JS file.

#### Added
- Light &amp; dark mode toggle, with theme persisted to `localStorage` and `prefers-color-scheme` honoured on first load
- Transparent header treatment over the hero (white text/icons) that swaps to a frosted-glass panel with dark text once the user scrolls
- **Stats** section with animated count-up via `IntersectionObserver`
- **How it works** — three-step process section
- **Testimonials** — three review cards
- **FAQ** — native `<details>`/`<summary>` accordions
- **Price estimator** — sliders for wash-and-fold pounds + dry-clean items, computes total in real time
- Featured "Monthly Fresh" plan in the pricing grid
- Hero trust strip — 4.9★ rating + eco/delivery/turnaround badges
- LocalBusiness JSON-LD for richer search results
- Scroll-spy that highlights the active nav link
- Animated hamburger + full-screen mobile drawer menu
- Pause-when-tab-hidden behaviour on the hero video

#### Changed
- New type system: **Inter** for UI, **Fraunces** for display headings (replaces Roboto + Lobster)
- New colour palette built around a deep teal / cyan brand gradient with warm amber accent
- Hero headline updated to "Laundry day, handled beautifully." with a gradient accent on the second line
- Contact form expanded with a phone field and a service-type select
- Confirmation pages (`thankyou.html`, `newsletter-thanks.html`) redesigned to match the new system
- `package.json` version bumped to 3.0.0

#### Removed
- Old monolithic `styles.css.backup`
- The 9 modular CSS files (`base.css`, `hero.css`, `services.css`, etc.) — consolidated into a single `assets/css/main.css`
- `IMPROVEMENTS.md`, `UPGRADE_SUMMARY.md`, `QUICK_START.md` (retrospective docs that are no longer accurate)
- `assets/css/README.md` (described the now-removed modular architecture)

#### Fixed
- Navbar text was unreadable on the hero in light mode — now white over the video, dark once scrolled
- Same issue in dark mode — the muted grey nav text washed out against the dark video; now both themes use white text over the hero

---

## [2.0.0] — 2025-10-17

### Architecture overhaul (superseded by 3.0)
- Split the original 1,836-line `styles.css` into 9 modular files
- Introduced CSS custom properties for colours, spacing, shadows
- Added `package.json` with NPM scripts for dev, linting, formatting, Lighthouse
- Added `CONTRIBUTING.md` and `CHANGELOG.md`
- Optimised font loading (5 weights instead of 18) and Font Awesome async loading
- Deferred JS, added `preconnect`/`dns-prefetch` resource hints
- Debounced scroll handlers; combined duplicate listeners

## [1.0.0] — 2024-12-19

### Initial release
- Responsive single-page site
- Hero with video background, services, pricing, contact, footer
- Hamburger menu, newsletter signup, WCAG 2.1 AA baseline
