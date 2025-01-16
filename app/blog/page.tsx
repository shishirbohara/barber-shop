"use client";
import Appointment from "@/components/Landing/Appointment";
import { blogData } from "@/utils/blogData";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { setupScrollTrigger } from "@/gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Blog() {
  const imagesRef = useRef<HTMLDivElement>(null!);
  const headingRef = useRef<HTMLDivElement>(null!);

  useGSAP(() => {
    setupScrollTrigger({
      imagesRef,
      headingRef,
    });
  }, []);
  return (
    <>
      <div className="relative">
        <Image
          src={"/images/blogs.jpg"}
          alt="about_img"
          width={1000}
          height={1000}
          className="w-full h-[60vh] object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/40"></div>
        <div
          ref={headingRef}
          className="absolute inset-5 flex items-center justify-center"
        >
          <div className="text-white text-center">
            <h1 className="font-bold my-3 lg:my-5">BLOGS</h1>
            <p className="lg:text-5xl text-3xl font-bold">Discover Blogs</p>
          </div>
        </div>
      </div>

      <div
        ref={imagesRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:px-52 lg:px-10 lg:py-12 py-5 px-2"
      >
        {blogData.map((post) => (
          <Card
            key={post.id}
            className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative md:h-64 h-52 w-full">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <span className="md:text-sm text-xs text-muted-foreground">
                  {post.date}
                </span>
                <span className="md:px-3 px-1.5 md:py-2 py-1 bg-[#91765A] text-white rounded-full text-xs">
                  {post.category}
                </span>
              </div>
              <CardTitle className="lg:leading-9 text-lg md:text-2xl leading-6 cursor-pointer">
                {post.title}
              </CardTitle>
              <CardDescription className="line-clamp-3 text-xs md:text-sm">
                {post.excerpt}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <button className="font-medium text-sm md:text-base text-[#91765A] hover:text-[#91765A]/60 hover-transition">
                Read More →
              </button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Appointment />
    </>
  );
}
