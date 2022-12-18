<script setup lang="ts">
const { t } = useI18n();
useHead({ title: t('pageTitles.home') });
</script>

<template>
  <main>
    <HomeHeroSection />

    <section>
      <BaseContainer>
        <h2>Hola mundo!</h2>
      </BaseContainer>
    </section>
  </main>
</template>
