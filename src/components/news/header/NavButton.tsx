import { NewsnavLink } from "@/types/news-navbar";
import {  Button } from "@/components/ui/button";
import Link from "next/link";

export default function NavButton({ navLink , className}: { navLink: NewsnavLink , className?: string}) {
  return (
    <Button asChild variant={"ghost"} className="hover:bg-btn hover:text-white transition-all duration-75" aria-label={navLink.href}>
      <Link href={navLink.href} className={className}>{navLink.title}</Link>
    </Button>
  );
}
