import { resolveContentAssetPath } from './content-asset-path.mjs'

export function useContentAssetPath() {
  const { app } = useRuntimeConfig()
  // @ts-expect-error implicit parameter type keeps ESLint parser compatibility in this repository setup
  return src => resolveContentAssetPath(src, app.baseURL)
}
