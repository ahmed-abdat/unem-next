"use client";

import { TMaticule, matricule } from "@/lib/validations/resulta-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader2, Search } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";
import DialogResulta from "@/components/calculat-moyen/DialogResulta";
import { Tabel } from "./Tabel";
import SelectedSemester from "@/components/semster/Select";
import { StudentInfo } from "@/lib/calculate-student-moyen-genral";
import { getStudentInformation, searchStudentByName } from "@/app/action";
import {
  SemesterOption,
  smesterOptions,
} from "@/constats/resulta/semester-options";
import SearchResult from "./SearchResult";
import StudenteInfo from "./StudentInfo";
import { ModulesInformation, Smesters, StudentMarks } from "@/types/fst-marks";

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
  const [studentInfo, setStudentInfo] = useState<StudentInfo | null>(null);
  const [semesters, setSemesters] = useState<Smesters | null>(null);
  const [queryResult, setQueryResult] = useState<StudentMarks[] | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TMaticule>({
    resolver: zodResolver(matricule),
  });

  //   default value for matricule
  // useEffect(() => {
  //   reset({ matriculeNumber: "C" });
  // }, []);

  useMemo(() => {
    if (semesters && selectedSemester) {
      const moyen = semesters[selectedSemester].modulesInfo.moyen.slice(0, 5);
      const decision = semesters[selectedSemester].modulesInfo.decision;
      if (parseFloat(moyen) >= 10 && decision === "V") {
        setIsOpen(true);
        setMoyenGenerale(moyen);
      }
      setStudentMarks(semesters[selectedSemester]);
    }
  }, [selectedSemester , semesters]);

  const resetState = () => {
    setStudentMarks(null);
    setStudentInfo(null);
    setSemesters(null);
    setSemesterOptions(null);
    setSelectedSemester("");
  };

  const onSubmit = async (data: TMaticule) => {
    const { matriculeNumber } = data;
    setLoading(true);
    setIsNotFound(false);
    resetState();
    try {
      if(isNaN(Number(matriculeNumber.slice(1)))){
        const students = await searchStudentByName(matriculeNumber);
        console.log(students);
        setQueryResult(students);
        if(students.length === 1) handelSelectedStudent(students[0]);
        setLoading(false);
        return 
      }
      const student = await getStudentInformation(matriculeNumber);
      if (!student) {
        resetState();
        setIsNotFound(true);
        setLoading(false);
        return;
      }
      // get the semesters keys
      const semestersOptions = Object.keys(student.semesters);
      const semestere = smesterOptions.filter((option) =>
        semestersOptions.includes(option.value)
      );
      console.log(student);
      setSemesters(student.semesters);
      setSemesterOptions(semestere);
      setStudentInfo(student.studentInfo);
      setIsNotFound(false);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handelSelectedStudent = (student: StudentMarks) => {
    setStudentInfo(student.studentInfo);
    reset({ matriculeNumber: student.studentInfo.Name });
    const semestersOptions = Object.keys(student.semesters);
    const semestere = smesterOptions.filter((option) =>
      semestersOptions.includes(option.value)
    );
    setSemesterOptions(semestere);
    setStudentInfo(student.studentInfo);
    setSemesters(student.semesters);
    setQueryResult(null);
  };

  return (
    <div className=" w-full flex flex-col gap-4 ">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="w-full flex flex-col gap-4 items-center">
          <div className="relative sm:max-w-[60%] mx-auto lg:max-w-[50%] xl:max-w-[30%] flex h-full text-gray-800 flex-col gap-y-2 items-center m-0 max-w-[95%] w-full sm:items-start md:max-w-[55%] md:w-full">
            <Label
              htmlFor={"matricule"}
              className="text-[1.25rem] font-semibold font-rb text-gray-600"
            ></Label>
            <div className="flex gap-x-2 w-full relative items-center justify-center">
              <span className="absolute left-2 top-auto text-[1.35rem] font-rb text-gray-500 flex items-center justify-center cursor-pointer" onClick={handleSubmit(onSubmit)} >
                <Search />
              </span>
              <Input
                type="text"
                id={"matric"}
                dir="ltr"
                placeholder="Numéro d'inscription ou nom"
                {...register("matriculeNumber")}
                className={cn(
                  {
                    "focus-visible:ring-red-500": errors.matriculeNumber,
                  },
                  "bg-white pl-9 w-full font-rubik font-medium text-[1.35rem] placeholder:text-[1.1rem]  placeholder:font-rb py-5 placeholder-gray-400"
                )}
              />
            </div>
            {queryResult && Array.isArray(queryResult) && !errors.matriculeNumber?.message && (
              <SearchResult
                result={queryResult}
                setStudentInfo={handelSelectedStudent}
              />
            )}
            {errors.matriculeNumber?.message && (
              <p className="text-red-500 text-sm font-aljazira text-center">
                {errors.matriculeNumber?.message}
              </p>
            )}
          </div>

          <Button
            disabled={loading}
            type="submit"
            className="w-full max-w-[95%] sm:max-w-[50%] text-2xl md:text-xl sm:mx-auto sm:w-full md:w-full md:max-w-[45%] xl:max-w-[30%] lg:max-w-[40%] font-tajawal font-medium shadow-btne cursor-pointer text-white  bg-btn hover:bg-btn px-[15px] py-[1.65rem] rounded-lg disabled:opacity-[0.7] disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-disabeld-btn active:shadow-none active:transform active:translate-x-0 active:translate-y-1 transition-all"
          >
            بحث | Rechercher
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
            congrateText={`يهنئك الإتحاد الوطني على نجاحك`}
            subText="يتمنى لك الإتحاد الوطني التوفيق في القادم"
          />

          {studentInfo && (
            <header className="flex flex-col items-center mb-4 gap-4 w-full h-full  text-center">
              <StudenteInfo studentInfos={studentInfo} />
              <div className="flex items-center gap-x-4">
                <Label
                  htmlFor="semester"
                  className="text-[1.25rem] font-semibold font-aljazira text-primary-color"
                >
                  الفصل الدراسي
                </Label>
                <SelectedSemester
                  setOption={setSelectedSemester}
                  option={selectedSemester}
                  semesterOptions={semesterOptions}
                />
              </div>
            </header>
          )}
          {studentMarks && studentMarks.modules.length && (
            <Tabel modulesInfos={studentMarks} />
          )}
        </div>
      </form>
    </div>
  );
}
