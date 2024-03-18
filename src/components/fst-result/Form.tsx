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
import { getAvailableOptions, getStudentNote } from "@/app/action";
import { SemesterOption } from "@/constats/resulta/semester-options";
import StudenteInfo from "./StudentInfo";
import { ModulesInformation } from "@/types/fst-marks";

export default function Form() {
  const [loading, setLoading] = useState(false);
  const [moyenGenerale, setMoyenGenerale] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState<string>("");
  const [semesterOptions, setSemesterOptions] = useState<
    SemesterOption[] | null
  >(null);
  const [isNotFound, setIsNotFound] = useState(false);
  const [studentMarks, setStudentMarks] = useState<ModulesInformation | null>(
    null
  );
  const [studentId, setStudentId] = useState<string>("");
  const [studentInfo, setStudentInfo] = useState<StudentInfo | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TMaticule>({
    resolver: zodResolver(matricule),
  });

  //   default value for matricule
  useMemo(() => {
    reset({ matriculeNumber: "C" });
  }, [reset]);

  const onSubmit = async (data: TMaticule) => {
    setStudentId(data.matriculeNumber);
    setLoading(true);
    setSelectedSemester("");
    setIsNotFound(false);
    const res = await getAvailableOptions(data.matriculeNumber);
    console.log(res);
    if (res) {
      setSemesterOptions(res.semesterOptions);
      setIsNotFound(false);
      setStudentInfo(res.studentInfo);
    } else {
      setIsNotFound(true);
      setSelectedSemester("");
      setSemesterOptions(null);
      setLoading(false);
      setStudentInfo(null);
    }
    setLoading(false);
  };

  useMemo(() => {
    // check if the semester change
    if (!studentId) return;
    console.log("selectedSemester", selectedSemester, "studentId", studentId);
    setStudentMarks(null);
    // setMoyenGenerale(null);
    setIsOpen(false);

    const getStudentesNotes = async () => {
      setLoading(true);
      const res = await getStudentNote(
        studentId,
        selectedSemester.toUpperCase()
      );
      if (!res) {
        setLoading(false);
        setStudentMarks(null);
        return;
      }
      setStudentMarks(res);
      setMoyenGenerale(res.modulesInfo.moyen.slice(0, 5));
      // convert it to number
      console.log("moyenGenerale", parseFloat(res.modulesInfo.moyen));

      if (parseFloat(res.modulesInfo.moyen) >= 10) {
        setIsOpen(true);
      }
      setLoading(false);
    };
    getStudentesNotes();
  }, [selectedSemester]);

  // if the student id change reset the student marks and the moyen generale
  useMemo(() => {
    setStudentMarks(null);
    setMoyenGenerale(null);
    setStudentInfo(null);
    setSemesterOptions(null);
    setSelectedSemester("");
  }, [studentId]);

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
              <SelectedSemester
                setOption={setSelectedSemester}
                option={selectedSemester}
                semesterOptions={semesterOptions}
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
          <div className="w-full h-full mx-auto flex items-center justify-center mt-2">
            {isNotFound && (
              <p className="text-red-500 text-xl font-rb">
                لم يتم العثور على الطالب
              </p>
            )}
          </div>
          <DialogResulta
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            moyenGenerale={moyenGenerale}
            congrateText="يهنئك الإتحاد الوطني على الإجتياز"
            subText="يتمنى لك الإتحاد الوطني التوفيق في الاستدراك"
          />

          {studentInfo && (
            <StudenteInfo
              department={studentInfo?.Profil || "الشعبة"}
              name={studentInfo?.Name || "unkown"}
            />
          )}
          {studentMarks && studentMarks.modules.length ? (
            <Tabel modulesInfos={studentMarks} />
          ) : (
            <div className="w-full h-full mx-auto flex items-center justify-center mt-2">
              {loading && (
                <div className="flex items-center justify-between gap-x-2">
                  <Loader2 className="h-8 w-8 animate-spin text-primary-color" />
                  <p>
                    جاري تحميل البيانات هذا يحدث لأول مرة فقط
                    <span className="animate-pulse">...</span>
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
