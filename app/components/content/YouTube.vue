<script setup lang="ts">
const props = defineProps<{
  id: string
  title?: string
}>()

const embedUrl = computed(() => `https://www.youtube-nocookie.com/embed/${encodeURIComponent(props.id)}`)
</script>

<template>
  <figure class="not-prose my-8 overflow-hidden rounded-2xl border border-border bg-surface-muted shadow-sm">
    <div class="aspect-video">
      <iframe
        class="h-full w-full"
        :src="embedUrl"
        :title="props.title || 'YouTube video player'"
        loading="lazy"
        referrerpolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
    </div>
  </figure>
</template>
