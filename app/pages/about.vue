<script setup lang="ts">
const { data: page } = await usePage('/about')

useSeoMeta({
  title: () => page.value?.title ?? 'Acerca de',
  description: () => page.value?.description ?? 'Acerca de este sitio.',
})
</script>

<template>
  <article
    v-if="page"
    class="content-card prose mx-auto max-w-3xl px-5 py-8 sm:px-8 sm:py-10"
  >
    <h1>{{ page.title }}</h1>
    <ContentRenderer :value="page" />
  </article>
</template>
