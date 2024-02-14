import Image from "next/image";

export default function FullImages({ src }: { src: string }) {
  return (
    <section className="w-full min-h-dvh h-full max-h-[120dvh] overflow-hidden relative">
      <Image
        fill
        src={src}
        alt="fst"
        className="object-contain max-w-full md:max-h-dvh md:w-full"
      />
    </section>
  );
}
