import { NavLinks } from "@/utils/navlinks";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="container mx-auto">
            <div className="relative z-50 text-white flex justify-between items-center py-7 px-60 border-b border-gray-50/10">
                <Link href="/" className="font-bold leading-3">
                    <h1 className="text-xl">BARBER</h1>
                    <p>SHOP</p>
                </Link>
                <div className="flex gap-10">
                    {
                        NavLinks.map((nav, index) => (
                            <Link href={nav.href} key={index}>
                                <ul className="font-bold text-xs hover:text-[#91765A] hover-transition">{nav.label}</ul>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
