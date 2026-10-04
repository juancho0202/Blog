export function usePost(path: string) {
  return useAsyncData(`post:${path}`, async () => {
    const post = await queryCollection('blog')
      .path(path)
      .first()

    if (!post || (!import.meta.dev && post.draft === true)) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Post not found',
      })
    }

    return post
  })
}
