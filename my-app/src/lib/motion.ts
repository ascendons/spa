import { useEffect, useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const isFinePointer = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

/** Magnetic pull for CTAs: the element drifts toward the cursor within its box. */
export function useMagnetic(
  ref: RefObject<HTMLElement | null>,
  strength = 0.28,
) {
  useEffect(() => {
    const el = ref.current;
    if (!el || !isFinePointer() || prefersReducedMotion()) return;

    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.setProperty("--mx", `${(x * strength).toFixed(1)}px`);
      el.style.setProperty("--my", `${(y * strength).toFixed(1)}px`);
    };
    const leave = () => {
      el.style.setProperty("--mx", "0px");
      el.style.setProperty("--my", "0px");
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, [ref, strength]);
}

/** Animated count-up, triggered once when the element enters the viewport. */
export function useCountUp(ref: RefObject<HTMLElement | null>, to: number) {
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fmt = (n: number) => Math.round(n).toLocaleString("en-US");
    if (prefersReducedMotion()) {
      el.textContent = fmt(to);
      return;
    }
    const state = { n: 0 };
    el.textContent = fmt(0);
    const tween = gsap.to(state, {
      n: to,
      duration: 2.2,
      ease: "expo.out",
      paused: true,
      onUpdate: () => {
        el.textContent = fmt(state.n);
      },
    });
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => tween.play(),
    });
    return () => {
      st.kill();
      tween.kill();
    };
  }, [ref, to]);
}

/**
 * Toggles data-inview="true|false" on every [data-anim] inside `scope`, so CSS
 * loops run only while visible (animation-play-state is keyed off it).
 */
export function useInViewAttr(scope: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = scope.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>("[data-anim]");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) =>
          e.target.setAttribute("data-inview", String(e.isIntersecting)),
        ),
      { rootMargin: "80px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [scope]);
}
