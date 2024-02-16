import Image from "next/image";

export default function HeaderImage({picture} : {picture: string}) {
  return (
      <header className="max-h-[17rem] mx-auto flex w-[94%] overflow-hidden" >
        <Image src={picture} alt="header" width={450} height={300} className="object-contain mx-auto max-w-full max-h-full" priority={true} />
      </header>
  );
}
