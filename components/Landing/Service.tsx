import Image from "next/image";
import Link from "next/link";

export default function Service() {
    return (
        <div className="px-52 py-20 bg-[#F5EEE7]">
            <div className="text-center">
                <p className="text-sm font-bold tracking-wider text-[#91765A]">WHAT WE OFFER</p>
                <h1 className="text-4xl font-bold mt-3">OUR SERVICES</h1>
            </div>
            <div className="flex justify-between mt-20 text-white">
                <Link href={'/services/ladies'}>
                    <div className="relative cursor-pointer hover:opacity-95">
                        <Image src={'/images/hero.jpg'} alt="services_img" width={400} height={100} className="object-cover w-[500px] h-[500px]" />
                        <h1 className="absolute bottom-0 text-center bg-[#91765A] w-full py-2 text-lg font-medium">LADIES</h1>
                    </div>
                </Link>

                <Link href={'/services/gents'}>
                    <div className="relative cursor-pointer hover:opacity-95">
                        <Image src={'/images/hair.jpg'} alt="services_img" width={400} height={100} className="object-cover w-[500px] h-[500px]" />
                        <h1 className="absolute bottom-0 text-center bg-[#91765A] w-full py-2 text-lg font-medium">GENTS</h1>
                    </div>
                </Link>
            </div>


        </div>
    )
}
