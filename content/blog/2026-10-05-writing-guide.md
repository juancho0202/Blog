---
title: Writing Guide for Technical Posts
description: A reference post that demonstrates MDC components, highlighted code blocks, and table-of-contents behavior.
date: 2026-10-05
tags:
  - guide
  - writing
  - nuxt-content
draft: false
path: /blog/writing-guide
---

Use this post as a reference when writing new entries.

## Callouts

::callout{type="info"}
Use callouts to provide context that should stand out from the main flow.
::

::callout{type="tip"}
Use `pnpm new` to scaffold a post quickly.
::

::callout{type="warning"}
Prefer short sections with clear headings to keep the table of contents useful.
::

::callout{type="danger"}
Do not publish drafts without a final review.
::

## Code blocks

### Filename and copy button

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/color-mode'],
})
```

### Highlight specific lines

```ts [app/composables/useReadingTime.ts] {2-4}
export function useReadingTime(body: unknown) {
  const minutes = calculateReadingTime(body)
  return Math.max(1, minutes)
}
```

### Diff and shell snippets

```diff [feature.patch]
-const enabled = false
+const enabled = true
```

```bash [commands.sh]
pnpm lint
pnpm typecheck
pnpm generate
```

## Code group tabs

::code-group
```bash [pnpm]
pnpm add @vueuse/nuxt
```

```bash [npm]
npm install @vueuse/nuxt
```

```bash [yarn]
yarn add @vueuse/nuxt
```
::

## Figure

::figure{src="/images/blog/notebook.svg" alt="Notebook on a desk" caption="Figure component resolves content image paths with the project base URL."}
::

## Video

:you-tube{id="dQw4w9WgXcQ" title="Sample video embed with privacy-enhanced mode"}

## Heading anchors and TOC

### Nested heading example

This section exists so the table of contents can show nested headings and active-section highlighting.
