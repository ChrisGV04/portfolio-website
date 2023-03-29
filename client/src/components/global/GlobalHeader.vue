<script setup lang="ts">
const i18nCookie = useCookie('i18n');
const localeRoute = useLocaleRoute();
const switchLocale = useSwitchLocalePath();

function setCookie(lang: string) {
  i18nCookie.value = lang;
}
</script>

<template>
  <header>
    <BaseContainer size="full" class="flex justify-between pt-8" no-y-padding>
      <div>
        <NuxtLink :to="localeRoute('/')">
          <img class="w-20" src="/logo/cgvweb-logo-box.svg" alt="CGV WEB Logo" />
        </NuxtLink>
      </div>

      <nav class="flex flex-col items-end space-y-3">
        <NuxtLink class="navlink" :to="localeRoute('/projects')">Proyectos</NuxtLink>
        <NuxtLink class="navlink" :to="localeRoute('/contact')">Contacto</NuxtLink>

        <div class="flex space-x-5">
          <NuxtLink custom :to="switchLocale('en')" v-slot="{ isActive, href }">
            <a :href="href" :class="['navlink', isActive ? 'font-bold' : 'opacity-40 hover:opacity-100']">
              En<span class="sr-only">glish</span>
            </a>
          </NuxtLink>

          <NuxtLink custom :to="switchLocale('es')" v-slot="{ isActive, href }">
            <a :href="href" :class="['navlink', isActive ? 'font-bold' : 'opacity-40 hover:opacity-100']">
              Es<span class="sr-only">pañol</span>
            </a>
          </NuxtLink>
        </div>
      </nav>
    </BaseContainer>
  </header>
</template>

<style scoped>
.navlink {
  @apply text-right font-medium uppercase text-white hover:text-opacity-70;
}
</style>
