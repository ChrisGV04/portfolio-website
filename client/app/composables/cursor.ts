import { gsap } from 'gsap';

export function useCursorFollower(wrapperEl: Ref<HTMLElement | null>, followerEl: Ref<HTMLElement | null>) {
  const { elementX, elementY, isOutside } = useMouseInElement(wrapperEl, {
    touch: false,
    handleOutside: false,
  });

  onMounted(() => {
    if (!import.meta.client) return;
    gsap.set(followerEl.value, { xPercent: -50, yPercent: -50 });
  });

  watch([elementX, elementY, isOutside], ([x, y, isOut]) => {
    if (!followerEl.value) return;
    gsap.to(followerEl.value, { x, y, scale: isOut ? 0 : 1, duration: 0.8, ease: 'expo.out' });
  });

  return { elementX, elementY, isOutside };
}
