import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { createBlogCollectionSchema, createPagesCollectionSchema } from './content-schemas.mjs'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: {
        include: 'blog/**/*.md',
        prefix: '/blog',
      },
      schema: createBlogCollectionSchema(z),
    }),
    pages: defineCollection({
      type: 'page',
      source: {
        include: 'pages/**/*.md',
        prefix: '/',
      },
      schema: createPagesCollectionSchema(z),
    }),
  },
})
