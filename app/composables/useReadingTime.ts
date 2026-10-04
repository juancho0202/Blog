import type { MaybeRefOrGetter } from 'vue'
import { toValue } from 'vue'
import { calculateReadingTime } from '../utils/readingTime'

export function useReadingTime(body: MaybeRefOrGetter<unknown>) {
  return computed(() => calculateReadingTime(toValue(body)))
}
