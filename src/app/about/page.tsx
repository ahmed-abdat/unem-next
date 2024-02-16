import FullImages from "@/components/FullImage";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: " عن الاتحاد",
  description: " عن الاتحاد",
};
export default function About() {
  return (
  <FullImages src="/about.jpg" />
  );
}
