<script setup lang="ts">
import { gsap } from 'gsap';
import SplitType from 'split-type';
import type { HomepageInfo } from '~/types/cms';

const { t } = useI18n();

defineProps({ gallery: { type: Array as PropType<HomepageInfo['hero']['gallery']>, required: true } });

const app = useNuxtApp();
const transition = useTransitionStore();

const titleEl = ref<HTMLElement | null>(null);
const galleryColumns = ref<Element[]>([]);

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
  tl.from(galleryColumns.value, { y: '50%', opacity: 0, ease: 'expo.out', stagger: 0.1, duration: 2 });
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

  return tl;
}

app.hooks.hookOnce('page:reveal', () => {
  if (!process.client) return;
  const tl = createRevealAnimation();
  if (!!transition.timeline) transition.timeline.add(tl, '-=0.6');
});
</script>

<template>
  <section ref="container" id="home-hero" class="relative z-0 overflow-hidden">
    <BaseContainer no-y-padding class="flex h-screen items-center justify-center md:items-end">
      <h1
        ref="titleEl"
        class="mb-10 text-center text-[clamp(2rem,10vw,8.75rem)] uppercase leading-none text-white"
      >
        {{ t('homePage.heroTitle') }}
      </h1>
    </BaseContainer>

    <div
      class="absolute inset-x-0 bottom-0 -z-10 h-20 w-full bg-gradient-to-t from-gray-900 to-transparent"
    ></div>

    <div class="absolute inset-0 -z-20 h-full w-full">
      <BaseContainer class="grid grid-cols-2 gap-5 sm:grid-cols-3">
        <div
          style="opacity: 0.2"
          :ref="(el) => galleryColumns.push(el as Element)"
          class="gallery-column -mt-32 flex flex-col space-y-5 sm:mt-32"
        >
          <img
            :src="item.img.url"
            :alt="item.img.alt"
            v-for="(item, itemIdx) in gallery.slice(0, 3)"
            :class="[`aspect-[3/4] w-full rounded-lg`, itemIdx === 2 && 'sm:hidden']"
          />
        </div>
        <div
          style="opacity: 0.2"
          :ref="(el) => galleryColumns.push(el as Element)"
          class="gallery-column flex flex-col space-y-5"
        >
          <img
            :src="item.img.url"
            :alt="item.img.alt"
            v-for="(item, itemIdx) in gallery.slice(2, 6)"
            :class="[
              `aspect-[3/4] w-full rounded-lg`,
              itemIdx === 0 && 'hidden sm:block',
              itemIdx >= 2 && 'sm:hidden',
            ]"
          />
        </div>
        <div
          style="opacity: 0.2"
          :ref="(el) => galleryColumns.push(el as Element)"
          class="gallery-column hidden sm:mt-32 sm:flex sm:flex-col sm:space-y-5"
        >
          <img
            :src="item.img.url"
            :alt="item.img.alt"
            v-for="item in gallery.slice(4, 6)"
            class="aspect-[3/4] w-full rounded-lg"
          />
        </div>
      </BaseContainer>
    </div>
  </section>
</template>
