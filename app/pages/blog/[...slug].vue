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
  title: () => post.value?.title ?? 'Artículo',
  description: () => post.value?.description ?? 'Artículo del blog',
})
</script>

<template>
  <div
    v-if="post"
    class="mx-auto w-full xl:grid xl:grid-cols-[minmax(0,1fr)_18rem] xl:gap-8"
  >
    <article class="min-w-0">
      <header class="mb-8 space-y-4">
        <p class="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
          Artículo
        </p>
        <h1 class="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {{ post.title }}
        </h1>
        <PostMeta
          :date="post.date"
          :reading-time="readingTime"
          :draft="post.draft === true"
        />
        <TagList :tags="post.tags" />
      </header>

      <TableOfContents
        mode="mobile"
        :toc="post.body?.toc"
      />

      <div class="prose prose-slate dark:prose-invert max-w-none rounded-3xl border border-border bg-surface p-5 shadow-sm sm:p-8 lg:p-10">
        <ContentRenderer :value="post" />
      </div>

      <PostNav
        :previous="navigation?.previous"
        :next="navigation?.next"
      />
    </article>

    <TableOfContents
      mode="desktop"
      :toc="post.body?.toc"
    />
  </div>
</template>
