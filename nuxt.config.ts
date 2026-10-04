// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/content'],
  devtools: { enabled: true },
  content: {
    experimental: {
      sqliteConnector: 'native',
    },
  },
  compatibilityDate: '2025-07-15',
  typescript: {
    strict: true,
    typeCheck: false,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
