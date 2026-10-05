<script setup lang="ts">
const { data: posts } = await usePosts()

useSeoMeta({
  title: 'Artículos',
  description: 'Todos los artículos publicados.',
})
</script>

<template>
  <section class="space-y-6">
    <header class="space-y-2">
      <p class="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
        Archivo
      </p>
      <h1 class="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Artículos del Blog
      </h1>
    </header>

    <div class="space-y-4">
      <PostCard
        v-for="post in posts || []"
        :key="post.path"
        :post="post"
      />
    </div>
  </section>
</template>
