export default defineNuxtConfig({
  srcDir: 'src',

  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@vueuse/nuxt', 'nuxt-icon', '@nuxtjs/i18n'],

  app: {
    head: {
      titleTemplate: '%s - CGV WEB',

      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'stylesheet', href: 'https://api.fontshare.com/v2/css?f[]=switzer@1&display=swap' },
      ],

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

  i18n: {
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'es',
    locales: [
      { code: 'es', file: 'es.json' },
      { code: 'en', file: 'en.json' },
    ],

    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n',
      redirectOn: 'root',
    },

    vueI18n: {
      legacy: false,
      locale: 'es',
    },
  },

  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        types: ['@nuxtjs/i18n'],
      },
    },
  },
});
