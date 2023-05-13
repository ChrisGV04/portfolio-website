<script setup lang="ts">
const { t } = useI18n();
useHead({ title: t('navigation.projects') });

const wrapperEl = ref<HTMLElement | null>(null);
const visitEl = ref<HTMLElement | null>(null);

useCursorFollower(wrapperEl, visitEl);
</script>

<template>
  <main>
    <PortfolioHeroSection />

    <section>
      <BaseContainer no-y-padding class="pb-24 lg:pb-32">
        <div class="hidden md:flex md:gap-5 md:px-10 md:py-5">
          <span class="flex-1 uppercase text-white opacity-60">{{ t('general.customer') }}</span>
          <span class="uppercase text-white opacity-60 md:w-60">{{ t('general.services') }}</span>
          <span class="uppercase text-white opacity-60 md:w-14">{{ t('general.year') }}</span>
          <div class="w-8 lg:hidden"></div>
        </div>

        <ul ref="wrapperEl" class="relative divide-y divide-white/10 border-y border-white/10">
          <SimpleProjectListing v-for="i in 12" />

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
      </BaseContainer>
    </section>

    <GlobalCta />
  </main>
</template>
