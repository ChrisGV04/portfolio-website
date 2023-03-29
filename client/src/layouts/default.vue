<script setup lang="ts">
const { locale } = useI18n();
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <Html :lang="locale" />
    <Body class="antialiased transition-colors" />

    <NuxtPage class="flex-1" />
  </div>
</template>
