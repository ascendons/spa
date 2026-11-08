import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "../lib/motion";

gsap.registerPlugin(ScrollTrigger);

let instance: Lenis | null = null;
export const getLenis = () => instance;

/** Scrolls to an in-page target, smoothly when Lenis is running. */
export function scrollToTarget(
  target: string | HTMLElement | number,
  immediate = false,
) {
  if (instance) {
    instance.scrollTo(target, {
      offset: typeof target === "number" ? 0 : -80,
      immediate,
      duration: 1.4,
    });
    return;
  }
  if (typeof target === "number") window.scrollTo({ top: target });
  else {
    const el =
      typeof target === "string" ? document.querySelector(target) : target;
    el?.scrollIntoView({ block: "start" });
  }
}

export function useLenis() {
  useEffect(() => {
    // Native scrolling for reduced motion and touch-first devices: no scroll hijacking.
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({ autoRaf: false, lerp: 0.1, smoothWheel: true });
    instance = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    const rafFn = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(rafFn);
    gsap.ticker.lagSmoothing(0);

    // Smooth in-page anchors (#contact etc.).
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.4 });
      history.replaceState(null, "", id);
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      gsap.ticker.remove(rafFn);
      lenis.destroy();
      instance = null;
    };
  }, []);
}
