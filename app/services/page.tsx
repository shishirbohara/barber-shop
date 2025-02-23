"use client";
import Appointment from "@/components/Landing/Appointment";
import Service from "@/components/Landing/Service";
import Image from "next/image";
import Link from "next/link";
import { setupScrollTrigger } from "@/gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";

interface ServiceType {
  service_name: string;
  description: string;
  image?: string | null;
}

export default function Services() {
  const [services, setServices] = useState<ServiceType[]>([]);
  const headingRef = useRef<HTMLDivElement>(null!);
  const imagesRef = useRef<HTMLDivElement>(null!);

  useGSAP(() => {
    setupScrollTrigger({
      headingRef,
      imagesRef,
    });
  });

  useEffect(() => {
    async function fetchAllServices() {
      try {
        const result = await fetch("http://localhost:8080/services", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await result.json();

        result.ok
          ? setServices(data)
          : console.log("Error fetching services data");
      } catch (error) {
        console.log("Error fetching services", error);
      }
    }
    fetchAllServices();
  }, []);

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
        className="grid md:grid-cols-2 lg:grid-cols-3 xl:px-52 bg-[#F5EEE7] md:pt-10 lg:pt-20"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#FDFBF8] mx-5 my-5 text-center md:py-10 py-5 px-6 md:space-y-5 space-y-2"
          >
            {service.image && (
              <div>
                <Image
                  src={service.image}
                  width={100}
                  height={100}
                  alt={service.service_name}
                  className="w-32 h-40"
                />
              </div>
            )}

            <h1 className="md:text-2xl text-lg font-bold">
              {service.service_name}
            </h1>
            <p className="md:text-sm text-xs md:leading-7 leading-6">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <Service />
      <Appointment />
    </>
  );
}
