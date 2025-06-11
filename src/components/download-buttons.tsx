import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const DownloadButtons = () => {
  return (
    <div id="download" className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
      <Button
        size="lg"
        className="bg-[#333450] text-white flex items-center gap-2 px-6"
        startContent={<Icon icon="logos:apple" className="text-xl" />}
      >
        <div className="flex flex-col items-start">
          <span className="text-xs">Скачать в</span>
          <span className="font-semibold">App Store</span>
        </div>
      </Button>
      
      <Button
        size="lg"
        className="bg-[#333450] text-white flex items-center gap-2 px-6"
        startContent={<Icon icon="logos:google-play-icon" className="text-xl" />}
      >
        <div className="flex flex-col items-start">
          <span className="text-xs">Доступно в</span>
          <span className="font-semibold">Google Play</span>
        </div>
      </Button>
      
      <Button
        size="lg"
        className="bg-[#333450] text-white flex items-center gap-2 px-6"
        startContent={<Icon icon="lucide:download" className="text-xl" />}
      >
        <div className="flex flex-col items-start">
          <span className="text-xs">Скачать в</span>
          <span className="font-semibold">RuStore</span>
        </div>
      </Button>
    </div>
  );
};