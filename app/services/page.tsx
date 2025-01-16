"use client";
import Appointment from "@/components/Landing/Appointment";
import Service from "@/components/Landing/Service";
import { ServiceData } from "@/utils/serviceData";
import Image from "next/image";
import Link from "next/link";
import { setupScrollTrigger } from "@/gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

export default function Services() {
  const headingRef = useRef<HTMLDivElement>(null!);
  const imagesRef = useRef<HTMLDivElement>(null!);

  useGSAP(() => {
    setupScrollTrigger({
      headingRef,
      imagesRef,
    });
  });
  return (
    <>
      <div className="relative">
        <Image
          src={"/images/services.jpg"}
          alt="about_img"
          width={2000}
          height={2000}
          className="w-full h-[60vh] object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/50"></div>
        <div className="absolute inset-5 flex items-center justify-center">
          <div ref={headingRef} className="text-white text-center">
            <h1 className="font-bold my-3 md:my-5">SERVICES</h1>
            <p className="md:text-5xl text-2xl font-bold">
              Services We Provide
            </p>
            <div className="flex justify-center text-sm md:text-base space-x-8 md:mt-10 mt-5 font-bold">
              <Link
                href={"/services/ladies"}
                className="border-y border-[#91765A] px-1 py-0.5 cursor-pointer hover:opacity-80"
              >
                Ladies
              </Link>
              <Link
                href={"/services/gents"}
                className="border-y border-[#91765A] px-1 py-0.5 cursor-pointer hover:opacity-80"
              >
                Gents
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={imagesRef}
        className="grid lg:grid-cols-3 xl:px-52 bg-[#F5EEE7] xl:pt-20"
      >
        {ServiceData.map((data, index) => (
          <div
            key={index}
            className="bg-[#FDFBF8] mx-5 my-5 text-center md:py-10 py-5 px-6 md:space-y-5 space-y-2"
          >
            <div className="flex justify-center">
              <data.icon
                size={40}
                className="text-[#957352] hover:rotate-180 hover-transition"
              />
            </div>
            <h1 className="md:text-2xl text-lg font-bold">{data.title}</h1>
            <p className="md:text-sm text-xs md:leading-7 leading-6">{data.description}</p>
          </div>
        ))}
      </div>
      <Service />
      <Appointment />
    </>
  );
}
