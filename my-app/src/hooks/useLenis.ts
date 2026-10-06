import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: false });

    lenis.on("scroll", ScrollTrigger.update);

    const rafFn = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(rafFn);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(rafFn);
      lenis.destroy();
    };
  }, []);
}
