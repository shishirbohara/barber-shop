import Image from "next/image";

export default function Home() {
    return (
        <main>
            <section className="relative h-screen">
                <div className="absolute inset-0">
                    <Image src='/images/hero.jpg' alt="image" width={3000} height={2000} className="w-full h-screen object-cover" />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative h-full pt-10 flex items-center justify-center text-center font-bold text-white">
                    <div className="container mx-auto px-4">
                        <p className="leading-10 text-sm tracking-wider">SHARP CUTS, SMOOTH STYLE</p>
                        <h1 className="text-6xl leading-[70px]">
                            TRANSFORMING LOOKS <br /> INSPIRING STYLE.
                        </h1>
                        <p className="leading-10 my-4 text-sm tracking-wider">
                            BHANIMANDAL ST. LTP. APPOINTMENT: 9812345678
                        </p>
                        <button
                            className="text-black bg-white px-4 py-4 rounded-sm hover:text-white hover:bg-[#91765A] hover-transition text-xs tracking-wider"
                        >
                            BOOK APPOINTMENT
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}