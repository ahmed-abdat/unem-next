"use client";

import { TMaticule, matricule } from "@/lib/validations/resulta-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import DialogResulta from "@/components/calculat-moyen/DialogResulta";
import { Tabel } from "../fst-result/Tabel";
import SelectedSemester from "@/components/semster/Select";
import {
  SemesterOption,
  semesterOptions,
} from "@/constats/resulta/semester-options";
import {
  calculateGeneralAverage,
  Student,
} from "@/lib/calculate-student-moyen-genral";
import {findStudent} from '@/lib/find-student'

export default function Form() {
  const [loading, setLoading] = useState(false);
  const [moyenGenerale, setMoyenGenerale] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState<string>("s1");
  const [isNotFound, setIsNotFound] = useState(false);
  const [students, setStudents] = useState<Student[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TMaticule>({
    resolver: zodResolver(matricule),
  });
  
  const onSubmit = (data: TMaticule) => {
    setLoading(true);
    const student = findStudent(selectedSemester, data.matriculeNumber);
    if(student.length === 0){
      setIsOpen(false);
      setMoyenGenerale(null);
      setLoading(false);
      setIsNotFound(true);
      return;
    }
    setStudents(student);
    const moyn = calculateGeneralAverage(student);
    setMoyenGenerale(moyn);
    if (moyn) {
      setTimeout(() => {
        setIsOpen(true);
        setIsNotFound(false);
      }, 200);
    } else {
      setIsNotFound(true);
      console.log("no student found");
    }
    setLoading(false);
  };

  useEffect(() => {
    setMoyenGenerale(null);
    setIsOpen(false);
  }, [reset, selectedSemester]);

  return (
    <div className=" w-full flex flex-col gap-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex flex-col gap-4">
          <div className="flex h-full text-gray-800 flex-col mx-auto  items-start md:max-w-[40%] md:mx-auto">
            <Label
              htmlFor={"matricule"}
              className="text-[1.25rem] font-semibold font-rb text-gray-600"
            >
              أدخل رقم التسجيل
            </Label>
            <div className="flex gap-x-2">
              <Input
                type="text"
                id={"matric"}
                placeholder="رقم التسجيل"
                {...register("matriculeNumber")}
                className={cn(
                  {
                    "focus-visible:ring-red-500": errors.matriculeNumber,
                  },
                  "bg-white font-rubik font-medium text-[1.35rem] placeholder:text-[1.1rem]  placeholder:font-rb py-5 placeholder-gray-400"
                )}
              />
              <SelectedSemester setOption={setSelectedSemester} option={"s1"} semesterOptions={semesterOptions} />
            </div>
            {errors.matriculeNumber?.message && (
              <p className="text-red-500 text-sm font-rb mt-4">
                {errors.matriculeNumber?.message}
              </p>
            )}
          </div>

          <Button
            disabled={loading}
            type="submit"
            className="sm:max-w-[40%] text-2xl md:text-xl sm:mx-auto sm:w-full md:w-full md:max-w-[35%] lg:max-w-[30%] font-tajawal font-medium shadow-btne cursor-pointer text-white  bg-btn hover:bg-btn px-[15px] py-[1.65rem] rounded-lg disabled:opacity-[0.7] disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-disabeld-btn active:shadow-none active:transform active:translate-x-0 active:translate-y-1 transition-all"
          >
            بحث
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          </Button>
          <div className='w-full h-full mx-auto flex items-center justify-center mt-2'>
            {isNotFound && (
              <p className="text-red-500 text-xl font-rb">لم يتم العثور على الطالب</p>
            )}
          </div>
          <DialogResulta
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            moyenGenerale={moyenGenerale}
            congrateText="يهنئك الإتحاد الوطني على الإجتياز"
            subText="يتمنى لك الإتحاد الوطني التوفيق في الاستدراك"
          />
          {moyenGenerale && students && (
            <Tabel
              semester={selectedSemester}
              moyenGeneral={moyenGenerale}
              student={students}
            />
          )}
        </div>
      </form>
    </div>
  );
}
