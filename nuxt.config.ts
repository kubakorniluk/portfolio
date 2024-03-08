// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      '@nuxtjs/google-fonts', {
        preconnect: true,
        families: {
          Sarabun: [400, 500, 700, 800, 900],
          Quicksand: [500, 600, 700],
        }}
    ],
    'nuxt-icon'
  ]
})
