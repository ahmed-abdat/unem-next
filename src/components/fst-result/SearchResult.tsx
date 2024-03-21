import { StudentMarks } from "@/types/fst-marks";

export default function SearchResult({
  result,
  setStudentInfo
}: {
  result: StudentMarks[] | [];
  setStudentInfo: (student: StudentMarks) => void;
}) {
  if (!result) return;



  return (
    <section className={`bg-white p-2 w-full h-[250px] rounded-md flex flex-col gap-y-3 ${result.length === 0 ? 'overflow-hidden' : 'overflow-y-scroll'} absolute left-0 top-14 z-30 items-start`} dir="ltr">
      {/* if the result are empty array show "no student found" */}
      {result.length === 0 && <h2 className='font-aljazira font-semibold text-base text-gray-800 w-full p-2 text-center absolute left-0 top-1/2 -translate-y-1/2'>Aucun étudiant trouvé</h2>}
      {result.map((student) => (
        <h2 key={student.studentInfo.Name} className='font-aljazira font-semibold text-base text-gray-800 w-full cursor-pointer hover:bg-btn-hover hover:text-white transition-all duration-100 p-2 rounded-md' onClick={() => setStudentInfo(student)}>{student.studentInfo.Name}</h2>
      ))}
    </section>
  );
}
