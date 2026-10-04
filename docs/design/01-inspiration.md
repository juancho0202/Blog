# Inspiration

The Blog design direction should feel editorial and calm, similar to a lightweight personal publishing site rather than a marketing homepage.

## Reference mood

We want the site to feel:

- minimal but confident
- highly readable at small and large sizes
- warm enough to feel personal, but restrained enough to stay technical
- consistent with the current Nuxt blog structure and content-first layout

## Primary influences

The visual language should align with:

- minimal developer blogs
- static site publishing workflows
- technical writing and note-taking interfaces
- neutral editorial layouts with accent color used for emphasis only

## Design goals

- keep the reading experience center stage
- use few decorative elements and little noise
- rely on typography and spacing instead of heavy illustration
- maintain strong contrast in both light and dark mode
- follow the app’s existing component architecture and naming

## What to avoid

- dense multi-column dashboards
- heavy shadows and glossy surfaces
- multiple competing accent colors
- large visual chrome around the content area
- runtime fetches for fonts or icons

## Current alignment with the codebase

The existing app already follows this approach through:

- `app/layouts/default.vue` for a slim site frame and nav shell
- `app/pages/blog/[...slug].vue` for a focused article reading column
- `app/components/PostCard.vue` for simple list-card composition
- `app/assets/css/main.css` for a central, low-noise theme system

This means the design language should stay conservative and incremental rather than introducing a new visual system.
