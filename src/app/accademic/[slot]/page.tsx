import React from "react";
import { license } from "@/constats/accademics/license";
import { articles } from "@/constats/accademics/postes";
// import LocalPoste from '@/components/news/poste/LoacalPoste'
import LocalPostes from "@/components/accademics/LocalPostes";
import { Separator } from "@/components/ui/separator";
import { Aljazira } from "@/app/font/font";

export default async function Poste({ params }: { params: { slot: string } }) {
  const slot = params.slot;

  if (slot === "license") {
    return (
      <section
        className={`${Aljazira.className} flex items-center gap-x-4 pt-0 flex-col bg-white sm:pt-3 md:pt-4`}
      >
        <LocalPostes postes={license} path="license" />
        <Separator />
      </section>
    );
  } else if (slot === "articles") {
    return (
      <section
        className={`${Aljazira.className} flex items-center gap-x-4 pt-0 flex-col bg-white sm:pt-3 md:pt-4`}
      >
        <LocalPostes postes={articles} path="articles" />
        <Separator />
      </section>
    );
  }

  return (
    <section
      className={`${Aljazira.className} flex items-center justify-center gap-x-4 pt-0 h-[60dvh] flex-col bg-white sm:pt-3 md:pt-4`}
    >
      <h1 className="font-aljazira text-3xl font-bold text-gray-600">
        لا يوجد محتوى متاح الآن. نعمل على إضافة محتوى جديد قريبًا.
      </h1>
    </section>
  );

  // return  <Postes id={params.posteId} poste={poste} />
}
