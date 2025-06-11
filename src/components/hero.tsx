import React from "react";
import { Button, Image } from "@heroui/react";
import { Icon } from "@iconify/react";
import { DownloadButtons } from "./download-buttons";

export const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-[#33345008]">
      <div className="container px-4 md:px-6 mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
        <div className="flex flex-col justify-center space-y-4 lg:space-y-6 lg:w-1/2 text-center lg:text-left">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-[#333450]" id="downloadLink">
              Оазис бронирования
            </h1>
            <p className="mx-auto lg:mx-0 max-w-[600px] text-zinc-700 md:text-xl mt-4">
              Удобное приложение для бронирования мест в ресторанах, барах, салонах красоты и автомойках в вашем городе
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8">
            <DownloadButtons />
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-[280px] h-[560px] md:w-[320px] md:h-[640px]">
            <div className="absolute inset-0 bg-[#333450] rounded-[40px] shadow-xl transform rotate-6"></div>
            <div className="absolute inset-0 bg-white rounded-[40px] shadow-lg overflow-hidden border-4 border-[#333450]">
              <Image
                removeWrapper
                alt="Оазис бронирования приложение"
                className="w-full h-full object-cover"
                src="/login-screen.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};