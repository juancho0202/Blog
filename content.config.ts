import { defineCollection, defineContentConfig } from '@nuxt/content'
import { blogCollectionSchema, pagesCollectionSchema } from './content-schemas.mjs'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: {
        include: 'blog/**/*.md',
        prefix: '/blog',
      },
      schema: blogCollectionSchema,
    }),
    pages: defineCollection({
      type: 'page',
      source: {
        include: 'pages/**/*.md',
        prefix: '/',
      },
      schema: pagesCollectionSchema,
    }),
  },
})
