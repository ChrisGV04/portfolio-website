<script setup lang="ts">
const { t } = useI18n();
useHead({ title: t('pageTitles.projects') });
</script>

<template>
  <main>
    <Body class="bg-gray-50" />
    <h1>{{ $t('navigation.projects') }}</h1>
  </main>
</template>
