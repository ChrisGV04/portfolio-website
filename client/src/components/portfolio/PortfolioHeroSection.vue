<script setup lang="ts">
import { gsap } from 'gsap';
import SplitType from 'split-type';

const { t } = useI18n();

const app = useNuxtApp();
const transition = useTransitionStore();

const titleEl = ref<HTMLElement | null>(null);

function createRevealAnimation() {
  const tl = gsap.timeline({
    onComplete() {
      tl.revert();
    },
  });

  const split = new SplitType(titleEl.value!, {
    types: ['words', 'lines'],
    lineClass: 'overflow-hidden',
  });

  tl.from(split.words, {
    y: '100%',
    duration: 1.2,
    stagger: 0.03,
    ease: 'expo.out',
    onComplete() {
      split.revert();
    },
  });

  return tl;
}

app.hooks.hookOnce('page:reveal', () => {
  if (!process.client) return;
  const tl = createRevealAnimation();
  if (!!transition.timeline) transition.timeline.add(tl, '-=0.6');
});
</script>

<template>
  <section>
    <BaseContainer no-y-padding class="py-24 sm:pt-32 lg:py-32">
      <h1
        ref="titleEl"
        style="line-height: 1.25"
        class="fix-kerning text-5xl text-white sm:text-6xl md:max-w-2xl lg:max-w-4xl lg:text-7xl xl:text-8xl"
      >
        {{ t('projectsPage.heroTitle') }}
      </h1>

      <nav class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:flex lg:gap-8">
        <BaseButton variant="white">{{ t('general.all') }}</BaseButton>
        <BaseButton>{{ t('general.websites') }}</BaseButton>
        <BaseButton>{{ t('general.ecommerces') }}</BaseButton>
        <BaseButton>{{ t('general.webApps') }}</BaseButton>
      </nav>
    </BaseContainer>
  </section>
</template>
