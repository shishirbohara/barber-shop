"use client";
import Image from "next/image";
import { useRef } from "react";
import { setupScrollTrigger } from "@/gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function Experience() {
  const headingRef = useRef<HTMLDivElement>(null!);
  const descriptionRef = useRef<HTMLDivElement>(null!);
  const imagesRef = useRef<HTMLDivElement>(null!);
  const featuresRef = useRef<HTMLDivElement>(null!);

  useGSAP(() => {
    setupScrollTrigger({
      headingRef,
      descriptionRef,
      imagesRef,
      featuresRef,
    });
  }, []);

  return (
    <div className="bg-black px-52 text-white flex gap-20 items-center py-16">
      <div ref={imagesRef}>
        <Image
          src={"/images/hero.jpg"}
          alt="experience"
          width={1000}
          height={100}
          className="object-cover w-[800px] h-[500px] rounded"
          priority
        />
      </div>
      <div>
        <div ref={headingRef}>
          <h1 className="leading-10 text-sm font-bold text-[#91765A]">
            5 YEARS+ OF EXPERIENCE
          </h1>
          <p className="text-5xl font-bold tracking-wide leading-[55px]">
            Making people look <br /> awesome since 2020
          </p>
        </div>
        <p
          ref={descriptionRef}
          className="leading-7 text-sm my-2 text-[#645F5A]"
        >
          Come experience a unique and edgy barbershop for all your hair and
          beard needs. Step into a place where style meets precision, offering
          exceptional grooming services in a vibrant and modern setting. Whether
          you're looking for a fresh haircut or a perfectly styled beard, we
          have got you covered.
        </p>
        <div ref={featuresRef}>
          <p className="text-sm mt-5 leading-7 text-[#645F5A]">
            Barber, Founder
          </p>
          <p className="text-sm text-[#91765A]">Abish Magar</p>
        </div>
      </div>
    </div>
  );
}
