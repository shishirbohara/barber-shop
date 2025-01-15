"use client";
import Appointment from "@/components/Landing/Appointment";
import Service from "@/components/Landing/Service";
import { ServiceData } from "@/utils/serviceData";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
    return (
        <>
            <div className="relative">
                <Image
                    src={'/images/services.jpg'}
                    alt="about_img"
                    width={2000}
                    height={2000}
                    className="w-full h-[60vh] object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/50"></div>
                <div className="absolute inset-5 flex items-center justify-center">
                    <div className="text-white text-center">
                        <h1 className="font-bold my-5">SERVICES</h1>
                        <p className="text-5xl font-bold">Services We Provide</p>
                        <div className="flex justify-center space-x-8 mt-10 font-bold">
                            <Link href={'/services/ladies'} className="border-y border-[#91765A] px-1 py-0.5 cursor-pointer hover:opacity-80">Ladies</Link>
                            <Link href={'/services/gents'} className="border-y border-[#91765A] px-1 py-0.5 cursor-pointer hover:opacity-80">Gents</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 px-52 bg-[#F5EEE7] pt-20">
                {
                    ServiceData.map((data, index) => (
                        <div key={index} className="bg-[#FDFBF8] mx-5 my-5 text-center py-10 px-6 space-y-5">
                            <div className="flex justify-center">
                                <data.icon size={40} className="text-[#957352] hover:rotate-180 hover-transition" />
                            </div>
                            <h1 className="text-2xl font-bold">{data.title}</h1>
                            <p className="text-sm leading-7">{data.description}</p>
                        </div>
                    ))
                }
            </div>
            <Service />
            <Appointment />
        </>
    )

}
