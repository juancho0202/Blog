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
  <p>
    <span>{{ formattedDate }}</span>
    <span v-if="typeof readingTime === 'number'">
      · {{ readingTime }} min read
    </span>
    <strong v-if="showDraftBadge">
      · Draft
    </strong>
  </p>
</template>
