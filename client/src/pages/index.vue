<script setup lang="ts">
const { t } = useI18n();
useHead({ title: t('pageTitles.home') });
</script>

<template>
  <main>
    <Body class="bg-gray-50" />
    <HomeHeroSection />
    <HomeServicesSection />
    <HomePortfolioSection />
  </main>
</template>
