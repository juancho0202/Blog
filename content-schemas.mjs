import { z } from 'zod'

export const blogCollectionSchema = z.object({
  title: z.string(),
  description: z.string().max(200),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  cover: z.string().optional(),
})

export const pagesCollectionSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
})
