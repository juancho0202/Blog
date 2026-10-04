import type { MaybeRefOrGetter } from 'vue'
import { toValue } from 'vue'
import { formatDate } from '../utils/formattedDate'

export function useFormattedDate(date: MaybeRefOrGetter<string | Date | null | undefined>) {
  return computed(() => formatDate(toValue(date)))
}
