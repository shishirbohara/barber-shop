"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactInfo } from "@/utils/contactInfo";
import { setupScrollTrigger } from "@/gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

export default function Contact() {
  const headingRef = useRef<HTMLDivElement>(null!);
  const descriptionRef = useRef<HTMLDivElement>(null!);
  const servicesRef = useRef<HTMLDivElement>(null!);
  const imagesRef = useRef<HTMLDivElement>(null!);

  useGSAP(() => {
    setupScrollTrigger({
      headingRef,
      descriptionRef,
      servicesRef,
      imagesRef,
    });
  });
  return (
    <>
      <div className="relative">
        <Image
          src={"/images/aboutImg.jpg"}
          alt="about_img"
          width={1000}
          height={1000}
          className="w-full h-[60vh] object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/40"></div>
        <div className="absolute inset-5 flex items-center justify-center">
          <div ref={headingRef} className="text-white text-center">
            <h1 className="font-bold md:my-5 my-3">GET IN TOUCH</h1>
            <p className="md:text-5xl text-3xl font-bold">Contact Us</p>
          </div>
        </div>
      </div>

      <div className="bg-[#F5EEE7] xl:px-52 md:py-12">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div ref={descriptionRef}>
                <h2 className="font-bold text-xs text-[#91765A] tracking-wider">
                  CONTACT INFO
                </h2>
                <h1 className="mt-2 md:text-5xl text-3xl font-bold">
                  Get In Touch
                </h1>
                <p className="mt-4 opacity-80 text-sm leading-7 max-w-md">
                  Get in touch with us for any questions, support, or feedback.
                  We value your input and are committed to providing assistance
                  to ensure a smooth and satisfying experience with our
                  services.
                </p>
              </div>

              <div ref={servicesRef} className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-full border border-[#9B8579]/40 flex items-center justify-center">
                      <contact.icon className="text-[#91765A]" />
                    </div>
                    <div>
                      <h3 className="font-bold leading-8">{contact.title}</h3>
                      <p className="opacity-80 font-extralight">
                        {contact.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div ref={imagesRef} className="bg-black py-8 px-12">
              <h2 className="md:text-3xl text-xl font-bold text-white md:mb-8 mb-4 text-center">
                Contact Form
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input type="text" placeholder="Name" className="bg-white" />
                  <Input type="tel" placeholder="Phone" className="bg-white" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    type="email"
                    placeholder="Email"
                    className="bg-white"
                  />
                  <Input
                    type="text"
                    placeholder="Subject"
                    className="bg-white"
                  />
                </div>
                <Textarea placeholder="Message" className="bg-white h-32" />
                <Button className="w-full bg-[#9B8579] hover:bg-[#876F63] text-white text-xs hover-transition font-bold tracking-wider py-6">
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-screen">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56536.908223286264!2d85.23136584863282!3d27.669181900000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19d4bab3029b%3A0x6b806371b4d0a2ab!2sChautari%20Digitals!5e0!3m2!1sen!2snp!4v1736925401818!5m2!1sen!2snp"
          width="100%"
          height="100%"
          className="pointereveau"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
