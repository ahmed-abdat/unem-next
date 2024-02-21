import Link from "next/link";
import { optionType } from "@/types/options-type";

export default function PageOptions({
  options,
  mainRoute,
  subRoute,
  isLink,
}: {
  options: optionType[] | undefined;
  mainRoute?: string;
  subRoute?: string ;
  isLink?: boolean;
}) {
  return (
    <section className="px-2 pb-8 pt-8 flex flex-col gap-[1rem] min-h-[68vh] md:max-w-[70%] md:mx-auto">
      {options?.map((option) => (
        <div
          className="relative py-2 px-4 text-center font-tajawal font-medium bg-white rounded-lg shadow-option cursor-pointer overflow-hidden"
          key={option.url}
        >
          <div className="absolute top-0 right-[1px] h-full w-5 bg-gradient-main from-green-1 to-green-2 rounded-lg"></div>
          <Link
            href={
              subRoute ? 
              `/${mainRoute}/${subRoute}/${option.url}` :
              mainRoute
                ? `/${mainRoute}${option.url}` 
                : isLink
                ? `${option.url}`
                : `/${option.url}`
            }
            className="text-green-600 text-sm"
            target={isLink ? "_blank" : "_self"}
          >
            <h3 className={` font-tajawal font-semibold text-green-700 text-base`}>
              {option.content}
            </h3>
          </Link>
        </div>
      ))}
    </section>
  );
}
