export default defineNuxtConfig({
  srcDir: 'src',

  modules: ['@cgv.web/nuxt-ui', '@nuxtjs/tailwindcss', '@vueuse/nuxt', 'nuxt-icon', '@nuxtjs/i18n'],

  app: {
    head: {
      titleTemplate: '%s - CGV WEB',

      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
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
  tailwindcss: { viewer: false },
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
