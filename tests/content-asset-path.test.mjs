import assert from 'node:assert/strict'
import { test } from 'node:test'
import { resolveContentAssetPath } from '../app/composables/content-asset-path.mjs'

test('resolveContentAssetPath keeps root path for root base URL', () => {
  assert.equal(resolveContentAssetPath('/images/blog/notebook.svg', '/'), '/images/blog/notebook.svg')
})

test('resolveContentAssetPath prefixes root path for project base URL', () => {
  assert.equal(resolveContentAssetPath('/images/blog/notebook.svg', '/Blog/'), '/Blog/images/blog/notebook.svg')
})

test('resolveContentAssetPath leaves non-root paths untouched', () => {
  assert.equal(resolveContentAssetPath('images/blog/notebook.svg', '/Blog/'), 'images/blog/notebook.svg')
  assert.equal(resolveContentAssetPath('https://example.com/a.svg', '/Blog/'), 'https://example.com/a.svg')
})

test('resolveContentAssetPath keeps root route semantics', () => {
  assert.equal(resolveContentAssetPath('/', '/'), '/')
  assert.equal(resolveContentAssetPath('/', '/Blog/'), '/Blog/')
})
