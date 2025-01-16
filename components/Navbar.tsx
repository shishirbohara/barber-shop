"use client";

import { NavLinks } from "@/utils/navlinks";
import { Scissors, Menu, X } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    const menu = menuRef.current;

    if (!isMenuOpen) {
      gsap.fromTo(
        menu,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    } else {
      gsap.to(menu, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "power3.in",
        onComplete: () => setIsMenuOpen(false),
      });
      return;
    }

    setIsMenuOpen(true);
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 text-white py-4 px-4 md:px-8 lg:px-52 border-b border-gray-50/10 transition-colors"
    >
      <div className="container mx-auto py-2 md:py-5">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
          >
            <Scissors className="h-6 w-6" />
            <span className="text-xl md:text-2xl font-bold">BARBER SHOP</span>
          </Link>
          <div className="hidden md:flex gap-6 lg:gap-10">
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
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <div
        ref={menuRef}
        className={`md:hidden bg-black bg-opacity-95 absolute top-full left-0 right-0 py-4 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {NavLinks.map((nav, index) => (
          <Link
            key={index}
            href={nav.href}
            className="block px-4 py-2 text-center font-bold text-sm leading-7 hover:text-[#91765A] transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            {nav.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
