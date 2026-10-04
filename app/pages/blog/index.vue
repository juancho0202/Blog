<script setup lang="ts">
const { data: posts } = await usePosts()

useSeoMeta({
  title: 'Blog',
  description: 'All blog posts.',
})
</script>

<template>
  <section>
    <h1>Blog posts</h1>
    <PostCard
      v-for="post in posts || []"
      :key="post.path"
      :post="post"
    />
  </section>
</template>
