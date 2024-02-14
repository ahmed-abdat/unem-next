"use client";

import { useState } from "react";
import FormeImage from "@/components/FooterImage";
import HeaderImage from "@/components/HeaderImage";
import { MatiersOptions } from "@/components/calculat-moyen/MatieresOptions";
import Form from "@/components/calculat-moyen/Form";
import { Label } from "../ui/label";

export default function Calculation() {
  const [option, setOption] = useState({
    value: "العلوم الطبيعية",
    label: "العلوم الطبيعية",
  });

  

  return (
    <>
      <HeaderImage picture={"/01.png"} />

      <section className="flex items-center h-full text-gray-800 flex-col py-8 px-2 max-h-dvh ">
        <div className="flex flex-col gap-4 p-0 min-w-[95%] sm:min-w-[70%] md:min-w-[55%] lg:min-w-[40%] ">
          <div className=" flex flex-col gap-y-4 items-center justify-center">
            <div className="w-full flex flex-col gap-x-2 text-gray-800 ">
              <Label className="text-2xl font-semibold">اختر شعبتك </Label>
              <MatiersOptions value={option.value} setValue={setOption} />
              {
                  !option.value && <div className="w-full min-h-[45dvh] pt-10 px-2 text-center sm:min-h-[22dvh]">
                    <h3 className="font-tajawal font-medium text-xl text-primary-color sm:text-2xl">قم بإختيار شعبتك أولا لحساب معدلك التوجيهي</h3>
                  </div>
                }
            </div>
            <Form option={option.label} />
          </div>
        </div>
      </section>
      <FormeImage />
    </>
  );
}
