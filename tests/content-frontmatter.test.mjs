import assert from 'node:assert/strict'
import { test } from 'node:test'
import { blogCollectionSchema } from '../content-schemas.mjs'

const validBlogFrontmatter = {
  title: 'Schema validation sample',
  description: 'This frontmatter should pass schema validation.',
  date: '2026-10-04',
  tags: ['nuxt', 'content'],
  draft: false,
}

test('blog frontmatter requires title', () => {
  const result = blogCollectionSchema.safeParse({
    ...validBlogFrontmatter,
    title: undefined,
  })

  assert.equal(result.success, false)
  if (!result.success) {
    assert.match(result.error.issues[0]?.path.join('.'), /title/i)
  }
})

test('blog frontmatter rejects invalid date', () => {
  const result = blogCollectionSchema.safeParse({
    ...validBlogFrontmatter,
    date: 'not-a-real-date',
  })

  assert.equal(result.success, false)
  if (!result.success) {
    assert.match(result.error.issues[0]?.path.join('.'), /date/i)
  }
})
