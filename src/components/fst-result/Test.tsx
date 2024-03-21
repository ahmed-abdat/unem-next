"use client";

import { TMaticule, matricule } from "@/lib/validations/resulta-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";
import DialogResulta from "@/components/calculat-moyen/DialogResulta";
import { Tabel } from "./Tabel";
import SelectedSemester from "@/components/semster/Select";
import { StudentInfo } from "@/lib/calculate-student-moyen-genral";
// import { checkIfStudentExist, getAvailableOptions, getStudentNote, storeStudentNotes } from "@/app/action";
import { SemesterOption } from "@/constats/resulta/semester-options";
import StudenteInfo from "./StudentInfo";
import { ModulesInformation, Smesters, StudentMarks } from "@/types/fst-marks";

export default function Form() {
  const [loading, setLoading] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [studentInfo, setStudentInfo] = useState<StudentMarks | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TMaticule>({
    resolver: zodResolver(matricule),
  });

  const getStudentesNotes = async (id : string , semster : string[]) => {
    setLoading(true);
    // const res = await getStudentNote(
    //   id,
    //   semster
    // );
    // if(!res) return null
    // setStudentInfo(res);
    setLoading(false);
    return null;
  };

  let isFirstTime = true;

  //   default value for matricule
  useMemo(() => {
    reset({ matriculeNumber: "C" });
    setLoading(false);
  }, [reset]);


  // let matriculeStart : number = 0;

  // const fetchStudentInformation = async (id: string) => {
  //   const options = await getAvailableOptions(id);
  //   if (!options) {
  //     return null;
  //   }
  //   return {
  //     studentInfo: options.studentInfo,
  //     semesters: options.semesters,
  //   };
  // };
  
  // const storeStudentInformation = async (id: string, studentInformation: any) => {
  //   console.log('fetching ...');
  //   await storeStudentNotes(id, studentInformation);
  // };
  
  const onSubmit = async (data: TMaticule) => {
    let matriculeStart = parseInt(data.matriculeNumber.slice(1));
    let studentCount = 0;
    const limit = 1500;
  
    // try {
    //   while (studentCount < limit) {
    //     setLoading(true);
    //     setIsNotFound(false);
    //     const id = 'C' + matriculeStart.toString()
    //     console.log('Checking student:', id , studentCount , `of ${limit}`);
  
    //     const isExist = await checkIfStudentExist(id);
  
    //     if (!isExist) {
    //       const studentInformation = await fetchStudentInformation(id);
    //       if (!studentInformation) {
    //         console.log('Student not found or has no options:', id);
    //         matriculeStart++;
    //         continue; // Skip to the next student
    //       }
          
    //       await storeStudentInformation(id, studentInformation);
    //       console.log('Student information stored:', studentInformation);
    //       studentCount++;
    //     } else {
    //       console.log('Student exists:', id);
    //       studentCount++;
    //     }
  
    //     matriculeStart++;
    //   }
    // } catch (error) {
    //   console.error('Error while fetching or storing student information:', error);
    // } finally {
    //   setLoading(false);
    //   console.log('Finished fetching and storing student information');
    // }
  };
  






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
                dir="ltr"
                placeholder="رقم التسجيل"
                {...register("matriculeNumber")}
                className={cn(
                  {
                    "focus-visible:ring-red-500": errors.matriculeNumber,
                  },
                  "bg-white font-rubik font-medium text-[1.35rem] placeholder:text-[1.1rem]  placeholder:font-rb py-5 placeholder-gray-400"
                )}
              />
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
        </div>
      </form>
    </div>
  );
}
