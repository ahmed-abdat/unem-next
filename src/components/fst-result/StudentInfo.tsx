export default function StudentInfo({
  name,
  department,
}: {
  name: string;
  department: string;
}) {
  return (
    <header className="flex flex-col items-center mb-4 gap-4 w-full h-full md:max-w-[60%] mx-auto text-center">
      <h2 className="text-xl font-semibold text-gray-800 font-tajawal">
        <span className="text-primary-color ml-2 font-aljazira">الاسم واللقب</span> {name}
      </h2>
      <h2 className="text-xl font-semibold font-rb text-gray-800">
        <span className="text-primary-color ml-2 font-aljazira">الشعبة</span>  {department}
      </h2>
    </header>
  );
}
