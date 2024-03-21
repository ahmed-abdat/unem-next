import { StudentInfo } from "@/types/fst-marks";

export default function StudentInfos({
  studentInfos
}: {
  studentInfos : StudentInfo
}) {
  const { Name , Profil} = studentInfos
  const profile = Profil ? Profil : studentInfos["Profil d'orientation"]; 
  return (
    <>
      <h2 className="text-xl font-semibold text-gray-800 font-tajawal">
        <span className="text-primary-color ml-2 font-aljazira">الاسم واللقب</span> {Name}
      </h2>
      <h2 className="text-xl font-semibold font-rb text-gray-800">
        <span className="text-primary-color ml-2 font-aljazira">الشعبة</span>  {profile}
      </h2>
    </>
  );
}
