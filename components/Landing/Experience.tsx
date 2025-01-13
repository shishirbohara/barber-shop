import Image from "next/image";


export default function Experience() {
    return (
        <div className="bg-black px-52 text-white flex gap-20 items-center py-16">
            <Image src={'/images/hero.jpg'} alt="experience" width={1000} height={100} className="object-cover w-[800px] h-[500px] rounded" />
            <div className="">
                <h1 className="leading-10 text-sm font-bold text-[#91765A]">5 YEARS+ OF EXPERIENCE</h1>
                <p className="text-5xl font-bold tracking-wide leading-[55px]">Making people look <br /> awesome since 2020</p>
                <p className="leading-7 text-sm my-2 text-[#645F5A]">Come experience a unique and edgy barbershop for all your hair and beard needs. Vulputate ons amet ravida haretra nuam the drana miss uctus enec accumsan justo aliquam sit amet auctor orci done vitae risus duise nunc sapien.</p>
                <p className="text-sm mt-5 leading-7 text-[#645F5A]">Barber, Founder</p>
                <p className="text-sm text-[#91765A]">Abish Magar</p>
            </div>
        </div>
    )
}
