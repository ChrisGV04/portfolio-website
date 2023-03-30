<script setup lang="ts">
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

if (process.client) gsap.registerPlugin(SplitText);

const { locale } = useI18n();

/** ANIMATION */
let transitionTimeline: gsap.core.Timeline | null = null;
const animationMode = ref<'landing' | 'transition'>('landing');
const isAnimatingTransition = ref(false);
const lockScroll = ref(true);

function createLandingReveal() {
  lockScroll.value = true;
  animationMode.value = 'landing';
  isAnimatingTransition.value = true;

  transitionTimeline = gsap.timeline({
    paused: true,
    onComplete() {
      transitionTimeline?.kill();
      transitionTimeline = null;
      isAnimatingTransition.value = false;
    },
  });

  transitionTimeline.to('#headerWrap', {
    opacity: 1,
    duration: 2,
    onComplete() {
      lockScroll.value = false;
    },
  });
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

const app = useNuxtApp();
app.hook('page:finish', () => {
  console.log('Mounted transition?', !!transitionTimeline);
  if (process.client && transitionTimeline) transitionTimeline.play();
});

provide(transitionsKey, () => ({
  mode: animationMode,
  timeline: transitionTimeline,
  isAnimating: isAnimatingTransition,
}));
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <Html :lang="locale" />
    <Body :class="[lockScroll && 'h-screen w-screen overflow-hidden', 'bg-gray-900 antialiased']" />

    <DevOnly>
      <ClientOnly>
        <DevBreakpointsViewer />
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
