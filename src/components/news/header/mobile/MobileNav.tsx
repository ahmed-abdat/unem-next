"use client";

// import { PRODUCT_CATEGORIES } from "@/config";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { navLinks } from "@/constats/news/nav-links";
import { MenuLinks } from "@/constats/news/menu-nav-links-accademic";
import { newsMenuLinks } from "@/constats/news/menu-nav-links-institions";
import MobileNavUser from "./MobileNavUser";
import NavButton from "../NavButton";
import { MobileMenu } from "./MobileMenu";
import {Separator} from '@/components/ui/separator'

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(navRef, () => setIsOpen(false));

  const pathname = usePathname();

  // whenever we click an item in the menu and navigate away, we want to close the menu
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // when we click the path we are currently on, we still want the mobile menu to close,
  // however we cant rely on the pathname for it because that won't change (we're already there)
  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      setIsOpen(false);
    }
  };

  // remove second scrollbar when mobile menu is open
  useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  if (!isOpen)
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="cursor-pointer relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-900"
        aria-label="Open menu"
      >
        <Menu className="h-8 w-8" aria-hidden="true" />
      </button>
    );

  return (
    <div>
      <div className="relative z-40 lg:hidden">
        <div className="fixed inset-0 bg-black bg-opacity-25" />
      </div>

      <div className="fixed overflow-y-scroll overscroll-y-none inset-0 z-40 flex">
        <div className="w-full sm:min-w-sm flex">
          <div
            className="relative flex w-full max-w-full md:max-w-sm flex-col overflow-y-auto bg-white pb-12 shadow-xl"
            ref={navRef}
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="close"
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-2">
              <ul className="flex flex-col gap-y-2">
                {navLinks.map((navLink) => (
                  <li
                    className="w-full flex items-center justify-center"
                    key={navLink.title}
                  >
                    <NavButton navLink={navLink} className="w-[90%]" />
                  </li>
                ))}
              </ul>
              <Separator className='my-2 w-[90%] mx-auto' />
              <div className="flex items-center justify-center w-full">
              <MobileMenu navMenu={MenuLinks} >
                الشؤون الأكاديمية
              </MobileMenu>
              </div>
              <div className="flex items-center justify-center w-full mb-4">
              <MobileMenu navMenu={newsMenuLinks} mainRoute="institutions">
                مؤسسات التعليم العالي
              </MobileMenu>
              </div>
              <MobileNavUser closeOnCurrent={closeOnCurrent} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
