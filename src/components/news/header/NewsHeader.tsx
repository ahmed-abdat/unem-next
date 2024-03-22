import Image from "next/image";
import { NavigationMenue } from "@/components/news/header/NewsMenu";
import { Button } from "@/components/ui/button";
import { MenuLinks } from "@/constats/news/menu-nav-links-accademic";
import { newsMenuLinks } from "@/constats/news/menu-nav-links-institions";
import {ResultaLink} from '@/constats/news/resulta'
import { navLinks } from "@/constats/news/nav-links";
import { CircleUserRound } from "lucide-react";
// import { tajawal } from "@/app/layout";
import NavButton from "@/components/news/header/NavButton";
import Logo from "../../../../public/logo.png";
import { Menu } from "lucide-react";
import Link from "next/link";
import MobileNav from "@/components/news/header/mobile/MobileNav";

export default function NewsHeader() {
  const aboutLink = {
    title: "من نحن",
    href: "/about",
  };
  // sticky z-50 top-0 
  return (
    <header className="max-h-[60px] sticky z-50 top-0 h-full flex items-center gap-4 w-full p-4 bg-primary-color text-white justify-between">
      <Link
        href="/"
        aria-label="logo image"
        className="flex items-center justify-center"
      >
        <Image
          src={Logo}
          placeholder="blur"
          alt="logo"
          width={60}
          height={60}
          className="cursor-pointer"
        />
      </Link>
      <div className="items-center justify-start gap-2 w-full hidden lg:flex">
        {navLinks.map((navLink) => (
          <NavButton
            navLink={navLink}
            key={navLink.title}
            className="font-tajawal font-medium text-base"
          />
        ))}

        <NavigationMenue navMenu={MenuLinks} isAccademic>
          الشؤون الأكاديمية
        </NavigationMenue>
        <NavigationMenue navMenu={newsMenuLinks} mainRoute="institutions">
          مؤسسات التعليم العالي
        </NavigationMenue>
        <NavigationMenue navMenu={ResultaLink} isAccademic>
          نتائج الامتحانات
        </NavigationMenue>
        <NavButton
          navLink={aboutLink}
          className="font-tajawal font-medium text-base"
        />
      </div>
      <Button
        className="font-rb py-5 hidden lg:flex bg-disabeld-btn text-white hover:bg-btn-hover hover:text-white transition-all duration-75"
        aria-label="login"
        asChild
      >
        <Link href="#">تسجيل الدخول</Link>
      </Button>
      <div className="flex items-center gap-x-4 lg:hidden">
        <Link href="#" aria-label="login">
          <CircleUserRound className="w-8 h-8 cursor-pointer text-gray-100" />
        </Link>
        <MobileNav />
      </div>
    </header>
  );
}
