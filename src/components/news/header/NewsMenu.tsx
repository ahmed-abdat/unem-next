import React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NewsMenuLink } from "@/types/news-navbar";

export function NavigationMenue({
  children,
  navMenu,
  mainRoute,
  isAccademic
}: {
  children: React.ReactNode;
  navMenu: NewsMenuLink[];
  mainRoute?: string;
  isAccademic?: boolean;
}) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-tajawal">{children}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className={cn({
              'grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]' : !isAccademic,
              'flex flex-col gap-y-4 md:w-[200px] lg:w-[300px]' : isAccademic
            })} dir="rtl">
              {navMenu.map((navItem) => (
                <ListItem
                
                  key={navItem.title}
                  title={navItem.title}
                  href={mainRoute ? `${mainRoute}/${navItem.href}` : navItem.href}
                >
                  {navItem.description ? navItem.description : ""}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
