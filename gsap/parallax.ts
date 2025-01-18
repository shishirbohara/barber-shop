import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxOptions {
  start?: string;
  end?: string;
  scrub?: boolean | number;
  [key: string]: any;
}

export const applyParallaxEffect = (
  target: HTMLElement,
  yPercent: number,
  options: ParallaxOptions = {}
) => {
  gsap.to(target, {
    yPercent,
    ease: "none",
    scrollTrigger: {
      trigger: target,
      start: options.start || "top top",
      end: options.end || "bottom top",
      scrub: options.scrub || true,
      ...options,
    },
  });
};
