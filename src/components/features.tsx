import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

const features = [
  {
    icon: "lucide:utensils",
    title: "Рестораны и бары",
    description: "Бронируйте столики в лучших ресторанах и барах города за несколько кликов"
  },
  {
    icon: "lucide:scissors",
    title: "Салоны красоты",
    description: "Записывайтесь к мастерам в удобное для вас время без звонков и ожидания"
  },
  {
    icon: "lucide:car",
    title: "Автомойки",
    description: "Выбирайте свободное время для мойки вашего автомобиля и избегайте очередей"
  },
  {
    icon: "lucide:calendar",
    title: "Удобное расписание",
    description: "Просматривайте свои предстоящие и прошлые бронирования в одном месте"
  },
  {
    icon: "lucide:bell",
    title: "Уведомления",
    description: "Получайте напоминания о предстоящих бронированиях и специальных предложениях"
  },
  {
    icon: "lucide:star",
    title: "Отзывы и рейтинги",
    description: "Оставляйте отзывы о посещенных местах и помогайте другим пользователям"
  }
];

export const Features = () => {
  return (
    <section id="features" className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#333450]">
            Возможности приложения
          </h2>
          <p className="max-w-[600px] text-zinc-700 md:text-xl">
            Откройте для себя все преимущества использования нашего приложения для бронирования
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border border-[#33345015] shadow-sm hover:shadow-md transition-shadow"
              disableRipple
            >
              <CardBody className="flex flex-col items-center text-center p-6">
                <div className="p-3 rounded-full bg-[#33345010] mb-4">
                  <Icon icon={feature.icon} className="text-[#333450] text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-[#333450] mb-2">{feature.title}</h3>
                <p className="text-zinc-700">{feature.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};