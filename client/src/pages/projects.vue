<script setup lang="ts">
import { gsap } from 'gsap';
import type { ProjectInfo } from '~/types/cms';
import type { Paginated } from '~/types/utils';

const env = useRuntimeConfig();
const { t, locale } = useI18n();

useHead({ title: t('navigation.projects') });

const wrapperEl = ref<HTMLElement | null>(null);
const visitEl = ref<HTMLElement | null>(null);

useCursorFollower(wrapperEl, visitEl);

const { data, error } = await useFetch<Paginated<ProjectInfo>>(
  `${env.public.apiUrl}/projects?locale=${locale.value}&limit=20&sort=id`
);
if (error.value) throw createError({ ...error.value, fatal: true });

const filter = ref<'all' | ProjectInfo['projectType']>('all');

const filteredProjects = computed(() => {
  if (!data.value) return [];
  if (filter.value === 'all') return data.value.docs;
  return data.value.docs.filter((project) => project.projectType === filter.value);
});

function onBeforeEnter(el: Element) {
  if (el instanceof HTMLElement) {
    el.style.opacity = '0';
    el.style.height = '0';
  }
}

function onEnter(el: Element, done: Function) {
  if (!(el instanceof HTMLElement)) return;

  gsap.to(el, {
    opacity: 1,
    height: 'auto',
    onComplete: () => done(),
    delay: parseInt(el.dataset.index!) * 0.08,
  });
}

function onLeave(el: Element, done: Function) {
  gsap.to(el, { opacity: 0, height: 0, onComplete: () => done() });
}
</script>

<template>
  <main>
    <template v-if="data">
      <PortfolioHeroSection v-model="filter" />

      <section>
        <BaseContainer no-y-padding class="pb-24 lg:pb-32">
          <div class="hidden md:flex md:gap-5 md:px-10 md:py-5">
            <span class="flex-1 uppercase text-white opacity-60">{{ t('general.customer') }}</span>
            <span class="uppercase text-white opacity-60 md:w-60">{{ t('general.services') }}</span>
            <span class="uppercase text-white opacity-60 md:w-14">{{ t('general.year') }}</span>
            <div class="w-8 lg:hidden"></div>
          </div>

          <ul ref="wrapperEl" class="relative divide-y divide-white/10 border-y border-white/10">
            <TransitionGroup :css="false" @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
              <SimpleProjectListing
                :info="project"
                :key="project.id"
                :data-index="index"
                v-for="(project, index) in filteredProjects"
              />
            </TransitionGroup>

            <div
              ref="visitEl"
              aria-hidden="true"
              role="presentation"
              style="transform: scale(0)"
              class="pointer-events-none absolute -top-5 left-0 z-10 hidden rounded-full bg-accent-600 text-center font-medium text-white lg:flex lg:h-20 lg:w-20 lg:items-center lg:justify-center"
            >
              {{ t('general.visit') }}
            </div>
          </ul>
        </BaseContainer>
      </section>

      <GlobalCta />
    </template>
  </main>
</template>
