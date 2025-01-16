"use client";

import Image from "next/image";
import { Scissors, Star } from "lucide-react";
import AppointmentForm from "./AppointmentForm";
import { setupScrollTrigger } from "@/gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

export default function Appointment() {
  const headingRef = useRef<HTMLDivElement>(null!);
  const imagesRef = useRef<HTMLDivElement>(null!);
  const featuresRef = useRef<HTMLDivElement>(null!);

  useGSAP(() => {
    setupScrollTrigger({
      headingRef,
      imagesRef,
      featuresRef,
    });
  }, []);

  return (
    <div className="relative min-h-screen">
      <Image
        src="/images/shop.jpg"
        alt="appointment"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16 xl:px-52 lg:px-10 lg:py-28 flex flex-col lg:flex-row justify-between items-center min-h-screen">
        <div className="text-white mb-8 lg:mb-0 lg:w-1/2">
          <div ref={headingRef} className="flex gap-1 mb-4">
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <Star key={index} size={20} className="text-yellow-500" />
              ))}
          </div>
          <h1 className="text-xl md:text-3xl font-bold mb-6">
            We have Best Barbers & Hair Cutting{" "}
            <br className="hidden md:inline" /> Salon at KTM.
          </h1>
          <div ref={featuresRef} className="flex gap-3 items-center">
            <Scissors size={40} className="text-[#91765A]" />
            <div>
              <h2 className="text-sm font-bold text-[#91765A]">APPOINTMENT</h2>
              <p className="text-xl md:text-2xl font-bold">9812345678</p>
            </div>
          </div>
        </div>
        <div ref={imagesRef} className="w-full md:px-10 lg:px-0 lg:w-1/2">
          <AppointmentForm />
        </div>
      </div>
    </div>
  );
}
