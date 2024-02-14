import { NewsnavLink } from "@/types/news-navbar";
import {  Button } from "@/components/ui/button";
import Link from "next/link";

export default function NavButton({ navLink , className}: { navLink: NewsnavLink , className?: string}) {
  return (
    <Button asChild variant={"ghost"}>
      <Link href={navLink.href} className={className}>{navLink.title}</Link>
    </Button>
  );
}
