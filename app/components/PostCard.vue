<script setup lang="ts">
import { toRef } from 'vue'
import type { PostListItem } from '../composables/usePosts'

const props = defineProps<{
  post: PostListItem
}>()

const readingTime = useReadingTime(toRef(props.post, 'description'))
</script>

<template>
  <article>
    <h2>
      <NuxtLink :to="post.path">
        {{ post.title }}
      </NuxtLink>
    </h2>
    <PostMeta
      :date="post.date"
      :reading-time="readingTime"
      :draft="post.draft === true"
    />
    <p>{{ post.description }}</p>
    <TagList :tags="post.tags" />
  </article>
</template>
