<script setup lang="ts">
import type { GlobalInfo } from '~/types/cms';

const { t } = useI18n();

defineProps({
  contactMethods: { type: Array as PropType<GlobalInfo['footerContactMethods']>, required: true },
});
</script>

<template>
  <footer>
    <BaseContainer no-y-padding>
      <div
        class="flex flex-col-reverse gap-6 divide-y divide-y-reverse divide-white/10 py-16 sm:flex-row sm:justify-between sm:divide-y-0"
      >
        <div class="flex flex-col">
          <span class="text-sm font-semibold uppercase text-white opacity-70">{{
            t('general.copyright')
          }}</span>
          <span class="text-white">{{ new Date().getFullYear() }} &copy; {{ t('general.name') }}</span>
        </div>

        <div v-if="contactMethods.length" class="flex flex-col pb-6 sm:pb-0">
          <span class="text-sm font-semibold uppercase text-white opacity-70">{{
            t('general.socialMedia')
          }}</span>

          <div role="list" class="flex space-x-5">
            <a
              :href="link.url"
              target="_blank"
              v-for="link in contactMethods"
              class="text-white hover:opacity-70"
              >{{ link.name }}</a
            >
          </div>
        </div>
      </div>
    </BaseContainer>
  </footer>
</template>
