<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <section>
    <BaseContainer no-y-padding class="py-24 sm:pt-32 lg:py-32">
      <h1 class="text-5xl text-white sm:text-6xl md:max-w-2xl lg:max-w-4xl lg:text-7xl xl:text-8xl">
        {{ t('projectsPage.heroTitle') }}
      </h1>

      <nav class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:flex lg:gap-8">
        <BaseButton variant="white">{{ t('general.all') }}</BaseButton>
        <BaseButton>{{ t('general.websites') }}</BaseButton>
        <BaseButton>{{ t('general.ecommerces') }}</BaseButton>
        <BaseButton>{{ t('general.webApps') }}</BaseButton>
      </nav>
    </BaseContainer>
  </section>
</template>
