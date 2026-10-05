<script setup lang="ts">
const { data: posts } = await usePosts({ limit: 5 })

useSeoMeta({
  title: 'Inicio',
  description: 'Últimas publicaciones del sitio.',
})
</script>

<template>
  <section class="space-y-8">
    <header class="space-y-4">
      <p class="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
        Últimas publicaciones
      </p>
      <h1 class="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Experiencias en construcción para compartir
      </h1>
    </header>

    <section class="space-y-5">
      <div class="flex items-center justify-between gap-4">
        <h2 class="text-xl font-semibold text-foreground">
          Artículos recientes
        </h2>
      </div>

      <div class="space-y-4">
        <PostCard
          v-for="post in posts || []"
          :key="post.path"
          :post="post"
        />
      </div>

      <p class="pt-2">
        <NuxtLink
          to="/blog"
          class="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          Ver todos los artículos
        </NuxtLink>
      </p>
    </section>
  </section>
</template>
