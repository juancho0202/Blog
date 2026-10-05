<script setup lang="ts">
import { toRef } from 'vue'

const props = withDefaults(defineProps<{
  date: string | Date
  readingTime?: number
  draft?: boolean
}>(), {
  readingTime: undefined,
  draft: false,
})

const formattedDate = useFormattedDate(toRef(props, 'date'))
const showDraftBadge = computed(() => import.meta.dev && props.draft)
</script>

<template>
  <p class="flex flex-wrap items-center gap-x-2 text-sm text-foreground-muted">
    <span>{{ formattedDate }}</span>
    <span v-if="typeof readingTime === 'number'">· {{ readingTime }} min lectura</span>
    <strong
      v-if="showDraftBadge"
      class="rounded-full border border-amber-400/40 bg-amber-500/10 px-2 py-0.5 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-amber-600 dark:text-amber-300"
    >
      Borrador
    </strong>
  </p>
</template>
