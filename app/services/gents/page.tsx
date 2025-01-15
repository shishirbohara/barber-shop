"use client";
import Appointment from "@/components/Landing/Appointment";
import { gentsServiceData } from "@/utils/gentsServiceData";
import Image from "next/image";
import { setupScrollTrigger } from "@/gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

export default function GentsServices() {
  const headingRef = useRef<HTMLDivElement>(null!);
  const featuresRef = useRef<HTMLDivElement>(null!);
  const servicesRef = useRef<HTMLDivElement>(null!);

  useGSAP(() => {
    setupScrollTrigger({
      headingRef,
      featuresRef,
      servicesRef,
    });
  }, []);

  return (
    <div>
      <div className="relative">
        <Image
          src={"/images/gents.jpg"}
          alt="ladies_img"
          width={3000}
          height={2000}
          className="object-cover w-full h-[60vh]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/40"></div>
        <div
          ref={headingRef}
          className="absolute inset-5 flex flex-col items-center justify-center text-white"
        >
          <p className="font-bold my-5">GENTS</p>
          <p className="text-5xl font-bold">Services For GENTS</p>
        </div>
      </div>

      <div ref={featuresRef} className="px-52 py-20 bg-[#F5EEE7] text-center">
        <h1 className="text-3xl font-bold mb-5">ELEVATE YOUR STYLE</h1>
        <p className="leading-8">
          Elevate your style with a luxurious salon experience for men providing
          personalized services including haircuts styling coloring facials
          manicures and pedicures. Our skilled professionals use premium
          products to enhance your natural beauty ensuring you leave feeling
          refreshed confident and radiant. Indulge in self-care at its finest.
        </p>
      </div>

      <div
        ref={servicesRef}
        className="bg-[#F5EEE7] px-52 pb-20 grid grid-cols-2 gap-x-32"
      >
        {gentsServiceData.map((data, index) => (
          <div key={index} className="flex justify-between">
            <h1 className="leading-10">{data.title}</h1>
            <p className="text-[#957352] italic font-bold text-lg leading-10">
              Rs {data.price}
            </p>
          </div>
        ))}
      </div>
      <Appointment />
    </div>
  );
}
