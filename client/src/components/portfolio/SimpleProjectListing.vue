<script setup lang="ts">
const { t } = useI18n();

const wrapperEl = ref<HTMLElement | null>(null);
const { elementX, elementY } = useMouseInElement(wrapperEl, { touch: false, handleOutside: false });
</script>

<template>
  <li ref="wrapperEl" class="feat-project relative">
    <a href="#" target="_blank" class="flex flex-col px-4 py-5 md:px-10 lg:p-10">
      <div class="flex items-center justify-between gap-5">
        <h3 class="flex-1 text-2xl text-white sm:truncate sm:text-3xl md:text-4xl">Ecos Media</h3>

        <div class="hidden gap-5 md:flex">
          <span class="text-base text-white text-opacity-70 md:w-60 md:text-lg">Design & development</span>
          <span class="text-base text-white text-opacity-70 md:w-14 md:text-lg">2023</span>
        </div>

        <div class="lg:hidden">
          <BaseButton size="custom" variant="white" class="h-8 w-8 rounded-full">
            <span class="sr-only">{{ t('general.visit') }}</span>
            <Icon name="heroicons:arrow-up-right-20-solid" class="h-5 w-5" />
          </BaseButton>
        </div>
      </div>

      <div class="mt-2 flex justify-between gap-5 text-white text-opacity-70 md:hidden">
        <span class="text-sm sm:text-base">Design & development</span>

        <span class="text-sm sm:text-base">2023</span>
      </div>
    </a>
  </li>
</template>

<style scoped>
@media (min-width: 1024px) {
  .feat-project:hover::before {
    opacity: 1;
  }

  .feat-project::before {
    left: 0;
    top: 0;
    content: '';
    z-index: -1;
    height: 100%;
    width: 100%;
    position: absolute;
    opacity: 0;
    transition: opacity 500ms;

    background: radial-gradient(
      800px circle at v-bind(`${elementX}px`) v-bind(`${elementY-20}px`),
      rgba(37, 99, 235, 0.1),
      transparent 40%
    );
  }
}
</style>
