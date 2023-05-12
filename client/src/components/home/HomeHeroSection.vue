<script setup lang="ts">
import { gsap, SplitText } from 'gsap/all';

const { t } = useI18n();

const transition = useTransitionStore();

function createRevealAnimation() {
  const tl = gsap.timeline({
    onComplete() {
      tl.revert();
    },
  });

  gsap.context(() => {
    const split = new SplitText('h1', {
      type: 'words,lines',
      linesClass: 'overflow-hidden',
    });
    tl.from('.gallery-column', { y: '50%', opacity: 0, ease: 'expo.out', stagger: 0.1, duration: 2 });
    tl.from(
      split.words,
      {
        y: '50%',
        opacity: 0,
        skewX: '-10deg',
        ease: 'expo.out',
        stagger: 0.08,
        duration: 1,
      },
      '>-1'
    );
  }, '#home-hero');

  return tl;
}

onMounted(async () => {
  if (!process.client) return;
  await nextTick(); // Wait for parent to get mounted
  const tl = createRevealAnimation();
  if (!!transition.timeline) transition.timeline.add(tl, '-=1');
});
</script>

<template>
  <section id="home-hero" class="relative z-0 overflow-hidden">
    <BaseContainer no-y-padding class="flex h-screen items-center justify-center md:items-end">
      <h1 class="mb-10 text-center text-[clamp(2rem,10vw,8.75rem)] uppercase leading-none text-white">
        {{ t('homePage.heroTitle') }}
      </h1>
    </BaseContainer>

    <div
      class="absolute inset-x-0 bottom-0 -z-10 h-20 w-full bg-gradient-to-t from-gray-900 to-transparent"
    ></div>

    <div class="absolute inset-0 -z-20 h-full w-full">
      <BaseContainer class="grid grid-cols-2 gap-5 sm:grid-cols-3">
        <div style="opacity: 0.4" class="gallery-column mt-32 flex flex-col space-y-5">
          <div class="aspect-[3/4] w-full rounded-lg bg-gray-600"></div>
          <div class="aspect-[3/4] w-full rounded-lg bg-gray-600"></div>
        </div>
        <div style="opacity: 0.4" class="gallery-column flex flex-col space-y-5">
          <div class="aspect-[3/4] w-full rounded-lg bg-gray-600"></div>
          <div class="aspect-[3/4] w-full rounded-lg bg-gray-600"></div>
        </div>
        <div style="opacity: 0.4" class="gallery-column hidden sm:mt-32 sm:flex sm:flex-col sm:space-y-5">
          <div class="aspect-[3/4] w-full rounded-lg bg-gray-600"></div>
          <div class="aspect-[3/4] w-full rounded-lg bg-gray-600"></div>
        </div>
      </BaseContainer>
    </div>
  </section>
</template>
