import React from "react";
import { Card, CardBody, Avatar } from "@heroui/react";

const testimonials = [
  {
    name: "Егор М.",
    avatar: "",
    text: "Очень удобное приложение! Теперь я всегда бронирую столик в ресторане заранее и не трачу время на ожидание.",
    role: "Постоянный пользователь"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#333450]">
            Отзывы пользователей
          </h2>
          <p className="max-w-[600px] text-zinc-700 md:text-xl">
            Узнайте, что говорят о нашем приложении те, кто уже им пользуется
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border border-[#33345015] shadow-sm"
              disableRipple
            >
              <CardBody className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-[#333450]">{testimonial.name}</h3>
                    <p className="text-sm text-zinc-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-zinc-700 italic">"{testimonial.text}"</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};