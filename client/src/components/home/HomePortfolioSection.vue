<script setup lang="ts">
import { NuxtLink } from '#components';

const { t } = useI18n();
const localeRoute = useLocaleRoute();

const wrapperEl = ref<HTMLElement | null>(null);
const visitEl = ref<HTMLElement | null>(null);

useCursorFollower(wrapperEl, visitEl);
</script>

<template>
  <section>
    <BaseContainer no-y-padding class="pb-24 lg:pb-32">
      <div class="px-4 py-5 md:px-10">
        <h2 class="uppercase text-white opacity-60">{{ t('general.featuredProjects') }}</h2>
      </div>

      <ul ref="wrapperEl" class="relative divide-y divide-white/10 border-y border-white/10">
        <FeaturedProjectListing v-for="i in 4" />

        <div
          ref="visitEl"
          aria-hidden="true"
          role="presentation"
          style="transform: scale(0)"
          class="pointer-events-none absolute -top-5 left-0 z-10 hidden rounded-full bg-accent-600 text-center font-medium text-white lg:flex lg:h-20 lg:w-20 lg:items-center lg:justify-center"
        >
          {{ t('general.visit') }}
        </div>
      </ul>

      <div class="mt-10 flex justify-center">
        <BaseButton :as="NuxtLink" :to="localeRoute('/projects')">
          {{ t('general.viewAll') }}
        </BaseButton>
      </div>
    </BaseContainer>
  </section>
</template>
