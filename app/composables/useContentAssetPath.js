import { resolveContentAssetPath } from './content-asset-path.mjs'

export function useContentAssetPath() {
  const { app } = useRuntimeConfig()
  return src => resolveContentAssetPath(src, app.baseURL)
}
