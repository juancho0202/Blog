<script setup lang="ts">
import { nextTick } from 'vue'

type TocLink = {
  id: string
  text: string
  depth?: number
  children?: TocLink[]
}

const props = withDefaults(defineProps<{
  toc?: {
    links?: TocLink[]
  }
  mode?: 'mobile' | 'desktop'
}>(), {
  mode: 'desktop',
})

const activeId = ref('')
let stopObservers: Array<() => void> = []

const flatLinks = computed(() => {
  const result: Array<{ id: string, text: string, depth: number }> = []

  const walk = (links: TocLink[] = [], depth = 2) => {
    for (const link of links) {
      if (!link.id || !link.text) {
        continue
      }

      result.push({ id: link.id, text: link.text, depth })
      walk(link.children ?? [], depth + 1)
    }
  }

  walk(props.toc?.links ?? [])
  return result
})

function resetObservers() {
  stopObservers.forEach(stop => stop())
  stopObservers = []
}

function syncActiveIdByScroll() {
  if (!import.meta.client) {
    return
  }

  const markerOffset = 120
  let currentId = flatLinks.value[0]?.id ?? ''

  for (const link of flatLinks.value) {
    const headingElement = document.getElementById(link.id)
    if (!headingElement) {
      continue
    }

    if (headingElement.getBoundingClientRect().top - markerOffset <= 0) {
      currentId = link.id
      continue
    }

    break
  }

  activeId.value = currentId
}

function setupObservers() {
  resetObservers()

  if (!import.meta.client) {
    return
  }

  for (const link of flatLinks.value) {
    const headingElement = document.getElementById(link.id)
    if (!headingElement) {
      continue
    }

    const { stop } = useIntersectionObserver(
      headingElement,
      ([entry]) => {
        if (entry?.isIntersecting) {
          syncActiveIdByScroll()
        }
      },
      {
        rootMargin: '0px 0px -60% 0px',
        threshold: [0.1, 0.4, 0.8],
      },
    )

    stopObservers.push(stop)
  }

  syncActiveIdByScroll()
}

watch(
  flatLinks,
  async () => {
    await nextTick()
    setupObservers()
  },
  { immediate: true },
)

onMounted(() => {
  if (!import.meta.client) {
    return
  }

  window.addEventListener('scroll', syncActiveIdByScroll, { passive: true })
})

onBeforeUnmount(() => {
  if (import.meta.client) {
    window.removeEventListener('scroll', syncActiveIdByScroll)
  }
  resetObservers()
})
</script>

<template>
  <details
    v-if="mode === 'mobile' && flatLinks.length > 0"
    class="mb-6 rounded-2xl border border-border bg-surface-muted p-4 xl:hidden"
  >
    <summary class="cursor-pointer text-sm font-semibold text-foreground">
      En esta página
    </summary>
    <ul class="mt-3 space-y-1.5 text-sm">
      <li
        v-for="link in flatLinks"
        :key="link.id"
      >
        <a
          :href="`#${link.id}`"
          class="block rounded px-2 py-1 transition-colors"
          :class="[activeId === link.id ? 'bg-brand/10 text-brand' : 'text-foreground-muted hover:bg-surface hover:text-foreground']"
          :style="{ paddingLeft: `${(link.depth - 2) * 0.75 + 0.5}rem` }"
        >
          {{ link.text }}
        </a>
      </li>
    </ul>
  </details>

  <nav
    v-else-if="mode === 'desktop' && flatLinks.length > 0"
    aria-label="Table of contents"
    class="sticky top-24 hidden max-h-[calc(100vh-7rem)] overflow-auto rounded-2xl border border-border bg-surface-muted p-4 xl:block"
  >
    <p class="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-foreground-muted">
      En esta página
    </p>
    <ul class="space-y-1.5 text-sm">
      <li
        v-for="link in flatLinks"
        :key="link.id"
      >
        <a
          :href="`#${link.id}`"
          class="block rounded px-2 py-1 transition-colors"
          :class="[activeId === link.id ? 'bg-brand/10 text-brand' : 'text-foreground-muted hover:bg-surface hover:text-foreground']"
          :style="{ paddingLeft: `${(link.depth - 2) * 0.75 + 0.5}rem` }"
        >
          {{ link.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>
