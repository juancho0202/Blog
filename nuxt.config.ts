import { readdir, readFile } from 'node:fs/promises'
import { extname, join } from 'node:path'
import tailwindcss from '@tailwindcss/vite'

async function getAllMarkdownFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = await Promise.all(entries.map(async (entry) => {
    const entryPath = join(directory, entry.name)

    if (entry.isDirectory()) {
      return getAllMarkdownFiles(entryPath)
    }

    return extname(entry.name) === '.md' ? [entryPath] : []
  }))

  return files.flat()
}

function getFrontmatterValue(frontmatter: string, field: string): string | undefined {
  const match = frontmatter.match(new RegExp(`^\\s*${field}:\\s*(.+)$`, 'm'))
  if (!match) {
    return undefined
  }

  return match[1]?.trim().replace(/^['"]|['"]$/g, '')
}

function normalizeBaseURL(baseURL: string): string {
  if (baseURL === '/') {
    return ''
  }

  const withLeadingSlash = baseURL.startsWith('/') ? baseURL : `/${baseURL}`
  return withLeadingSlash.endsWith('/') ? withLeadingSlash.slice(0, -1) : withLeadingSlash
}

async function getPrerenderPostRoutes(): Promise<string[]> {
  const contentDir = join(process.cwd(), 'content', 'blog')
  const normalizedBaseURL = normalizeBaseURL(process.env.NUXT_APP_BASE_URL ?? '/')
  const files = await getAllMarkdownFiles(contentDir)
  const routes = await Promise.all(files.map(async (file) => {
    const source = await readFile(file, 'utf8')
    const frontmatterMatch = source.match(/^---\r?\n([\s\S]*?)\r?\n---/)
    const frontmatter = frontmatterMatch?.[1] ?? ''
    const isDraft = getFrontmatterValue(frontmatter, 'draft') === 'true'

    if (isDraft) {
      return null
    }

    const path = getFrontmatterValue(frontmatter, 'path')
    if (!path?.startsWith('/')) {
      return null
    }

    return normalizedBaseURL ? `${normalizedBaseURL}${path}` : path
  }))

  return Array.from(new Set(routes.filter((route): route is string => Boolean(route))))
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/content', '@nuxt/fonts', '@nuxt/icon', '@nuxtjs/color-mode'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
  },
  content: {
    experimental: {
      sqliteConnector: 'native',
    },
  },
  compatibilityDate: '2025-07-15',
  nitro: {
    prerender: {
      crawlLinks: true,
      ignore: ['/__nuxt_content/'],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  typescript: {
    strict: true,
    typeCheck: false,
  },
  hooks: {
    async 'nitro:config'(nitroConfig) {
      const routes = await getPrerenderPostRoutes()
      nitroConfig.prerender = nitroConfig.prerender || {}
      nitroConfig.prerender.routes = [
        ...(nitroConfig.prerender.routes || []),
        ...routes,
      ]
    },
  },
  eslint: {
    config: {
      stylistic: true,
      typescript: true,
    },
  },
  fonts: {
    defaults: {
      weights: ['400', '500', '600', '700', '800'],
    },
    families: [
      { name: 'Inter', provider: 'fontsource', weights: [400, 500, 600, 700, 800] },
      { name: 'JetBrains Mono', provider: 'fontsource', weights: [400, 500, 600, 700] },
    ],
  },
  icon: {
    provider: 'none',
    clientBundle: {
      scan: true,
    },
  },
})
