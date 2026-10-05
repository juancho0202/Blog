<script setup lang="ts">
import { nextTick, watch } from 'vue'

const props = withDefaults(defineProps<{
  code?: string
  language?: string | null
  filename?: string | null
  highlights?: number[]
  meta?: string | null
  class?: string | null
}>(), {
  code: '',
  language: null,
  filename: null,
  highlights: () => [],
  meta: null,
  class: null,
})

const preElement = ref<HTMLElement | null>(null)
const { copy, copied } = useClipboard({ copiedDuring: 1600 })

const languageLabel = computed(() => (props.language ?? 'text').toUpperCase())
const blockLabel = computed(() => props.filename ?? languageLabel.value)

async function copyCode() {
  await copy(props.code)
}

function applyLineHighlights() {
  const lineElements = preElement.value?.querySelectorAll('code .line') ?? []
  const highlightedLines = new Set(props.highlights)

  lineElements.forEach((lineElement, index) => {
    lineElement.classList.toggle('line--highlight', highlightedLines.has(index + 1))
  })
}

watch(
  () => [props.highlights, props.code],
  async () => {
    await nextTick()
    applyLineHighlights()
  },
  { immediate: true, deep: true },
)
</script>

<template>
  <figure
    class="not-prose my-6 overflow-hidden rounded-2xl border border-border bg-slate-950/95 shadow-sm"
    data-code-block="true"
    :data-code-label="blockLabel"
    :data-language="languageLabel"
    :data-meta="meta || undefined"
  >
    <figcaption class="flex items-center justify-between gap-3 border-b border-slate-800 bg-slate-900/90 px-4 py-2.5 text-xs font-semibold text-slate-200">
      <span class="truncate">{{ blockLabel }}</span>
      <button
        type="button"
        class="rounded-md border border-slate-700 px-2 py-1 text-[11px] leading-none transition-colors hover:border-slate-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        @click="copyCode"
      >
        {{ copied ? 'Copied!' : 'Copy' }}
      </button>
    </figcaption>
    <pre
      ref="preElement"
      :class="[props.class, 'm-0 overflow-x-auto rounded-none border-0 bg-transparent p-4 text-sm leading-6 text-slate-100']"
    ><slot /></pre>
  </figure>
</template>

<style scoped>
:deep(pre code .line) {
  display: block;
  margin: 0 -1rem;
  padding: 0 1rem;
}

/* `.highlight` is emitted by Shiki for highlighted lines; `.line--highlight` is a runtime fallback. */
:deep(pre code .line.highlight),
:deep(pre code .line.line--highlight) {
  background: color-mix(in srgb, var(--color-brand) 14%, transparent);
  border-left: 2px solid var(--color-brand);
}
</style>
