<script setup lang="ts">
import { gsap } from 'gsap';
import SplitType from 'split-type';

const { t } = useI18n();
const localeRoute = useLocaleRoute();

/* ANIMATION */

const app = useNuxtApp();
const titleEl = ref<HTMLElement | null>(null);

function createReveal() {
  if (!titleEl.value) return;

  const titleSplit = new SplitType(titleEl.value, {
    types: ['lines', 'words'],
    lineClass: 'overflow-hidden',
  });

  const tl = gsap.timeline({
    scrollTrigger: { trigger: titleEl.value, start: 'top 80%' },
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
    <BaseContainer no-y-padding>
      <div class="flex flex-col gap-8 py-12 lg:flex-row lg:justify-between lg:py-24">
        <h3
          ref="titleEl"
          style="line-height: 1.25"
          class="fix-kerning max-w-md text-4xl text-white sm:text-5xl md:max-w-2xl md:text-6xl lg:max-w-3xl lg:text-7xl"
        >
          {{ t('footer.title') }}
        </h3>

        <div class="relative ml-auto lg:m-0">
          <svg
            fill="none"
            viewBox="0 0 54 46"
            role="presentation"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute right-[calc(100%+1rem)] top-3/4 w-14"
          >
            <path
              fill="#fff"
              d="M.62 45.176a.5.5 0 0 0 .76.648l-.76-.648Zm6.098-6.387.38.324-.38-.324ZM48.035 6.694l.219.45-.218-.45Zm4.142-1.228a.5.5 0 1 0-.217-.976l.217.976Zm-4.892 8.248a.5.5 0 0 0 .87.491l-.87-.491ZM53 4.605l.435.246a.5.5 0 0 0-.253-.712L53 4.605ZM42.651.035a.5.5 0 1 0-.363.93l.363-.93Zm-41.27 45.79 5.718-6.712-.761-.648-5.719 6.71.762.65Zm5.718-6.712c11.429-13.415 25.42-24.332 41.155-31.969l-.437-.9c-15.863 7.699-29.963 18.702-41.48 32.22l.762.649ZM48.254 7.144a60.46 60.46 0 0 1 2.476-1.146c.687-.294 1.174-.471 1.447-.532l-.217-.976c-.375.083-.939.295-1.624.589-.696.298-1.55.695-2.519 1.166l.437.9Zm-.098 7.061 5.28-9.354-.871-.492-5.28 9.355.87.491ZM53.182 4.14 42.652.034l-.364.932 10.53 4.105.364-.932Z"
            />
          </svg>

          <NuxtLink
            :to="localeRoute('/contact')"
            class="grid h-40 w-40 place-items-center rounded-full bg-accent-600 text-lg font-medium text-white lg:h-52 lg:w-52"
            >{{ t('general.getInTouch') }}</NuxtLink
          >
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
