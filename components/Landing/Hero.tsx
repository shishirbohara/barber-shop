import Image from "next/image";

export default function Hero() {
    return (
        <div>
            <Image src='/images/hero.jpg' width={3000} height={2000} alt="hero-img"
                className="absolute top-0 w-full h-[720px] object-cover" />
            <div className="absolute top-0 w-full h-[720px] bg-gradient-to-r from-black/40 via-black/50 to-black/40"></div>
            <div className="absolute text-white flex flex-col items-center justify-center top-1/3 w-full font-bold text-center">
                <p className="leading-10 text-sm tracking-wider">STAY SHARP, LOOK GOOD</p>
                <h1 className="text-6xl leading-[70px]">NEPAL'S FAVOURITE <br /> BARBER SHOP.</h1>
                <p className="leading-10 my-4 text-sm tracking-wider">BHANIMANDAL ST, LTP. APPOINTMENT: 9812345678</p>
                <button className="text-black bg-white px-4 py-4 rounded-sm hover:text-white hover:bg-[#91765A] hover-transition text-xs tracking-wider">BOOK APPOINTMENT</button>
            </div>
        </div>
    )
}
