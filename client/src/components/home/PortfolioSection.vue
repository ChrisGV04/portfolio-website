<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <section class="overflow-hidden">
    <BaseContainer>
      <h2 class="text-h1 font-medium uppercase leading-none">
        {{ t('home.featuredProjects') }}
      </h2>
    </BaseContainer>

    <PortfolioListingsMain />
    <PortfolioListingsMain />
  </section>
</template>
