import React from "react";
import { Image } from "@heroui/react";

const screenshots = [
  {
    src: "/login-screen.png",
    alt: "Главный экран приложения"
  },
  {
    src: "/reserve.jpg",
    alt: "Экран бронирования"
  },
  {
    src: "/profile.png",
    alt: "Профиль пользователя"
  },
  {
    src: "/places.jpg",
    alt: "Список заведений"
  }
];

export const AppScreenshots = () => {
  return (
    <section id="screenshots" className="w-full py-12 md:py-24 bg-[#33345005]">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#333450]">
            Скриншоты приложения
          </h2>
          <p className="max-w-[600px] text-zinc-700 md:text-xl">
            Ознакомьтесь с интерфейсом нашего приложения и его основными функциями
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-12 md:gap-8">
          <div className="flex flex-wrap justify-center gap-12">
            {screenshots.map((screenshot, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center mx-auto"
              >
                <div className="w-[240px] h-[480px] md:w-[280px] md:h-[560px] rounded-[24px] overflow-hidden border-4 border-[#333450] shadow-lg">
                  <Image
                    removeWrapper
                    alt={screenshot.alt}
                    className="w-full h-full object-cover"
                    src={screenshot.src}
                  />
                </div>
                <p className="text-center mt-4 text-zinc-700 max-w-[240px] md:max-w-[280px]">{screenshot.alt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};