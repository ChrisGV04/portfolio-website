import { gsap } from 'gsap';
import { acceptHMRUpdate, defineStore } from 'pinia';

export const useTransitionStore = defineStore('transition', () => {
  const timeline = ref<gsap.core.Timeline | null>(null);
  const mode = ref<'landing' | 'transition'>('landing');
  const isAnimating = ref(false);

  function createTimeline(startPaused = true) {
    killTimeline();

    timeline.value = markRaw(
      gsap.timeline({
        paused: startPaused,
        onStart() {
          isAnimating.value = true;
        },
        onComplete() {
          timeline.value?.kill();
          timeline.value = null;
          isAnimating.value = false;
        },
      })
    );
  }

  function killTimeline() {
    if (timeline.value) timeline.value.kill();
    timeline.value = null;
  }

  return { timeline, createTimeline, killTimeline, mode, isAnimating };
});

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useTransitionStore, import.meta.hot));
