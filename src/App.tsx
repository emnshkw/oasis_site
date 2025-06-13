import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image, Spacer, ToastProvider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Hero } from "./components/hero";
import { Features } from "./components/features";
import { AppScreenshots } from "./components/app-screenshots";
import { Testimonials } from "./components/testimonials";
import { BusinessForm } from "./components/business-form";
import { Footer } from "./components/footer";
import { SectionDivider } from "./components/section-divider";

export default function App() {
  return (
    <ToastProvider>
      <div className="min-h-screen bg-white">
        <Navbar maxWidth="xl" className="bg-white border-b border-[#33345015]">
          <NavbarBrand>
            <Image
              alt="Оазис бронирования"
              src="/logo.png"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <p className="font-bold text-[#333450] ml-2">Оазис бронирования</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link color="foreground" href="#features" className="text-[#333450]">
                Возможности
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#screenshots" className="text-[#333450]">
                Скриншоты
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#testimonials" className="text-[#333450]">
                Отзывы
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem>
              <Button 
                as={Link} 
                href="#download" 
                variant="solid" 
                className="bg-[#333450] text-white"
              >
                Скачать
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>

        <main>
          <Hero />
          <Features />
          <AppScreenshots />
          <Testimonials />
          <BusinessForm />
        </main>

        <Footer />
      </div>
    </ToastProvider>
  );
}