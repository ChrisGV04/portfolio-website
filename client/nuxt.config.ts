import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2026-10-19',

  modules: ['@vueuse/nuxt', '@nuxt/icon', '@nuxtjs/i18n', '@pinia/nuxt'],

  css: ['~/assets/css/tailwind.css'],
  vite: { plugins: [tailwindcss()] },

  app: {
    head: {
      titleTemplate: '%s - CGV WEB',

      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },

    pageTransition: { css: false },
  },

  // Same-page hash links scroll smoothly; the header offset lives in CSS (scroll-padding-top)
  router: { options: { scrollBehaviorType: 'smooth' } },

  // Overridden at runtime by NUXT_PUBLIC_API_URL
  runtimeConfig: {
    public: { apiUrl: '' },
  },

  // Inline SVGs so Tailwind size classes win over the default 1em.
  // Bundle the icons we use: the runtime endpoint lives under /api, which nginx routes to the CMS.
  icon: { mode: 'svg', clientBundle: { scan: true } },

  i18n: {
    defaultLocale: 'es',
    locales: [
      { code: 'es', file: 'es.json' },
      { code: 'en', file: 'en.json' },
    ],

    detectBrowserLanguage: false,
  },

  components: [{ path: '~/components', pathPrefix: false }],
});
