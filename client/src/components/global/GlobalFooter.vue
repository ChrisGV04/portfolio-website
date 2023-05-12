<script setup lang="ts">
const { t } = useI18n();
const localeRoute = useLocaleRoute();
</script>

<template>
  <footer>
    <BaseContainer no-y-padding>
      <div class="flex flex-col gap-8 py-12 lg:flex-row lg:justify-between lg:py-24">
        <h3
          class="max-w-md text-4xl text-white sm:text-5xl md:max-w-2xl md:text-6xl lg:max-w-3xl lg:text-7xl"
        >
          <div
            class="inline-flex h-10 w-10 translate-y-2 transform rounded-full bg-gray-600 sm:h-12 sm:w-12 md:h-16 md:w-16"
          ></div>
          {{ t('footer.title') }}
        </h3>

        <div class="relative ml-auto lg:m-0">
          <svg
            fill="none"
            viewBox="0 0 54 46"
            role="presentation"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute right-[calc(100%+1rem)] top-3/4 w-14"
          >
            <path
              fill="#fff"
              d="M.62 45.176a.5.5 0 0 0 .76.648l-.76-.648Zm6.098-6.387.38.324-.38-.324ZM48.035 6.694l.219.45-.218-.45Zm4.142-1.228a.5.5 0 1 0-.217-.976l.217.976Zm-4.892 8.248a.5.5 0 0 0 .87.491l-.87-.491ZM53 4.605l.435.246a.5.5 0 0 0-.253-.712L53 4.605ZM42.651.035a.5.5 0 1 0-.363.93l.363-.93Zm-41.27 45.79 5.718-6.712-.761-.648-5.719 6.71.762.65Zm5.718-6.712c11.429-13.415 25.42-24.332 41.155-31.969l-.437-.9c-15.863 7.699-29.963 18.702-41.48 32.22l.762.649ZM48.254 7.144a60.46 60.46 0 0 1 2.476-1.146c.687-.294 1.174-.471 1.447-.532l-.217-.976c-.375.083-.939.295-1.624.589-.696.298-1.55.695-2.519 1.166l.437.9Zm-.098 7.061 5.28-9.354-.871-.492-5.28 9.355.87.491ZM53.182 4.14 42.652.034l-.364.932 10.53 4.105.364-.932Z"
            />
          </svg>

          <NuxtLink
            :to="localeRoute('/')"
            class="grid h-40 w-40 place-items-center rounded-full bg-accent-600 text-lg font-medium text-white lg:h-52 lg:w-52"
            >{{ t('general.getInTouch') }}</NuxtLink
          >
        </div>
      </div>

      <div
        class="flex flex-col-reverse gap-6 divide-y divide-y-reverse divide-white/10 py-16 sm:flex-row sm:justify-between sm:divide-y-0"
      >
        <div class="flex flex-col">
          <span class="text-sm font-semibold uppercase text-white opacity-70">{{
            t('general.copyright')
          }}</span>
          <span class="text-white">{{ new Date().getFullYear() }} &copy; {{ t('general.name') }}</span>
        </div>

        <div class="flex flex-col pb-6 sm:pb-0">
          <span class="text-sm font-semibold uppercase text-white opacity-70">{{
            t('general.socialMedia')
          }}</span>

          <div role="list" class="flex space-x-5">
            <a href="#" class="text-white hover:opacity-70">
              <span aria-hidden="true">Instagram</span>
              <span class="sr-only">{{ t('findMeOn.instagram') }}</span>
            </a>
            <a href="#" class="text-white hover:opacity-70">
              <span aria-hidden="true">Github</span>
              <span class="sr-only">{{ t('findMeOn.github') }}</span>
            </a>
            <a href="#" class="text-white hover:opacity-70">
              <span aria-hidden="true">WhatsApp</span>
              <span class="sr-only">{{ t('findMeOn.whatsapp') }}</span>
            </a>
          </div>
        </div>
      </div>
    </BaseContainer>
  </footer>
</template>
