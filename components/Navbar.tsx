import { NavLinks } from "@/utils/navlinks";
import { Scissors } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 text-white py-4 px-52 border-b border-gray-50/10">
            <div className="container mx-auto px-4 py-5">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <Scissors className="h-6 w-6" />
                        <span className="text-2xl font-bold">BARBER SHOP</span>
                    </Link>
                    <div className="flex gap-10">
                        {
                            NavLinks.map((nav, index) => (
                                <Link key={index} href={nav.href} className="font-bold text-xs hover:text-[#91765A] hover-transition">{nav.label}</Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
}