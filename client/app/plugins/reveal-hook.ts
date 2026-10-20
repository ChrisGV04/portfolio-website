/**
 * Custom hook to let the pages know when they can
 * play their reveal animations
 */
export default defineNuxtPlugin({
  name: 'reveal-hook',
  enforce: 'pre',
  setup(nuxtApp) {
    nuxtApp.hooks.addHooks('page:reveal');
  },
});

declare module '#app' {
  export interface RuntimeNuxtHooks {
    'page:reveal': () => void;
  }
}
