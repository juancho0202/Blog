<script setup lang="ts">
const { data: page } = await usePage('/about')

useSeoMeta({
  title: () => page.value?.title ?? 'About',
  description: () => page.value?.description ?? 'About this blog.',
})
</script>

<template>
  <article v-if="page">
    <h1>{{ page.title }}</h1>
    <ContentRenderer :value="page" />
  </article>
</template>
