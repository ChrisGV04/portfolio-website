<script setup lang="ts">
const { t } = useI18n();
const localeRoute = useLocaleRoute();
const switchLocale = useSwitchLocalePath();

const links = computed(() => [
  {
    to: localeRoute('/projects'),
    title: t('navigation.projects'),
  },
  {
    to: localeRoute('/about'),
    title: t('navigation.about'),
  },
  {
    to: localeRoute('/contact'),
    title: t('navigation.contact'),
  },
]);
</script>

<template>
  <header
    class="pointer-events-none fixed inset-x-0 top-0 z-30 mx-auto flex max-w-[95rem] justify-between p-4 lg:p-8"
  >
    <NuxtLink :to="localeRoute('/')" class="pointer-events-auto">
      <span class="sr-only">{{ t('navigation.home') }}</span>
      <img src="/logo/cgvweb-logo-box.webp" alt="CGV WEB Logo" class="w-14 md:w-20" />
    </NuxtLink>

    <nav class="pointer-events-auto flex flex-col items-end space-y-3">
      <NuxtLink
        :to="link.to"
        :key="link.to?.path"
        v-slot="{ isActive }"
        v-for="link in links"
        class="flex items-center gap-1"
      >
        <Icon v-show="isActive" name="heroicons:arrow-small-right-20-solid" class="h-5 w-5 text-gray-400" />
        <span class="font-medium uppercase text-gray-600">{{ link.title }}</span>
      </NuxtLink>

      <div class="flex space-x-3">
        <NuxtLink :to="switchLocale('en')" v-slot="{ isActive }"
          ><span :class="isActive ? 'font-bold' : 'font-medium opacity-40'" class="uppercase text-gray-600"
            >En</span
          ></NuxtLink
        >

        <NuxtLink :to="switchLocale('es')" v-slot="{ isActive }"
          ><span :class="isActive ? 'font-bold' : 'font-medium opacity-40'" class="uppercase text-gray-600"
            >Es</span
          ></NuxtLink
        >
      </div>
    </nav>
  </header>
</template>
