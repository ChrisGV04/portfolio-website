<script setup lang="ts">
import { gsap } from 'gsap/all';
import SplitType from 'split-type';

const { t } = useI18n();

const titleEl = ref<HTMLElement | null>(null);

let tl: gsap.core.Timeline | null = null;

function createReveal() {
  if (!!tl || !titleEl.value) return;

  const titleSplit = new SplitType(titleEl.value, {
    types: ['lines', 'words'],
    lineClass: 'overflow-hidden',
  });

  tl = gsap.timeline({
    scrollTrigger: { trigger: titleEl.value, start: 'top 80%' },
    onComplete() {
      tl?.revert();
      tl?.kill();
    },
  });

  tl.from(titleSplit.words, {
    y: '100%',
    duration: 1.2,
    stagger: 0.01,
    ease: 'expo.out',
    onComplete() {
      titleSplit.revert();
    },
  });
}

onMounted(async () => {
  if (!process.client) return;
  createReveal();
});
</script>

<template>
  <section>
    <BaseContainer class="grid gap-16 md:grid-cols-3 md:gap-8">
      <div class="md:col-span-2">
        <h2
          ref="titleEl"
          class="fix-kerning whitespace-pre-line text-3xl leading-relaxed text-white lg:text-4xl lg:leading-tight"
        >
          {{ t('homePage.about.title') }}
        </h2>
      </div>

      <div class="max-w-xs md:max-w-full">
        <p class="whitespace-pre-line text-white lg:text-lg">{{ t('homePage.about.body') }}</p>
      </div>
    </BaseContainer>
  </section>
</template>
