<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core';

const { t } = useI18n();
const i18nCookie = useCookie('i18n');
const localeRoute = useLocaleRoute();
const switchLocale = useSwitchLocalePath();

function setCookie(lang: string) {
  i18nCookie.value = lang;
}

// MOBILE MENU
const bp = useBreakpoints(breakpointsTailwind);
const isMobile = bp.smaller('xl');
const mobileMenuOpen = ref(false);

watch(isMobile, (mobile) => {
  if (!mobile) mobileMenuOpen.value = false;
});
</script>

<template>
  <header class="pointer-events-none fixed inset-x-0 top-0 z-20">
    <BaseContainer size="full" class="flex justify-between pt-6 sm:pt-8" no-y-padding>
      <div>
        <NuxtLink class="pointer-events-auto" :to="localeRoute('/')">
          <img class="w-14 sm:w-20" src="/logo/cgvweb-logo-box.svg" alt="CGV WEB Logo" />
        </NuxtLink>
      </div>

      <div class="pointer-events-auto">
        <nav class="hidden xl:flex xl:flex-col xl:items-end xl:space-y-3">
          <NuxtLink class="navlink" active-class="underline" :to="localeRoute('/projects')">
            {{ t('navigation.projects') }}
          </NuxtLink>
          <NuxtLink class="navlink" active-class="underline" :to="localeRoute('/contact')">
            {{ t('navigation.contact') }}
          </NuxtLink>

          <div class="flex space-x-5">
            <NuxtLink custom :to="switchLocale('en')" v-slot="{ isActive, href }">
              <a
                :href="href"
                @click="() => setCookie('en')"
                :class="['navlink', isActive ? 'font-bold' : 'opacity-40 hover:opacity-100']"
              >
                <span aria-hidden="true">En</span>
                <span class="sr-only">{{ t('navigation.english') }}</span>
              </a>
            </NuxtLink>

            <NuxtLink custom :to="switchLocale('es')" v-slot="{ isActive, href }">
              <a
                :href="href"
                @click="() => setCookie('es')"
                :class="['navlink', isActive ? 'font-bold' : 'opacity-40 hover:opacity-100']"
              >
                <span aria-hidden="true">Es</span>
                <span class="sr-only">{{ t('navigation.spanish') }}</span>
              </a>
            </NuxtLink>
          </div>
        </nav>

        <button
          type="button"
          @click="mobileMenuOpen = true"
          class="grid h-10 w-10 place-items-center rounded-full bg-gray-600 xl:hidden"
        >
          <span class="sr-only">{{ t('navigation.openMenu') }}</span>
          <Icon name="heroicons:bars-2-20-solid" class="h-5 w-5 text-white" />
        </button>

        <ClientOnly>
          <Teleport to="body">
            <GlobalMobileNavigation @close="mobileMenuOpen = false" :show="mobileMenuOpen" />
          </Teleport>
        </ClientOnly>
      </div>
    </BaseContainer>
  </header>
</template>

<style scoped>
.navlink {
  @apply whitespace-pre-line text-right font-medium uppercase text-white hover:text-opacity-70;
}
</style>
