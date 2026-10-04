const WORDS_PER_MINUTE = 200

function collectText(node: unknown, output: string[]): void {
  if (!node) {
    return
  }

  if (typeof node === 'string') {
    output.push(node)
    return
  }

  if (Array.isArray(node)) {
    for (const item of node) {
      collectText(item, output)
    }
    return
  }

  if (typeof node !== 'object') {
    return
  }

  for (const [key, value] of Object.entries(node)) {
    if (
      typeof value === 'string'
      && ['value', 'alt', 'title', 'description'].includes(key)
    ) {
      output.push(value)
      continue
    }

    collectText(value, output)
  }
}

function countWords(text: string): number {
  const matches = text.match(/[^\s]+/g)
  return matches?.length ?? 0
}

export function calculateReadingTime(body: unknown): number {
  const textParts: string[] = []
  collectText(body, textParts)
  const words = countWords(textParts.join(' '))

  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE))
}
