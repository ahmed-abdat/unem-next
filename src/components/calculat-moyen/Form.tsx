"use client";

import {
  TMoyenCalculation,
  MoyenCalculation,
} from "@/lib/validations/moyen-calculations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { placeHolders } from "@/constats/calculations-moyen/matires-options";
import {  Loader2 } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";
import { calculateMoyen } from "@/lib/calculate-moyen";
import DialogResulta from "@/components/calculat-moyen/DialogResulta";

export default function Form({ option }: { option: string }) {
  const [loading, setLoading] = useState(false);
  const [moyenGenerale, setMoyenGenerale] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);


  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<TMoyenCalculation>({
    resolver: zodResolver(MoyenCalculation),
  });

  const onSubmit = (data: TMoyenCalculation) => {
    const { FirsteMatiere, SecondMatiere, ThirdeMatiere, MoyenGenerale } = data;
    
    if (
      FirsteMatiere === "" ||
      SecondMatiere === "" ||
      ThirdeMatiere === "" ||
      MoyenGenerale === ""
      )
      return;
    setLoading(true);
    setTimeout(() => {
      const MoyenGenerale = calculateMoyen(
        data.FirsteMatiere,
        data.SecondMatiere,
        data.ThirdeMatiere,
        data.MoyenGenerale
        );
        setMoyenGenerale(MoyenGenerale);
        setLoading(false);
        setIsOpen(true);
      }, 500);
    };
    
    useMemo(() => {
      setMoyenGenerale(null);
      reset()
    }, [reset]);


  return (
    <div className=" w-full flex flex-col gap-4">
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="w-full flex flex-col gap-4">
          {placeHolders[option]?.map((item) => (
            <div key={item.id} className="flex flex-col gap-y-2">
              <Label
                htmlFor={item.id}
                className="text-[1.25rem] font-semibold font-rb text-gray-600"
              >
                {item.label}
              </Label>
              <Input
                type="text"
                id={item.id}
                placeholder={item.placeholder}
                {...register(item.id)}
                className={cn(
                  {
                    "focus-visible:ring-red-500": errors[item.id],
                  },
                  "bg-white font-robo font-medium text-[1.1rem] placeholder:font-rb py-5 placeholder-gray-400"
                )}
              />
              {errors[item.id]?.message && (
                <p className="text-red-500 text-sm font-rb">
                  {errors[item.id]?.message}
                </p>
              )}
            </div>
          ))}

          <Button
            disabled={loading}
            type="submit"
            className="font-tajawal font-medium shadow-btne cursor-pointer text-white text-lg  bg-btn hover:bg-btn px-[15px] py-[1.65rem] rounded-lg disabled:opacity-[0.7] disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-disabeld-btn active:shadow-none active:transform active:translate-x-0 active:translate-y-1 transition-all"
          >
            حساب المعدل
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          </Button>
          <DialogResulta
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            moyenGenerale={moyenGenerale}
          />
        </div>
      </form>
    </div>
  );
}
