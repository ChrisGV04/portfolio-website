<script setup lang="ts">
import { gsap } from 'gsap/all';
import SplitType from 'split-type';

const { t } = useI18n();
const app = useNuxtApp();

const titleEl = ref<HTMLElement | null>(null);

function createReveal() {
  if (!titleEl.value) return;

  const titleSplit = new SplitType(titleEl.value, {
    types: ['lines', 'words'],
    lineClass: 'overflow-hidden',
  });

  const tl = gsap.timeline({
    scrollTrigger: { trigger: titleEl.value, start: 'top 80%', markers: true },
    onComplete() {
      tl.revert();
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

app.hooks.hookOnce('page:reveal', () => {
  if (!process.client) return;
  createReveal();
});
</script>

<template>
  <section>
    <BaseContainer class="grid gap-12 md:grid-cols-3 md:gap-8">
      <div class="md:col-span-2">
        <h2
          ref="titleEl"
          class="fix-kerning whitespace-pre-line text-3xl leading-tight text-white lg:text-4xl lg:leading-tight"
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
