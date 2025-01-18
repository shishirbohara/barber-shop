"use client";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { applyParallaxEffect } from "@/gsap/parallax";

export default function Experience() {
  const headingRef = useRef<HTMLDivElement>(null!);
  const descriptionRef = useRef<HTMLDivElement>(null!);
  const imagesRef = useRef<HTMLDivElement>(null!);
  const featuresRef = useRef<HTMLDivElement>(null!);

  useGSAP(() => {
    applyParallaxEffect(imagesRef.current, 20);
    applyParallaxEffect(headingRef.current, -20);
    applyParallaxEffect(descriptionRef.current, -50);
    applyParallaxEffect(featuresRef.current, -30);
  }, []);

  return (
    <div className="bg-black xl:px-52 text-white flex lg:flex-row flex-col xl:gap-20 gap-2 items-center lg:py-16">
      <div ref={imagesRef} className="px-10 py-10">
        <Image
          src={"/images/hero.jpg"}
          alt="experience"
          width={1000}
          height={100}
          className="object-cover md:h-96 lg:w-[800px] lg:h-[500px]"
          priority
        />
      </div>
      <div className="px-2 md:px-10 md:pb-10 lg:pb-0">
        <div ref={headingRef}>
          <h1 className="leading-10 text-sm font-bold text-[#91765A]">
            5 YEARS+ OF EXPERIENCE
          </h1>
          <p className="lg:text-5xl text-3xl font-bold tracking-wide lg:leading-[55px]">
            Making people look <br /> awesome since 2020
          </p>
        </div>
        <p
          ref={descriptionRef}
          className="leading-7 text-sm my-3 lg:my-2 text-[#8f8e8c]"
        >
          Come experience a unique and edgy barbershop for all your hair and
          beard needs. Step into a place where style meets precision, offering
          exceptional grooming services in a vibrant and modern setting. Whether
          you are looking for a fresh haircut or a perfectly styled beard, we
          have got you covered.
        </p>
        <div ref={featuresRef}>
          <p className="text-sm mt-5 leading-7 text-[#8f8e8c]">
            Barber, Founder
          </p>
          <p className="text-sm text-[#91765A] pb-3 md:pb-0">Abish Magar</p>
        </div>
      </div>
    </div>
  );
}
