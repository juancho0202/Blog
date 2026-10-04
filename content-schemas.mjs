export function createBlogCollectionSchema(z) {
  return z.object({
    title: z.string(),
    description: z.string().max(200),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    cover: z.string().optional(),
  })
}

export function createPagesCollectionSchema(z) {
  return z.object({
    title: z.string(),
    description: z.string().optional(),
  })
}
