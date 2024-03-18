export default function StudentInfo({
  semester,
  name,
  department,
}: {
  semester: string;
  name: string;
  department: string;
}) {
  let studentanner =
    semester === "s1" ? "الأولى" : semester === "s3" ? "الثالثة" : "الخامسة";
  return (
    <header className='flex flex-col items-center mb-4 gap-4 w-full h-full md:max-w-[60%] mx-auto'>
        <h2 className="text-xl font-semibold font-rb text-gray-800">
        الاسم واللقب : {name}
        </h2>
        <h2 className="text-xl font-semibold font-rb text-gray-800">
          السنة {studentanner} ليصانص
        </h2>
        <h2 className="text-xl font-semibold font-rb text-gray-800">
          الشعبة: {department}
        </h2>
    </header>
  );
}
