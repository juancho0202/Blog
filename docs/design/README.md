# Design system for Blog

This directory documents the visual system for the Nuxt 4 blog in this repository. It is intentionally grounded in the actual implementation: the app lives under `app/`, content is authored in `content/blog/`, and the visual system is built with Tailwind v4, Nuxt Content, Nuxt Fonts, Nuxt Icon, and the class-based Color Mode plugin.

## Scope

The design direction is simple, readable, and low-maintenance:

- content-first layout focused on reading flow
- strong legibility in both light and dark modes
- restrained accent color and typography system
- minimal motion and low visual noise
- component patterns that match the existing app structure and naming

## Reference implementation

The current app already defines the base patterns we should preserve:

- `app/layouts/default.vue` manages the page shell, header, footer, and skip link
- `app/components/PostCard.vue`, `PostMeta.vue`, `TagList.vue`, and `PostNav.vue` define the core content cards and article navigation
- `app/components/ColorModeToggle.vue` handles the light/dark/system switch
- `app/assets/css/main.css` centralizes Tailwind v4 theme tokens and typography tuning

## Stack and constraints

The design system should work with the following repo realities:

- Nuxt 4 app directory structure under `app/`
- `@nuxt/content` for markdown-based posts and collection queries
- Tailwind CSS v4 using `@tailwindcss/vite` and `@plugin "@tailwindcss/typography"`
- `@nuxt/fonts` with Inter + JetBrains Mono from `@fontsource/*`
- `@nuxt/icon` with local Lucide assets via `@iconify-json/lucide`
- `@nuxtjs/color-mode` with a class-based dark variant and system-default behavior

## Documentation map

- `01-inspiration.md` – editorial and minimal reference direction
- `02-foundations.md` – color, typography, spacing, and dark-mode tokens
- `03-layouts.md` – page shell, content columns, and responsive grids
- `04-components.md` – reusable UI inside the blog and article pages
- `05-motion.md` – timing, hover/focus transitions, and interaction restraint
- `06-graphics.md` – borders, shadows, accents, and image treatment
- `07-decisions.md` – rationale for the current approach and future constraints

## Design principle

The blog should feel like a clean, lightweight publishing surface rather than a sprawling app shell. We prioritize reading comfort and component clarity over decorative complexity.
