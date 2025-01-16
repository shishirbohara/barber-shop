"use client";

import { barberData } from "@/utils/barberData";
import { Scissors, Check } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { setupScrollTrigger } from "@/gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useScrollToAppointment } from "@/utils/useScrollToAppointment";

export default function LandingAbout() {
  const headingRef = useRef<HTMLDivElement>(null!);
  const descriptionRef = useRef<HTMLDivElement>(null!);
  const featuresRef = useRef<HTMLDivElement>(null!);
  const buttonRef = useRef<HTMLButtonElement>(null!);
  const imagesRef = useRef<HTMLDivElement>(null!);
  const servicesRef = useRef<HTMLDivElement>(null!);
  const scrollToAppointment = useScrollToAppointment();

  useGSAP(() => {
    setupScrollTrigger({
      headingRef,
      descriptionRef,
      featuresRef,
      buttonRef,
      imagesRef,
      servicesRef,
    });
  }, []);

  return (
    <main className="min-h-screen xl:px-52 bg-[#F5EEE7]">
      <div className="lg:max-w-7xl mx-auto lg:px-8 px-2 lg:py-16 py-5">
        <div className="space-y-4">
          <div ref={headingRef} className="space-y-2">
            <p className="text-[#8B7355] text-sm tracking-wider font-bold">
              SINCE 2020
            </p>
            <h1 className="text-2xl lg:text-5xl font-bold text-[#1A1A1A]">
              Abish Barber Shop
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <div ref={descriptionRef} className="space-y-4">
                <p className="text-sm lg:text-lg text-[#4A4A4A] leading-relaxed">
                  Step into style at our trendy salon where hair and beauty meet
                  creativity
                </p>
                <p className="text-[#666666] leading-relaxed text-sm">
                  Experience the art of grooming at its finest with precision
                  haircuts, tailored beard trims, and a stylish atmosphere. Your
                  confidence starts here where tradition meets modern expertise
                  for timeless results.
                </p>
              </div>

              <div ref={featuresRef} className="space-y-2 md:space-y-4">
                {[
                  "We have professional and certified barbers",
                  "We use quality products to make you look perfect",
                  "We care about our customers satisfaction",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-[#8B7355]" />
                    </div>
                    <span className="text-[#4A4A4A] text-sm md:text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                ref={buttonRef}
                onClick={scrollToAppointment}
                className="bg-[#8B7355] text-white px-8 py-3 text-sm md:text-base rounded-md hover:bg-[#725E45] hover-transition flex items-center space-x-2"
              >
                <Scissors className="h-5 w-5" />
                <span>Book Appointment</span>
              </button>
            </div>

            <div ref={imagesRef} className="grid grid-cols-2 gap-8 py-10">
              <div className="aspect-[3/4]">
                <Image
                  src="/images/hair.jpg"
                  alt="Barber cutting client's hair"
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="aspect-[3/4] relative mt-12">
                <Image
                  width={1000}
                  height={1000}
                  src="/images/trimmer.jpg"
                  alt="Close up of haircut"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={servicesRef}
        className="grid lg:grid-cols-3 lg:gap-10 px-2 md:px-0 pb-10 md:pb-0 lg:py-20"
      >
        {barberData.map((items, index) => (
          <div key={index}>
            <div className="flex items-center space-x-4">
              <items.icon className="lg:h-8 lg:w-8 text-[#8B7355]" />
              <h2 className="lg:text-xl text-base font-bold text-[#1A1A1A] my-3">
                {items.title}
              </h2>
            </div>
            <p className="text-[#4A4A4A] text-sm leading-6 ml-10 lg:ml-12">
              {items.body}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
