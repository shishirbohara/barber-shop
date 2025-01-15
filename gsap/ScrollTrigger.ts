import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const setupScrollTrigger = (
  refs: Partial<{
    headingRef: React.RefObject<HTMLDivElement>;
    descriptionRef: React.RefObject<HTMLDivElement>;
    featuresRef: React.RefObject<HTMLDivElement>;
    buttonRef: React.RefObject<HTMLButtonElement>;
    imagesRef: React.RefObject<HTMLDivElement>;
    servicesRef: React.RefObject<HTMLDivElement>;
  }>
) => {
  const {
    headingRef,
    descriptionRef,
    featuresRef,
    buttonRef,
    imagesRef,
    servicesRef,
  } = refs;

  if (headingRef?.current) {
    gsap.from(headingRef.current, {
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 90%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }

  if (descriptionRef?.current) {
    gsap.from(descriptionRef.current, {
      scrollTrigger: {
        trigger: descriptionRef.current,
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
    });
  }

  if (featuresRef?.current) {
    gsap.from(featuresRef.current.children, {
      scrollTrigger: {
        trigger: featuresRef.current,
        start: "top 80%",
      },
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
  }

  if (buttonRef?.current) {
    gsap.from(buttonRef.current, {
      scrollTrigger: {
        trigger: buttonRef.current,
        start: "top 80%",
      },
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.6,
      ease: "power3.out",
    });
  }

  if (imagesRef?.current) {
    gsap.from(imagesRef.current.children, {
      scrollTrigger: {
        trigger: imagesRef.current,
        start: "top 70%",
      },
      x: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
    });
  }

  if (servicesRef?.current) {
    gsap.from(servicesRef.current.children, {
      scrollTrigger: {
        trigger: servicesRef.current,
        start: "top 75%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
  }
};
