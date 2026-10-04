export function resolveContentAssetPath(src, baseURL = '/') {
  if (!src || !src.startsWith('/') || src.startsWith('//')) {
    return src
  }

  if (baseURL === '/') {
    return src
  }

  const normalizedBase = baseURL.endsWith('/') ? baseURL.slice(0, -1) : baseURL
  return `${normalizedBase}${src}`
}
