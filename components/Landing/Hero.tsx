"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useScrollToAppointment } from "@/utils/useScrollToAppointment";

export default function Hero() {
  const taglineRef = useRef(null);
  const headingRef = useRef(null);
  const contactRef = useRef(null);
  const buttonRef = useRef(null);
  const scrollToAppointment = useScrollToAppointment();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    gsap.set(
      [
        taglineRef.current,
        headingRef.current,
        contactRef.current,
        buttonRef.current,
      ],
      {
        opacity: 0,
        y: 50,
      }
    );

    tl.to(taglineRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5,
    })
      .to(
        headingRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        "-=0.5"
      )
      .to(
        contactRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        "-=0.5"
      )
      .to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        "-=0.5"
      );
  }, []);

  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="image"
          width={3000}
          height={2000}
          className="w-full h-screen object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative h-full pt-10 flex items-center justify-center text-center font-bold text-white">
        <div className="container mx-auto px-4">
          <p ref={taglineRef} className="leading-10 text-sm tracking-wider">
            SHARP CUTS, SMOOTH STYLE
          </p>
          <h1 ref={headingRef} className="text-6xl leading-[70px]">
            TRANSFORMING LOOKS <br /> INSPIRING STYLE.
          </h1>
          <p
            ref={contactRef}
            className="leading-10 my-4 text-sm tracking-wider"
          >
            BHANIMANDAL ST. LTP. APPOINTMENT: 9812345678
          </p>
          <button
            ref={buttonRef}
            onClick={scrollToAppointment}
            className="text-black bg-white px-4 py-4 rounded-sm hover:text-white hover:bg-[#91765A] transition-colors duration-300 text-xs tracking-wider"
          >
            BOOK APPOINTMENT
          </button>
        </div>
      </div>
    </section>
  );
}
