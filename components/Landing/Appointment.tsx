import Image from "next/image";
import { Scissors, Star } from "lucide-react";
import AppointmentForm from "./AppointmentForm";

export default function Appointment() {
    return (
        <div className="relative">
            <Image
                src='/images/shop.jpg'
                alt="appointment"
                width={5000}
                height={1000}
                className="object-cover w-full h-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
            <div className="absolute inset-0 flex justify-between px-52 py-28">
                <div className="text-white my-32">
                    <div className="flex gap-1">
                        {Array(5).fill(null).map((_, index) => (
                            <Star key={index} size={20} className="text-yellow-500" />
                        ))}
                    </div>
                    <h1 className="text-3xl font-bold my-3">We have Best Barbers & Hair Cutting <br /> Salon at KTM.</h1>
                    <div className="flex gap-3 items-center">
                        <Scissors size={50} className="text-[#91765A]" />
                        <div>
                            <h2 className="text-sm font-bold text-[#91765A]">APPOINTMENT</h2>
                            <p className="text-2xl font-bold">9812345678</p>
                        </div>
                    </div>
                </div>
                <div>
                    <AppointmentForm />
                </div>
            </div>
        </div>
    );
}
