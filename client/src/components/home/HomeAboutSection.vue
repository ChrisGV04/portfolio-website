<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <section>
    <BaseContainer class="grid gap-16 md:grid-cols-3 md:gap-8">
      <div class="md:col-span-2">
        <h2 class="text-3xl leading-snug text-white lg:text-4xl">{{ t('homePage.about.title') }}</h2>
      </div>

      <div class="max-w-xs md:max-w-full">
        <p class="whitespace-pre-line text-white lg:text-lg">{{ t('homePage.about.body') }}</p>
      </div>
    </BaseContainer>
  </section>
</template>
