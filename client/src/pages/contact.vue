<script setup lang="ts">
import { gsap } from 'gsap';
import SplitType from 'split-type';
import type { ContactPageInfo } from '~/types/cms';

const env = useRuntimeConfig();
const { t, locale } = useI18n();

useHead({ title: t('general.getInTouch') });

const { data, error } = await useFetch<ContactPageInfo>(
  `${env.public.apiUrl}/globals/contact-page?locale=${locale.value}`
);
if (error.value) throw createError({ ...error.value, fatal: true });

/* ANIMATIONS */
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
  <main class="flex">
    <BaseContainer
      v-if="data"
      no-y-padding
      class="flex flex-col gap-8 py-24 sm:pt-32 md:flex-row md:items-center md:justify-between"
    >
      <div class="max-w-lg lg:max-w-3xl">
        <h1
          ref="titleEl"
          style="line-height: 1.25"
          class="fix-kerning block w-full text-4xl text-white sm:text-5xl lg:text-7xl"
        >
          {{ t('contactPage.heroTitle') }}
        </h1>

        <img
          :alt="data.avatar.alt"
          :src="data.avatar.url"
          class="mt-10 w-20 rounded-full md:mt-16 md:w-40 lg:w-56"
        />
      </div>

      <div class="space-y-10">
        <div class="flex flex-col space-y-2">
          <span class="section-title">{{ t('general.contactMethods') }}</span>
          <a :href="media.url" target="_blank" v-for="media in data.contactMethods" class="section-item">{{
            media.name
          }}</a>
        </div>
        <div class="flex flex-col space-y-2">
          <span class="section-title">{{ t('general.information') }}</span>
          <span class="section-item" v-for="info in data.info">{{ info.name }}</span>
        </div>
        <div class="flex flex-col space-y-2">
          <span class="section-title">{{ t('general.otherMedia') }}</span>
          <a :href="media.url" target="_blank" v-for="media in data.otherMedia" class="section-item">{{
            media.name
          }}</a>
        </div>
      </div>
    </BaseContainer>
  </main>
</template>

<style scoped>
.section-title {
  @apply text-sm font-semibold uppercase text-white text-opacity-70;
}

.section-item {
  @apply text-white md:text-lg;
}

a.section-item {
  @apply hover:underline;
}
</style>
