<script setup lang="ts">
import { gsap, ScrollTrigger } from 'gsap/all';

if (process.client) gsap.registerPlugin(ScrollTrigger);

const { locale } = useI18n();

/* ANIMATION */
const app = useNuxtApp();

/**
 * Custom hook to let the pages know when they can
 * play their reveal animations
 */
app.hooks.addHooks('page:reveal');

const transition = useTransitionStore();

const courtainEl = ref<HTMLElement | null>(null);
const courtainLogoEl = ref<HTMLElement | null>(null);

function createLandingReveal() {
  transition.mode = 'landing';
  transition.createTimeline(false);

  transition.timeline!.fromTo(
    courtainLogoEl.value,
    { opacity: 0, y: 5 },
    { y: 0, opacity: 1, ease: 'expo.out', delay: 0.8 }
  );
  transition.timeline!.to(courtainLogoEl.value, { scale: 0, duration: 0.5, ease: 'power4.in', delay: 0.5 });
  transition.timeline!.to(
    courtainEl.value,
    {
      keyframes: [
        { opacity: 0, duration: 1, ease: 'expo.out' },
        { y: '-100%', duration: 0 },
      ],
    },
    '>-0.1'
  );
  transition.timeline!.set(courtainLogoEl.value, { scale: 1, duration: 0 });
}

async function onLeave(_: unknown, done: Function) {
  /**
   * We consider onLeave as completed ONLY once the "page:finish" hook
   * is called and the transition courtain was placed
   */
  await Promise.all([
    new Promise((resolve) => app.hooks.hookOnce('page:finish', () => resolve(true))),
    new Promise((resolve) => {
      transition.mode = 'transition';
      transition.createTimeline(false);

      transition.timeline!.fromTo(
        courtainEl.value,
        { y: 0, opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          ease: 'expo.out',
          onComplete() {
            transition.timeline?.pause();
            resolve(true);
          },
        }
      );
      transition.timeline!.to(courtainEl.value, {
        delay: 0.2,
        keyframes: [
          { opacity: 0, duration: 1, ease: 'expo.out' },
          { y: '-100%', duration: 0 },
        ],
      });
    }),
  ]);

  done();
}

function onEnter(_: unknown, done: Function) {
  app.callHook('page:reveal');
  transition.timeline?.play();
  done();
}

/**
 * Play a website reveal animation
 */
app.hooks.hookOnce('page:finish', () => {
  if (!process.client) return;
  createLandingReveal();
  app.callHook('page:reveal');
});
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <Html :lang="locale" />
    <Body class="bg-gray-900 antialiased" />

    <DevOnly>
      <ClientOnly>
        <UiBreakpointViewer />
      </ClientOnly>
    </DevOnly>

    <div
      ref="courtainEl"
      aria-hidden="true"
      class="fixed z-[999] flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gray-950"
    >
      <img
        class="w-24"
        role="presentation"
        ref="courtainLogoEl"
        src="/logo/cgvweb-logo-box.svg"
        :style="{ opacity: transition.mode === 'landing' ? 0 : 1 }"
      />
    </div>

    <GlobalHeader />

    <NuxtPage class="flex-1" :transition="{ css: false, mode: 'out-in', onEnter, onLeave }" />

    <GlobalFooter />
  </div>
</template>
