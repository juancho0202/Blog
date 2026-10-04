import { resolveContentAssetPath } from './content-asset-path.mjs'

export function useContentAssetPath(src) {
  const { app } = useRuntimeConfig()
  return resolveContentAssetPath(src, app.baseURL)
}
