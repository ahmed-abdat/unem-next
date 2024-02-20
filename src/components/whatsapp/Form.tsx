"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BacNumber, TBacNumber } from "@/lib/validations/bac-number-validation";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import bac2023Admin from "@/constats/BAC2023VALID.json";
import { whatsaapGroups } from "@/constats/whatsaap-groups";
import { toast } from "sonner";


export default function WhatsappForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TBacNumber>({
    resolver: zodResolver(BacNumber),
  });

  const onSubmit = (data: TBacNumber) => {
    setLoading(true);
    const isAdmin = bac2023Admin.find(
      (student) => student.NODOSS === Number(data.bacNumber)
    );
    if (isAdmin) {
      window.open(whatsaapGroups[isAdmin.SERIE as keyof typeof whatsaapGroups]);
      setLoading(false);
      return;
    }
    setTimeout(() => {
      setLoading(false);
      toast.info("للأسف لايمكنكم الدخول, نتمنى لكم حظا أوفر في القادم", {
        style: {
          fontSize: "0.85rem",
        },
      });
    }, 500);
  };

  return (
    <form
      className={`w-full flex flex-col gap-4`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className={` text-center text-[1.35rem] text-whtssap-label font-tajawal font-medium`}>
        للانضمام إلى المجموعة الخاصة بشعبتكم يرجى إدخال رقم الباكلوريا
      </p>
      <div className="w-full flex flex-col gap-2">
        <Label
          htmlFor="bac"
          className="text-[1.3rem] font-medium font-tajawal text-gray-600"
        >
          رقم الباكلوريا
        </Label>
        <Input
          id="bac"
          type="text"
          placeholder="أدخل رقم الباكلوريا"
          {...register("bacNumber")}
          className={cn(
            {
              "focus-visible:ring-red-500": errors.bacNumber,
            },
            "bg-white font-rubik font-medium text-[1.4rem] placeholder:text-[1.1rem]  placeholder:font-rb py-5 placeholder-gray-400"
          )}
        />
        {errors.bacNumber?.message && (
          <p className="text-red-500 text-base font-medium  font-rb">
            {errors.bacNumber?.message}
          </p>
        )}
      </div>
      <Button
        disabled={loading}
        type="submit"
        className="font-tajawal font-medium shadow-btne cursor-pointer text-white text-lg  bg-btn hover:bg-btn px-[15px] py-[1.65rem] rounded-lg disabled:opacity-[0.7] disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-disabeld-btn active:shadow-none active:transform active:translate-x-0 active:translate-y-1 transition-all"
      >
        إنضمام
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      </Button>
    </form>
  );
}
