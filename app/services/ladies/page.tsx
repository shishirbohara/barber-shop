import Appointment from "@/components/Landing/Appointment";
import { ladiesServiceData } from "@/utils/ladiesService";
import Image from "next/image";
import React from "react";

export default function ladiesServices() {
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
                <div className="absolute inset-5 flex flex-col items-center justify-center text-white">
                    <p className="font-bold my-5">LADIES</p>
                    <p className="text-5xl font-bold">Services For Ladies</p>
                </div>
            </div>

            <div className="px-52 py-20 bg-[#F5EEE7] text-center">
                <h1 className="text-3xl font-bold mb-5">UNLEASH YOUR BEAUTY</h1>
                <p className="leading-8">
                    Unleash Your Beauty with a luxurious salon experience for women
                    providing personalized services including haircuts styling coloring
                    facials manicures and pedicures. Our skilled professionals use premium
                    products to enhance your natural beauty ensuring you leave feeling
                    refreshed confident and radiant. Indulge in self-care at its finest.
                </p>
            </div>

            <div className="bg-[#F5EEE7] px-52 pb-20 grid grid-cols-2 gap-x-32">
                {
                    ladiesServiceData.map((data, index) => (
                        <div key={index} className="flex justify-between">
                            <h1 className="leading-10">{data.title}</h1>
                            <p className="text-[#957352] italic font-bold text-lg leading-10">Rs {data.price}</p>
                        </div>
                    ))
                }
            </div>
            <Appointment />
        </div>
    );
}
