"use client";
import Appointment from "@/components/Landing/Appointment";
import { setupScrollTrigger } from "@/gsap/ScrollTrigger";
import { ladiesServiceData } from "@/utils/ladiesService";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

export default function LadiesServices() {
  const headingRef = useRef<HTMLDivElement>(null!);
  const featuresRef = useRef<HTMLDivElement>(null!);
  const servicesRef = useRef<HTMLDivElement>(null!);

  useGSAP(() => {
    setupScrollTrigger({
      headingRef,
      featuresRef,
      servicesRef,
    });
  });

  return (
    <div>
      <div className="relative">
        <Image
          src={"/images/ladies.jpg"}
          alt="ladies_img"
          width={3000}
          height={2000}
          className="object-cover w-full h-[60vh]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/70"></div>
        <div
          ref={headingRef}
          className="absolute inset-5 flex flex-col items-center justify-center text-white"
        >
          <p className="font-bold my-3 md:my-5">LADIES</p>
          <p className="md:text-5xl text-3xl font-bold">Services For Ladies</p>
        </div>
      </div>

      <div
        ref={featuresRef}
        className="xl:px-52 lg:px-20 lg:py-20 py-8 bg-[#F5EEE7] text-center"
      >
        <h1 className="md:text-3xl text-xl font-bold lg:mb-5 mb-2">
          UNLEASH YOUR BEAUTY
        </h1>
        <p className="leading-8 text-sm md:text-base px-3">
          Unleash Your Beauty with a luxurious salon experience for women
          providing personalized services including haircuts styling coloring
          facials manicures and pedicures. Our skilled professionals use premium
          products to enhance your natural beauty ensuring you leave feeling
          refreshed confident and radiant. Indulge in self-care at its finest.
        </p>
      </div>

      <div
        ref={servicesRef}
        className="bg-[#F5EEE7] lg:px-52 py-5 md:py-0 px-5 lg:pb-20 grid lg:grid-cols-2 lg:gap-x-32"
      >
        {ladiesServiceData.map((data, index) => (
          <div key={index} className="flex justify-between">
            <h1 className="md:leading-10 leading-8 text-sm">{data.title}</h1>
            <p className="text-[#957352] italic font-bold md:text-lg text-base leading-8 md:leading-10">
              Rs {data.price}
            </p>
          </div>
        ))}
      </div>
      <Appointment />
    </div>
  );
}
