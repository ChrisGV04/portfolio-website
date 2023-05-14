<script setup lang="ts">
import { NuxtError } from '#app';

const env = useRuntimeConfig();
const props = defineProps({ error: Object });
const { t, locale } = useI18n();

useHead({ title: t('errorPage.title') });

function isNuxtError(error?: Object): error is NuxtError & { url?: string; cause?: string } {
  return typeof error === 'object' && 'statusCode' in error && 'message' in error;
}

const usableError = computed(() => {
  if (isNuxtError(props.error)) {
    const canGoHome = props.error.url !== '/';

    if (props.error.cause === 'app')
      return { msg: t('errorPage.internalError'), status: 500, canGoHome: false };

    if (props.error.statusCode === 500) return { msg: t('errorPage.internalError'), status: 500, canGoHome };

    if (props.error.statusCode === 404) {
      // If the 404 comes from the api, render as internal error
      if (props.error.message.includes(env.public.apiUrl))
        return { msg: t('errorPage.internalError'), status: 500, canGoHome };

      // Other 404 error
      return { msg: t('errorPage.notFound'), status: 404, canGoHome };
    }

    return { msg: t('errorPage.unknownErrorToHome'), status: props.error.statusCode, canGoHome: true };
  }

  return { msg: t('errorPage.unknownError'), status: 500, canGoHome: false };
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

      <span class="block text-center text-white text-opacity-70">{{ t('errorPage.oops') }}</span>
      <h1 class="mt-2 text-center text-3xl font-medium text-white sm:text-4xl lg:text-5xl">
        {{ t('errorPage.title') }}
      </h1>

      <span class="mt-5 block text-center text-lg text-white text-opacity-70">{{ usableError.msg }}</span>

      <BaseButton @click="goHome" v-if="usableError.canGoHome" class="mt-10">{{
        t('errorPage.goHome')
      }}</BaseButton>
    </BaseContainer>
  </div>
</template>
