"use client";

import { useCallback } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const useScrollToAppointment = () => {
  const scrollToAppointment = useCallback(() => {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: "#appointment",
        offsetY: 0,
      },
      ease: "power3.inOut",
    });
  }, []);

  return scrollToAppointment;
};


