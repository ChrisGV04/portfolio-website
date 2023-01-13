<script setup lang="ts">
const { t } = useI18n();
useHead({ title: t('pageTitles.home') });
</script>

<template>
  <main class="">
    <HomeHeroSection />
    <HomeServicesSection />
    <HomePortfolioSection />
  </main>
</template>
