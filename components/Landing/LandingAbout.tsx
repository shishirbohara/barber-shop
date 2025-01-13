import { barberData } from "@/utils/barberData";
import { Scissors, Check } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen px-52 bg-[#F5EEE7]">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="space-y-4">

          <div className="space-y-2">
            <p className="text-[#8B7355] text-sm tracking-wider font-bold">SINCE 2020</p>
            <h1 className="text-5xl font-bold text-[#1A1A1A]">
              Abish Barber Shop
            </h1>
          </div>


          <div className="grid grid-cols-2 gap-12 items-center">

            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-[#4A4A4A] leading-relaxed">
                  Step into style at our trendy salon  where hair and beauty meet creativity
                </p>
                <p className="text-[#666666] leading-relaxed">
                  Experience the art of grooming at its finest with precision haircuts, tailored beard trims, and a stylish atmosphere. Your confidence starts here where tradition meets modern expertise for timeless results.
                </p>
              </div>


              <div className="space-y-4">
                {[
                  "We have professional and certified barbers",
                  "We use quality products to make you look perfect",
                  "We care about our customers satisfaction"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-[#8B7355]" />
                    </div>
                    <span className="text-[#4A4A4A]">{feature}</span>
                  </div>
                ))}
              </div>


              <button className="bg-[#8B7355] text-white px-8 py-3 rounded-md hover:bg-[#725E45] hover-transition flex items-center space-x-2">
                <Scissors className="h-5 w-5" />
                <span>Book Appointment</span>
              </button>
            </div>


            <div className="grid grid-cols-2 gap-8">
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

      <div className="grid grid-cols-3 gap-10 py-20">
        {
          barberData.map((items, index) => (
            <div key={index}>
              <div className="flex items-center space-x-4">
                <items.icon className="h-8 w-8 text-[#8B7355]" />
                <h2 className="text-xl font-bold text-[#1A1A1A] my-3">{items.title}</h2>
              </div>
              <p className="text-[#4A4A4A] text-sm leading-6 ml-12">{items.body}</p>
            </div>
          ))
        }
      </div>
    </main>
  );
}