import { options } from "@/constats/options/home-options";
import Link from "next/link";


export default function HomeOption() {
  return (
    <section className="px-4 py-5 mt-20 flex flex-col gap-6 mx-auto md:w-[70%]">
      {options?.map((option) => (
        <div key={option?.content} className="p-[0.8rem] border border-white rounded-lg font-rb text-base font-medium">
          <Link href={option?.url}>
            <h3 >{option?.content}</h3>
          </Link>
        </div>
      ))}
    </section>
  );
}
