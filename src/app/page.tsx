import HomeFooter from "@/components/home/HomeFooter";
import HomeOption from "@/components/home/HomeOption";
import Image from "next/image";
import logo from "../../public/logo.png";
// import texture from "../../public/texture.png";

export default function Home() {
  return (
    <main className="relative min-h-screen pb-48 bg-gradient-main from-green-1 to-green-2 text-white">
      <section className="pb-4">
        <header className="relative mx-auto md:w-[70%]">
          <div className="h-48 w-full object-fill relative">
            <Image src={'/texture.png'} alt="background" fill  />
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              src={logo}
              width={144}
              height={144}
              placeholder="blur"
              alt="logo"
              className="object-contain rounded-md"
            />
          </div>
        </header>
        <HomeOption />
        <HomeFooter />
      </section>
    </main>
  );
}
