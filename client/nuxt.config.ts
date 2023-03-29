export default defineNuxtConfig({
  srcDir: 'src',

  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', 'nuxt-icon', '@nuxtjs/i18n'],

  app: {
    head: {
      titleTemplate: '%s - CGV WEB',

      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'stylesheet', href: 'https://api.fontshare.com/v2/css?f[]=switzer@1&display=swap' },
      ],
    },
  },

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

    detectBrowserLanguage: false,

    vueI18n: {
      legacy: false,
      locale: 'es',
    },
  },

  build: { transpile: ['gsap'] },
  components: [{ path: '~/components', pathPrefix: false }],

  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        types: ['@nuxtjs/i18n'],
      },
    },
  },
});
