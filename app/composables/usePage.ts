export function usePage(path: string) {
  return useAsyncData(`page:${path}`, async () => {
    const page = await queryCollection('pages')
      .path(path)
      .first()

    if (!page) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Page not found',
      })
    }

    return page
  })
}
