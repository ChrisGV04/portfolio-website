<script setup lang="ts">
const localeRoute = useLocaleRoute();
</script>

<template>
  <footer>
    <BaseContainer no-y-padding class="flex gap-4 py-20">
      <span class="flex-1">&copy; CGV WEB {{ new Date().getFullYear() }}</span>

      <NuxtLink :to="localeRoute('/')">
        <span class="sr-only">{{ $t('navigation.home') }}</span>
        <img src="/logo/cgvweb-logo-inline.webp" alt="CGV WEB Logo" class="h-6" />
      </NuxtLink>

      <div class="flex flex-1 items-center justify-end gap-6">
        <a href="#" :title="$t('contact.whatsapp')" class="text-gray-600 hover:text-gray-800"
          ><span class="sr-only">{{ $t('contact.whatsapp') }}</span>
          <Icon name="bxl:whatsapp" class="h-8 w-8"
        /></a>

        <a href="#" :title="$t('contact.instagram')" class="text-gray-600 hover:text-gray-800"
          ><span class="sr-only">{{ $t('contact.instagram') }}</span>
          <Icon name="bxl:instagram" class="h-8 w-8"
        /></a>

        <a href="#" :title="$t('contact.email')" class="text-gray-600 hover:text-gray-800"
          ><span class="sr-only">{{ $t('contact.email') }}</span>
          <Icon name="heroicons:envelope" class="h-8 w-8"
        /></a>
      </div>
    </BaseContainer>
  </footer>
</template>
