export default defineNuxtConfig({
  srcDir: 'src',

  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@vueuse/nuxt', 'nuxt-icon'],

  app: {
    head: {
      titleTemplate: '%s - CGV WEB',

      link: [{ rel: 'stylesheet', href: 'https://api.fontshare.com/v2/css?f[]=switzer@1&display=swap' }],

      meta: [
        { property: 'og:type', content: 'Website' },
        { property: 'og:title', content: 'Desarrollo Web - CGV WEB' },
      ],
    },
  },

  imports: { dirs: ['stores'] },

  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
      mediaUrl: process.env.NUXT_PUBLIC_MEDIA_URL,
    },
  },
});
