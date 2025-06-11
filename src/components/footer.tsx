import React from "react";
import { Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { DownloadButtons } from "./download-buttons";

export const Footer = () => {
  return (
    <footer className="w-full py-12 bg-[#333450] text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-4">
            {/* <div className="flex items-center">
              <Icon icon="/logo.png" className="text-white text-2xl" /> */}
              <span className="font-bold ml-2 text-xl">Оазис бронирования</span>
            {/* </div> */}
            <p className="text-zinc-300">
              Удобное приложение для бронирования мест в ресторанах, барах, салонах красоты и автомойках
            </p>
            <div className="flex space-x-4 mt-4">
              {/* <Link href="#" aria-label="Facebook">
                <Icon icon="lucide:facebook" className="text-white text-xl" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Icon icon="lucide:instagram" className="text-white text-xl" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Icon icon="lucide:twitter" className="text-white text-xl" />
              </Link> */}
              <Link href="https://t.me/SovTehBron" aria-label="Telegram">
                <Icon icon="lucide:send" className="text-white text-xl" />
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Ссылки</h3>
            <Link href="#features" color="foreground" className="text-zinc-300 hover:text-white">
              Возможности
            </Link>
            <Link href="#screenshots" color="foreground" className="text-zinc-300 hover:text-white">
              Скриншоты
            </Link>
            <Link href="#testimonials" color="foreground" className="text-zinc-300 hover:text-white">
              Отзывы
            </Link>
            <Link href="#" color="foreground" className="text-zinc-300 hover:text-white">
              Политика конфиденциальности
            </Link>
            <Link href="#" color="foreground" className="text-zinc-300 hover:text-white">
              Условия использования
            </Link>
          </div>
          
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Скачать приложение</h3>
            <p className="text-zinc-300">
              Доступно для iOS и Android. Скачайте прямо сейчас!
            </p>
            <div className="mt-4">
              <DownloadButtons />
            </div>
          </div>
        </div>
        
        <div className="border-t border-zinc-700 mt-12 pt-6 text-center text-zinc-400">
          <p>© {new Date().getFullYear()} Оазис бронирования. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};