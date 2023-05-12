<script setup lang="ts">
import { gsap, ScrollTrigger } from 'gsap/all';

if (process.client) gsap.registerPlugin(ScrollTrigger);

const { locale } = useI18n();

/* ANIMATION */
const app = useNuxtApp();
const lockScroll = ref(false);
const transition = useTransitionStore();

function createLandingReveal() {
  transition.mode = 'landing';
  transition.createTimeline();
  transition.timeline!.to('#headerWrap', { opacity: 1, duration: 2 });
}

function startTransition(_: unknown, done: Function) {
  done();
}

function endTransition(_: unknown, done: Function) {
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
    <Body :class="[lockScroll && 'h-screen w-screen overflow-hidden', 'bg-gray-900 antialiased']" />

    <DevOnly>
      <ClientOnly>
        <UiBreakpointViewer />
      </ClientOnly>
    </DevOnly>

    <GlobalHeader style="opacity: 0" id="headerWrap" />

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
