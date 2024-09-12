// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  css: ['~/assets/css/main.css', '~/assets/fonts/main.css'],
  modules: [
    '@formkit/auto-animate/nuxt',
    '@nuxthq/studio',
    '@nuxt/content'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  experimental: {
    typedPages: true
  }
})