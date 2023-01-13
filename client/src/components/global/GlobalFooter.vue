<script setup lang="ts">
const { t } = useI18n();
const localeRoute = useLocaleRoute();
</script>

<template>
  <footer>
    <BaseContainer no-y-padding class="flex flex-col items-center gap-4 py-12 md:flex-row lg:py-20">
      <span class="hidden flex-1 md:inline">&copy; CGV WEB {{ new Date().getFullYear() }}</span>

      <div>
        <NuxtLink :to="localeRoute('/')">
          <span class="sr-only">{{ t('navigation.home') }}</span>
          <img src="/logo/cgvweb-logo-inline.webp" alt="CGV WEB Logo" class="h-6" />
        </NuxtLink>

        <span class="mt-2 block text-center text-sm text-gray-500 md:hidden"
          >&copy; CGV WEB {{ new Date().getFullYear() }}</span
        >
      </div>

      <div class="flex flex-1 items-center justify-end gap-6">
        <a href="#" :title="t('contact.whatsapp')" class="text-gray-600 hover:text-gray-800"
          ><span class="sr-only">{{ t('contact.whatsapp') }}</span>
          <Icon name="bxl:whatsapp" class="h-8 w-8"
        /></a>

        <a href="#" :title="t('contact.instagram')" class="text-gray-600 hover:text-gray-800"
          ><span class="sr-only">{{ t('contact.instagram') }}</span>
          <Icon name="bxl:instagram" class="h-8 w-8"
        /></a>

        <a href="#" :title="t('contact.email')" class="text-gray-600 hover:text-gray-800"
          ><span class="sr-only">{{ t('contact.email') }}</span>
          <Icon name="heroicons:envelope" class="h-8 w-8"
        /></a>
      </div>
    </BaseContainer>
  </footer>
</template>
