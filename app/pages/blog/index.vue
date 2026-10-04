<script setup lang="ts">
const { data: posts } = await usePosts()

useSeoMeta({
  title: 'Blog',
  description: 'All blog posts.',
})
</script>

<template>
  <section class="space-y-6">
    <header class="space-y-2">
      <p class="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
        Archive
      </p>
      <h1 class="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Blog posts
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
