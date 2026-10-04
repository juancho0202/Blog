---
title: Nuxt Content Workflow
description: A quick walkthrough for writing markdown posts with typed frontmatter in Nuxt Content v3.
date: 2026-09-25
tags:
  - workflow
  - content
draft: false
cover: /images/blog/workflow-cover.jpg
path: /blog/nuxt-content-workflow
---

## Authoring flow

Write markdown in `content/blog/`, then check locally before opening a PR.

```vue
<script setup lang="ts">
const title = 'Nuxt Content Workflow'
</script>

<template>
  <h1>{{ title }}</h1>
</template>
```

```bash
corepack pnpm lint
corepack pnpm typecheck
corepack pnpm generate
```
