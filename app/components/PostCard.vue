<script setup lang="ts">
import type { PostListItem } from '../composables/usePosts'

const props = defineProps<{
  post: PostListItem
}>()

const readingTime = useReadingTime(computed(() => props.post.body))
</script>

<template>
  <article class="content-card p-5 sm:p-6">
    <div class="flex flex-col gap-3">
      <h2 class="text-2xl font-semibold tracking-tight text-foreground">
        <NuxtLink
          :to="post.path"
          class="hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          {{ post.title }}
        </NuxtLink>
      </h2>

      <PostMeta
        :date="post.date"
        :reading-time="readingTime"
        :draft="post.draft === true"
      />

      <p class="text-base leading-7 text-foreground-muted">
        {{ post.description }}
      </p>

      <TagList :tags="post.tags" />
    </div>
  </article>
</template>
