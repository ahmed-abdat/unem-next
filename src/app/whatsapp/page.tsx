import HeaderImage from "@/components/HeaderImage";
import FooterImage from "@/components/FooterImage";
import WhatsappForm from "@/components/whatsapp/Form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "المجموعات الواتسابية (باكلوريا)",
  description: "الاتحاد الوطني لطلبة موريتانيا - المجموعات الواتسابية (باكلوريا)",
};


export default function Whatsapp() {
  return (
    <>
      <HeaderImage picture="/04.jpeg" />
      <section className="flex items-center h-full text-gray-800 flex-col py-8 px-2 min-h-[68dvh] md:min-h-[55dvh] ">
        <div className="flex flex-col gap-4 p-0 min-w-[95%] sm:min-w-[70%] md:min-w-[55%] lg:min-w-[40%] ">
          <WhatsappForm />
        </div>
      </section>
      <FooterImage />
    </>
  );
}
