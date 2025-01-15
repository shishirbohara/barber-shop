"use client";

import { NavLinks } from "@/utils/navlinks";
import { Scissors } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
    const navRef = useRef(null);

    useGSAP(() => {
        const navbar = navRef.current;
        gsap.set(navbar, {
            backgroundColor: "transparent",
            backdropFilter: "blur(0px)",
        });

        gsap.to(navbar, {
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "+=100",
                scrub: true,
            },
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(10px)",
            duration: 0.9,
        });

        gsap.from(navbar, {
            y: -100,
            opacity: 0,
            duration: 2,
            ease: "power3.out",
        });
    }, []);

    return (
        <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 text-white py-4 px-52 border-b border-gray-50/10 transition-colors">
            <div className="container mx-auto px-4 py-5">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
                        <Scissors className="h-6 w-6" />
                        <span className="text-2xl font-bold">BARBER SHOP</span>
                    </Link>
                    <div className="flex gap-10">
                        {NavLinks.map((nav, index) => (
                            <Link
                                key={index}
                                href={nav.href}
                                className="font-bold text-xs hover:text-[#91765A] transition-colors duration-300 relative group"
                            >
                                {nav.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#91765A] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}