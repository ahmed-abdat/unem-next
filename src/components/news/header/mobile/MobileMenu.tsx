import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { NewsMenuLink } from "@/types/news-navbar";
import Link from "next/link";

export function MobileMenu({
  children,
  navMenu,
  mainRoute,
}: {
  children: React.ReactNode;
  navMenu: NewsMenuLink[];
  mainRoute?: string;
}) {
  return (
    <Accordion type="single" collapsible className="w-[90%]">
     
      <AccordionItem value={mainRoute ? mainRoute : 'item'}>
        <AccordionTrigger>{children}</AccordionTrigger>
        <AccordionContent>
          <div className='flex flex-col gap-y-2'>
          {
            navMenu.map((navItem) => {
              return (
                <Button asChild variant={"ghost"} key={navItem.title} aria-label={navItem.title}>
                  <Link href={mainRoute ? `${mainRoute}/${navItem.href}` : navItem.href}>
                    {navItem.title}
                  </Link>
                </Button>
              )
            })
          }
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
