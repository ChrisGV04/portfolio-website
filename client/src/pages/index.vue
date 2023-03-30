<script setup lang="ts">
const { t } = useI18n();
useHead({ title: t('pageTitles.home') });
</script>

<template>
  <main>
    <HomeHeroSection />
    <HomeAboutSection />
  </main>
</template>
