import assert from 'node:assert/strict'
import { test } from 'node:test'
import { calculateReadingTime } from '../app/utils/readingTime.ts'
import { formatDate } from '../app/utils/formattedDate.ts'

test('calculateReadingTime returns minimum of 1 minute', () => {
  assert.equal(calculateReadingTime({}), 1)
})

test('calculateReadingTime uses parsed body text values', () => {
  const repeatedText = Array.from({ length: 210 }, () => 'word').join(' ')
  const body = {
    type: 'root',
    children: [
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value: repeatedText,
          },
        ],
      },
    ],
  }

  assert.equal(calculateReadingTime(body), 2)
})

test('formatDate outputs expected readable date', () => {
  assert.equal(formatDate('2026-10-04'), '4 Oct 2026')
})

test('formatDate returns empty string for invalid date', () => {
  assert.equal(formatDate('not-a-date'), '')
})
