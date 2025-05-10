import React from "react";
import { Button } from "../button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className=" pb-6 relative min-h-[600px] w-full overflow-hidden bg-gradient-to-br from-purple-600 via-indigo-950 to-indigo-950 ">
      {/* Dradient Overlay*/}
      <div className="absolute inset-0 before:absolute before:left-1/4 before:top-0 before:h-[500px] before:w-[500px] before:rounded-full before:bg-gradient-to-r before:from-violet-600/20 before:to-indigo-600/20 before:blur-3xl"></div>
      <div className="container relative mx-auto flex h-full flex-col item-center justify-center px-4 py-24 md:flex-row md:py-32">
        <div className="flex-1 space-y-8 text-center md:text-left">
          <h1 className="text-white font-bold text-4xl tracking-tight sm:text-5xl md:text-6xl">
            Explore the World Through
            <span className="ml-2 bg-gradient-to-r from-violet-400 bg-clip-text text-transparent">
              Words
            </span>
          </h1>
          <p className="mx-auto text-gray-300 font-semibold max-w-2xl text-lg tracking-tight  md:text-xl ">
            Discover insightfull articles,thought-provoking stories and expert
            perspective on technology,lifestyle and innovation
          </p>
          <div className="flex flex-col items-center gap-8 sm:flex-row md:justify-start ">
            <Button variant={"outline"} className="rounded-full text-md p-4">
              Start Reading
            </Button>
            <Button variant={"outline"} className="rounded-full text-md p-4">
              Explore Topics
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-8 text-white md:mx-w-md">
            <div className="space-y-2">
              <div className="text-2xl font-bold ">1k+</div>
              <div className="text-sm text-gray-400">Published articles</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold ">50+</div>
              <div className="text-sm text-gray-400">Expert Writer</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold ">1k+</div>
              <div className="text-sm text-gray-400">Monthly readers</div>
            </div>
          </div>
        </div>
      </div>
      {/* Background Image */}
      <div className="mt-12 flex-1 md:mt-0">
        <div
          className={cn(
            "relative mx-auto w-64 h-64 rounded-2xl overflow-hidden",
            "bg-gradient-to-br from-white/5 to-transparent",
            "border  backdrop-blur-lg",
            "shadow-2xl shadow-indigo-500"
          )}
        >
          <Image
            src="https://th.bing.com/th/id/OIP.JDCRfi6RI-zn8LXTn53u8QHaE7?cb=iwp2&rs=1&pid=ImgDetMain"
            alt="heroimage"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
