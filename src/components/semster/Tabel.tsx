import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import StudentInfo  from "@/components/semster/StudentInfo";
import {
  Student,
} from "@/lib/calculate-student-moyen-genral";

import s1 from "@/constats/resulta/S1.json";

const decision = (moy: number) => {
  if (moy >= 10) {
    return "استوفى";
  } else {
    return "لم يستوفي ";
  }
};

export function Tabel({ student , semester , moyenGeneral}: { student: Student[] , semester: string , moyenGeneral: number}) {
  if(student.length === 0) return <h1>لا يوجد طالب بهذا الرقم</h1>
  return (
    <>
    <StudentInfo department={student[0]?.dep || 'الشعبة'} semester={semester} name={student[0]?.name || 'unkown'}  />
    <Table dir="rtl">
      <TableHeader>
        <TableRow>
          <TableHead className="p-2 text-center">المادة</TableHead>
          <TableHead className="p-2 text-center max-w-[100px]">
            الضارب
          </TableHead>
          <TableHead className="p-2 text-center max-w-[100px]">
            درجة الإختبار
          </TableHead>
          <TableHead className="p-2 text-center max-w-[100px]">
            درجة الإمتحان
          </TableHead>
          <TableHead className="p-2 text-center max-w-[100px]">
            المعدل
          </TableHead>
          <TableHead className="p-2 text-center">القرار</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {student?.map((student) => {
          return (
            <TableRow key={`${student.mat}-${student.exam}`} className="text-center">
              <TableCell className="md:w-[120px] p-2">{student.mat}</TableCell>
              <TableCell className="w-[50px] text-center p-0">
                {student.coef}
              </TableCell>
              <TableCell className="w-[50px] text-center p-0">
                {student.test}
              </TableCell>
              <TableCell className="w-[50px] text-center p-0">
                {student.exam}
              </TableCell>
              <TableCell className="w-[50px] text-center p-0">
                {student.moy}
              </TableCell>
              <TableCell className="w-[50px] text-center p-0">
                {student.dec}
              </TableCell>
              {/* <TableCell className="text-right">{}</TableCell> */}
            </TableRow>
          );
        })}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2} className="text-center p-0 ">
            المعدل العام للفصل
          </TableCell>
          <TableCell className=" className='text-center  'text-center p-2 font-bold">
            {moyenGeneral}
          </TableCell>
          <TableCell colSpan={2} className="text-center p-0 ">
            القرا النهائي للفصل
          </TableCell>
          <TableCell className="text-center p-2 font-bold">
            {decision(moyenGeneral)}
          </TableCell>
        </TableRow>
      </TableFooter>
      <TableCaption>
        {moyenGeneral >= 10
          ? "يهنئك الإتحاد الوطني على الإجتياز"
          : "يتمنى لك الإتحاد الوطني التوفيق في الاستدراك"}
      </TableCaption>
    </Table>
    </>
  );
}
