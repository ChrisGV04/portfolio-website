<script setup lang="ts">
const { t } = useI18n();
useHead({ title: t('homePage.heroTitle') });
</script>

<template>
  <main>
    <HomeHeroSection />
    <HomeAboutSection />
    <HomePortfolioSection />

    <section class="pb-24">
      <UiMarquee :speed="40">
        <div class="ml-4 flex flex-nowrap gap-4 md:ml-8 md:gap-8">
          <div
            v-for="img in 5"
            class="aspect-[4/3] w-72 shrink-0 rounded-3xl bg-gray-600 md:w-80 lg:w-[27vw]"
          ></div>
        </div>
      </UiMarquee>
    </section>

    <GlobalCta />
  </main>
</template>
