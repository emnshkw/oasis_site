import React from "react";
import { Card, CardBody, Input, Select, SelectItem, Button, Form } from "@heroui/react";

export const BusinessForm = () => {
  const [email, setEmail] = React.useState("");
  const [businessName, setBusinessName] = React.useState("");
  const [businessType, setBusinessType] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log({ email, businessName, businessType, phone });
    // Reset form fields
    setEmail("");
    setBusinessName("");
    setBusinessType("");
    setPhone("");
    // You might want to show a success message to the user here
  };

  return (
    <section id="business-form" className="w-full py-12 md:py-24 bg-[#33345005]">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#333450]">
            Добавьте свое заведение
          </h2>
          <p className="max-w-[600px] text-zinc-700 md:text-xl">
            Хотите, чтобы ваше заведение было в нашем приложении? Заполните форму, и мы свяжемся с вами!
          </p>
        </div>

        <Card className="max-w-md mx-auto">
          <CardBody>
            <Form onSubmit={handleSubmit} className="space-y-4">
              <Input
                isRequired
                label="Email"
                placeholder="your@email.com"
                type="email"
                value={email}
                onValueChange={setEmail}
              />
              <Input
                isRequired
                label="Название заведения"
                placeholder="Ваше заведение"
                value={businessName}
                onValueChange={setBusinessName}
              />
              <Select
                isRequired
                label="Тип заведения"
                placeholder="Выберите тип заведения"
                value={businessType}
                onSelectionChange={(keys) => setBusinessType(Array.from(keys)[0] as string)}
              >
                <SelectItem key="restaurant" value="restaurant">Ресторан</SelectItem>
                <SelectItem key="bar" value="bar">Бар</SelectItem>
                <SelectItem key="carwash" value="carwash">Автомойка</SelectItem>
                <SelectItem key="beautysalon" value="beautysalon">Салон красоты</SelectItem>
                <SelectItem key="other" value="other">Прочее</SelectItem>
              </Select>
              <Input
                isRequired
                label="Номер телефона"
                placeholder="+7 (999) 123-45-67"
                type="tel"
                value={phone}
                onValueChange={setPhone}
              />
              <Button type="submit" color="primary" className="w-full">
                Отправить заявку
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};