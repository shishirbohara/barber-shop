"use client";
import Image from "next/image";
import Link from "next/link";
import { setupScrollTrigger } from "@/gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

export default function Service() {
  const headingRef = useRef<HTMLDivElement>(null!);
  const imagesRef = useRef<HTMLDivElement>(null!);

  useGSAP(() => {
    setupScrollTrigger({
      headingRef,
      imagesRef,
    });
  }, []);
  return (
    <div className="xl:px-52 lg:py-20 py-10 bg-[#F5EEE7]">
      <div ref={headingRef} className="text-center">
        <p className="text-sm font-bold tracking-wider text-[#91765A]">
          WHAT WE OFFER
        </p>
        <h1 className="lg:text-4xl text-2xl font-bold mt-3">OUR SERVICES</h1>
      </div>
      <div
        ref={imagesRef}
        className="flex flex-col md:flex-row md:gap-10 px-10 lg:gap-0 md:justify-between mt-5 lg:mt-20 text-white"
      >
        <Link href={"/services/ladies"}>
          <div className="relative cursor-pointer hover:opacity-95">
            <Image
              src={"/images/hero.jpg"}
              alt="services_img"
              width={400}
              height={100}
              className="object-cover xl:w-[500px] xl:h-[500px]"
            />
            <h1 className="absolute bottom-0 text-center bg-[#91765A] w-full py-2 text-lg font-medium">
              LADIES
            </h1>
          </div>
        </Link>

        <Link href={"/services/gents"}>
          <div className="relative cursor-pointer hover:opacity-95 mt-5 md:mt-0">
            <Image
              src={"/images/hair.jpg"}
              alt="services_img"
              width={400}
              height={100}
              className="object-cover xl:w-[500px] xl:h-[500px]"
            />
            <h1 className="absolute bottom-0 text-center bg-[#91765A] w-full py-2 text-lg font-medium">
              GENTS
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
