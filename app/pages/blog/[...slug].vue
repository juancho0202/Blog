<script setup lang="ts">
const route = useRoute()
const slug = Array.isArray(route.params.slug)
  ? route.params.slug.join('/')
  : route.params.slug
const path = `/blog/${slug ?? ''}`

const { data: post } = await usePost(path)
const { data: navigation } = await usePostNavigation(path)
const readingTime = useReadingTime(computed(() => post.value?.body))

useSeoMeta({
  title: () => post.value?.title ?? 'Post',
  description: () => post.value?.description ?? 'Blog post',
})
</script>

<template>
  <article v-if="post">
    <header>
      <h1>{{ post.title }}</h1>
      <PostMeta
        :date="post.date"
        :reading-time="readingTime"
        :draft="post.draft === true"
      />
      <TagList :tags="post.tags" />
    </header>

    <ContentRenderer :value="post" />

    <PostNav
      :previous="navigation?.previous"
      :next="navigation?.next"
    />
  </article>
</template>
