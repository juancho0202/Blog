type PostNavigationItem = {
  path: string
  title: string
}

export function usePostNavigation(path: string) {
  return useAsyncData(`post-navigation:${path}`, async () => {
    let surroundingsQuery = queryCollectionItemSurroundings('blog', path)
      .order('date', 'DESC')

    if (!import.meta.dev) {
      surroundingsQuery = surroundingsQuery.where('draft', '<>', true)
    }

    const [previous, next] = await surroundingsQuery

    return {
      previous: (previous ?? undefined) as PostNavigationItem | undefined,
      next: (next ?? undefined) as PostNavigationItem | undefined,
    }
  })
}
