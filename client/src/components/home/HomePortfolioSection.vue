<script setup lang="ts">
const { t } = useI18n();
const localeRoute = useLocaleRoute();

const wrapperEl = ref<HTMLElement | null>(null);
const visitEl = ref<HTMLElement | null>(null);

useCursorFollower(wrapperEl, visitEl);
</script>

<template>
  <section>
    <BaseContainer no-y-padding class="pb-24 lg:pb-32">
      <div class="px-10 py-5">
        <h2 class="uppercase text-white opacity-60">{{ t('general.featuredProjects') }}</h2>
      </div>

      <ul ref="wrapperEl" class="relative divide-y divide-white/10 border-y border-white/10">
        <FeaturedProjectListing v-for="i in 4" />

        <div
          ref="visitEl"
          aria-hidden="true"
          role="presentation"
          style="transform: scale(0)"
          class="pointer-events-none absolute -top-5 left-0 z-10 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-center font-medium text-white"
        >
          {{ t('general.visit') }}
        </div>
      </ul>

      <div class="mt-10 flex justify-center">
        <NuxtLink
          :to="localeRoute('/projects')"
          class="block rounded-xl border border-white/10 px-8 py-4 text-xl text-white text-opacity-60"
          >{{ t('general.viewAll') }}</NuxtLink
        >
      </div>
    </BaseContainer>
  </section>
</template>
