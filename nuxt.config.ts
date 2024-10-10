// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  css: ['~/assets/css/main.css', '~/assets/fonts/main.css'],
  modules: [
    '@formkit/auto-animate/nuxt',
    '@nuxthq/studio',
    '@nuxt/content',
    '@nuxt/image'
  ],
  app: {
    head: {
      title: 'Yapci Ramos',
    }
  },
  components: {
    global: true,
    dirs: ['~/components', '~/components/content']
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  routeRules: {
    '/': { prerender: true }
  },
  experimental: {
    typedPages: true
  }
})