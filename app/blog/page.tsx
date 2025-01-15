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

export default function Blog() {
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
        <div className="absolute inset-5 flex items-center justify-center">
          <div className="text-white text-center">
            <h1 className="font-bold my-5">BLOGS</h1>
            <p className="text-5xl font-bold">Discover Blogs</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-52 py-12">
        {blogData.map((post) => (
          <Card
            key={post.id}
            className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-64 w-full">
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
                <span className="text-sm text-muted-foreground">
                  {post.date}
                </span>
                <span className="px-3 py-2 bg-[#91765A] text-white rounded-full text-xs">
                  {post.category}
                </span>
              </div>
              <CardTitle className="leading-9 cursor-pointer">
                {post.title}
              </CardTitle>
              <CardDescription className="line-clamp-3">
                {post.excerpt}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <button className="font-medium text-[#91765A] hover:text-[#91765A]/60 hover-transition">
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
