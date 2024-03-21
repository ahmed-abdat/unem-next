import Form from "@/components/fst-result/Form";
import HeaderImage from "@/components/HeaderImage";
import FooterImage from "@/components/FooterImage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "نتائج امتحانات كلية العلوم و التقنيات 2024-2023",
  description: "الاتحاد الوطني لطلبة موريتانيا - نتائج امتحانات كلية العلوم و التقنيات 2024-2023",
};

export default async function SemsterPage() {
  return (
    <>
      <HeaderImage picture="/iseri-result.png" />
      <section className="flex items-center h-full text-gray-800 flex-col py-8 px-2 min-h-[68dvh] md:min-h-[55dvh] ">
        <Form />
      </section>
      <FooterImage />
    </>
  );
}
