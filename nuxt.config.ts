// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    baseURL: '/nuxt3-with-heroku/'
  },
  css: [
    'bootstrap/dist/css/bootstrap.css',
  ]
})
