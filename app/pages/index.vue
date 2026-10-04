<script setup lang="ts">
const { data: posts } = await usePosts({ limit: 5 })

useSeoMeta({
  title: 'Home',
  description: 'Latest notes and experiments from the blog.',
})
</script>

<template>
  <section>
    <h1>Blog</h1>
    <p>Notes about building and maintaining a static Nuxt site.</p>

    <section>
      <h2>Latest posts</h2>
      <PostCard
        v-for="post in posts || []"
        :key="post.path"
        :post="post"
      />
      <p>
        <NuxtLink to="/blog">
          View all posts
        </NuxtLink>
      </p>
    </section>
  </section>
</template>
