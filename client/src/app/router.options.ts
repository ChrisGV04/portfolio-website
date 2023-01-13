import type { RouterConfig } from '@nuxt/schema';

export default <RouterConfig>{
  scrollBehavior(to, __, savedPos) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (savedPos) resolve(savedPos);
        if (to.hash) resolve({ el: to.hash, behavior: 'smooth', top: 120 });
        resolve({ top: 0 });
      }, 200);
    });
  },
};
