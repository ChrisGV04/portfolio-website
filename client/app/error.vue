<script setup lang="ts">
import type { NuxtError } from '#app';

// `url` is added by Nuxt when the error page is server-rendered
const props = defineProps<{ error: NuxtError & { url?: string } }>();

const { t, locale } = useI18n();

useHead({ title: t('errorPage.title') });

const usableError = computed(() => {
  const { url, cause, status } = props.error;
  const canGoHome = url !== '/';

  if (cause === 'app') return { msg: t('errorPage.internalError'), status: 500, canGoHome: false };

  if (status === 500) return { msg: t('errorPage.internalError'), status: 500, canGoHome };

  if (status === 404) return { msg: t('errorPage.notFound'), status: 404, canGoHome };

  return { msg: t('errorPage.unknownErrorToHome'), status, canGoHome: true };
});

function goHome() {
  clearError({ redirect: '/' });
}
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center">
    <Html :lang="locale" />
    <Body class="bg-gray-900 antialiased" />

    <BaseContainer size="xs" class="relative flex flex-col items-center">
      <img
        class="absolute top-0 h-12 opacity-50 md:h-16"
        role="presentation"
        src="/logo/cgvweb-logo-box.svg"
      />

      <span class="block text-center text-white/70">{{ t('errorPage.oops') }}</span>
      <h1 class="mt-2 text-center text-3xl font-medium text-white sm:text-4xl lg:text-5xl">
        {{ t('errorPage.title') }}
      </h1>

      <span class="mt-5 block text-center text-lg text-white/70">{{ usableError.msg }}</span>

      <BaseButton @click="goHome" v-if="usableError.canGoHome" class="mt-10">{{
        t('errorPage.goHome')
      }}</BaseButton>
    </BaseContainer>
  </div>
</template>
