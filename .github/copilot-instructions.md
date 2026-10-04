# Copilot Instructions

- Use Nuxt 4 with the `app/` directory structure (`app/pages`, `app/components`, `app/composables`, `app/layouts`, `app/app.vue`).
- Use Nuxt Content v3 patterns (`queryCollection`, `content.config.ts`) and never use v2 APIs such as `queryContent` or `<ContentDoc>`.
- Use `<script setup lang="ts">` in Vue components and Composition API only.
- Keep pages thin and move reusable logic into composables under `app/composables/`.
- Use ESLint stylistic rules as the only formatter (no Prettier).
- Use pnpm as the package manager.
