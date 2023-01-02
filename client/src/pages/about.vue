<script setup lang="ts">
const { t } = useI18n();
useHead({ title: t('pageTitles.about') });
</script>

<template>
  <h1>{{ $t('navigation.about') }}</h1>
</template>
