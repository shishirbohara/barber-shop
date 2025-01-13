"use client";
import Appointment from "@/components/Landing/Appointment";
import LandingAbout from "@/components/Landing/LandingAbout";
import Image from "next/image";

export default function About() {

    return (
        <>
            <div className="relative">
                <Image
                    src={'/images/aboutImg.jpg'}
                    alt="about_img"
                    width={1000}
                    height={1000}
                    className="w-full h-[60vh] object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/40"></div>
                <div className="absolute inset-5 flex items-center justify-center">
                    <div className="text-white text-center">
                        <h1 className="font-bold my-5">ABOUT US</h1>
                        <p className="text-5xl font-bold">Our History</p>
                    </div>
                </div>
            </div>
            <LandingAbout />
            <Appointment />
        </>
    )

}
