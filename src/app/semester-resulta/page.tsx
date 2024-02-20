import Form from "@/components/semster/Form";
import HeaderImage from "@/components/HeaderImage";
import FooterImage from "@/components/FooterImage";

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
