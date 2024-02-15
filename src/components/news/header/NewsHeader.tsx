import Image from "next/image";
import { NavigationMenue } from "@/components/news/header/NewsMenu";
import { Button } from "@/components/ui/button";
import { MenuLinks } from "@/constats/news/menu-nav-links-accademic";
import { newsMenuLinks } from "@/constats/news/menu-nav-links-institions";
import { navLinks } from "@/constats/news/nav-links";
import { CircleUserRound } from "lucide-react";
// import { tajawal } from "@/app/layout";
import NavButton from "@/components/news/header/NavButton";
import Logo from "../../../../public/logo.png";
import { Menu } from "lucide-react";
import Link from "next/link";
import MobileNav from "@/components/news/header/mobile/MobileNav";

export default function NewsHeader() {
  return (
    <header
      className={` max-h-[60px] h-full sticky z-50 top-0 flex items-center gap-4 w-full p-4 bg-white justify-between`}
    >
      <Link href={"/"} aria-label="logo image" className='flex items-center justify-center'>
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
          <NavButton navLink={navLink} key={navLink.title} className="font-tajawal font-medium text-base" />
        ))}

        <NavigationMenue navMenu={MenuLinks} isAccademic>
          الشؤون الأكاديمية
        </NavigationMenue>
        <NavigationMenue navMenu={newsMenuLinks} mainRoute="institutions">
          مؤسسات التعليم العالي
        </NavigationMenue>
      </div>
      <Button
        className="font-rb py-5 hidden lg:flex"
        aria-label="login"
        asChild
      >
        <Link href="/login">تسجيل الدخول</Link>
      </Button>
      <div className="flex items-center gap-x-4 lg:hidden">
        <Link href="/login">
          <CircleUserRound className="w-8 h-8 cursor-pointer" />
        </Link>
        <MobileNav />
      </div>
    </header>
  );
}
