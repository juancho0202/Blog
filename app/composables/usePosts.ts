type UsePostsOptions = {
  tag?: string
  limit?: number
}

export type PostListItem = {
  path: string
  title: string
  description: string
  date: string
  tags?: string[]
  cover?: string
  draft?: boolean
}

export function usePosts(options: UsePostsOptions = {}) {
  const normalizedTag = options.tag?.trim()
  const limit = options.limit
  const key = `posts:${normalizedTag ?? 'all'}:${limit ?? 'all'}`

  return useAsyncData(key, async () => {
    const posts = await queryCollection('blog')
      .select('path', 'title', 'description', 'date', 'tags', 'cover', 'draft')
      .order('date', 'DESC')
      .all() as PostListItem[]

    const visiblePosts = import.meta.dev
      ? posts
      : posts.filter(post => post.draft !== true)

    const filteredPosts = normalizedTag
      ? visiblePosts.filter(post => post.tags?.includes(normalizedTag))
      : visiblePosts

    return typeof limit === 'number'
      ? filteredPosts.slice(0, limit)
      : filteredPosts
  })
}
