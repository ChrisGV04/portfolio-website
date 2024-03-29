<script setup lang="ts">
import { gsap } from 'gsap';

const props = defineProps({ show: Boolean });
defineEmits(['close']);

const { t } = useI18n();
const i18nCookie = useCookie('i18n', { sameSite: 'lax' });
const localeRoute = useLocaleRoute();
const switchLocale = useSwitchLocalePath();

function setCookie(lang: string) {
  i18nCookie.value = lang;
}

// Animation
const _show = ref(props.show);
const wrapperRef = ref<HTMLElement | null>(null);

function playReveal() {
  if (!wrapperRef) return;

  const tl = gsap.timeline({
    onComplete() {
      tl.kill();
    },
  });

  tl.fromTo(wrapperRef.value, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'expo.out' });
  tl.fromTo('a.menu-link', { y: '100%' }, { y: 0, duration: 0.6, stagger: 0.1, ease: 'back.out(1.4)' });
}

function hideMenu() {
  if (!wrapperRef) return;

  const tl = gsap.timeline({
    onComplete() {
      tl.kill();
      _show.value = false;
    },
  });

  tl.to('a.menu-link', { y: '100%', duration: 0.4, stagger: 0.05, ease: 'expo.out' });
  tl.to(wrapperRef.value, { opacity: 0, duration: 0.8, ease: 'expo.out' });
}

watch(
  () => props.show,
  (show) => {
    if (show) {
      _show.value = true;
      playReveal();
      return;
    }

    hideMenu();
  }
);
</script>

<template>
  <div
    v-show="_show"
    ref="wrapperRef"
    class="fixed inset-0 z-30 h-full w-full bg-gray-900/80 backdrop-blur backdrop-saturate-150 backdrop-filter"
  >
    <BaseContainer class="relative">
      <button
        type="button"
        @click="$emit('close')"
        class="absolute right-4 top-6 grid h-10 w-10 place-items-center rounded-full bg-gray-900 sm:right-6 sm:top-8"
      >
        <span class="sr-only">{{ t('navigation.closeMenu') }}</span>
        <Icon name="heroicons:x-mark-20-solid" class="h-5 w-5 text-white" />
      </button>

      <nav class="flex flex-col space-y-4">
        <div class="overflow-hidden py-2">
          <NuxtLink class="menu-link" @click="$emit('close')" :to="localeRoute('/projects')">
            {{ t('navigation.projects') }}
          </NuxtLink>
        </div>
        <div class="overflow-hidden py-2">
          <NuxtLink class="menu-link" @click="$emit('close')" :to="localeRoute('/contact')">
            {{ t('navigation.contact') }}
          </NuxtLink>
        </div>

        <div class="flex space-x-5 overflow-hidden">
          <NuxtLink custom :to="switchLocale('en')" v-slot="{ isActive, href }">
            <a
              :href="href"
              @click="() => setCookie('en')"
              :class="['menu-link', isActive ? 'font-bold' : 'opacity-40 hover:opacity-100']"
            >
              <span aria-hidden="true">En</span>
              <span class="sr-only">{{ t('navigation.english') }}</span>
            </a>
          </NuxtLink>

          <NuxtLink custom :to="switchLocale('es')" v-slot="{ isActive, href }">
            <a
              :href="href"
              @click="() => setCookie('es')"
              :class="['menu-link', isActive ? 'font-bold' : 'opacity-40 hover:opacity-100']"
            >
              <span aria-hidden="true">Es</span>
              <span class="sr-only">{{ t('navigation.spanish') }}</span>
            </a>
          </NuxtLink>
        </div>
      </nav>
    </BaseContainer>
  </div>
</template>

<style scoped>
.menu-link {
  @apply block text-5xl text-white sm:text-6xl;
}

.menu-link.router-link-active {
  @apply underline;
}
</style>
