<script setup lang="ts">
import { gsap, ScrollTrigger } from 'gsap/all';

if (process.client) gsap.registerPlugin(ScrollTrigger);

const { locale } = useI18n();

/* ANIMATION */
const app = useNuxtApp();
const transition = useTransitionStore();

const courtainEl = ref<HTMLElement | null>(null);
const courtainLogoEl = ref<HTMLElement | null>(null);

function createLandingReveal() {
  transition.mode = 'landing';
  transition.createTimeline();

  transition.timeline!.fromTo(
    courtainLogoEl.value,
    { opacity: 0, y: 5 },
    { y: 0, opacity: 1, ease: 'expo.out', delay: 0.8 }
  );
  transition.timeline!.to(courtainEl.value, {
    keyframes: [
      { opacity: 0, duration: 1, ease: 'expo.out' },
      { y: '-100%', duration: 0 },
    ],
    delay: 0.5,
  });
}

function startTransition(_: unknown, done: Function) {
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
        done();
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
}

function endTransition(_: unknown, done: Function) {
  transition.timeline?.play();
  done();
}

onMounted(() => {
  if (!process.client) return;
  createLandingReveal();
});

app.hook('page:finish', () => {
  if (process.client) transition.timeline?.play();
});
</script>

<template>
  <div id="smooth-content" class="flex min-h-screen flex-col">
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
      class="fixed z-[999] flex h-screen w-screen flex-col items-center justify-center bg-gray-950"
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

    <NuxtPage
      class="flex-1"
      :transition="{
        css: false,
        mode: 'out-in',
        onLeave: startTransition,
        onEnter: endTransition,
      }"
    />

    <GlobalFooter />
  </div>
</template>
