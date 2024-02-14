import Link from "next/link";
import FooterSocial from "./FooterSocial";
import logo from '../../../public/logo.png'
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col gap-y-8 bg-white py-10">
      <h3 className="text-center font-tajawal font-medium text-[1.125rem] text-gray-800">تابع الإتحاد الوطني على : </h3>
      <FooterSocial />
      <Link href={'/'} className="flex items-center justify-center">
        <Image src={logo} alt={'logo'} width={100} height={100} placeholder="blur" className="object-cover object-center" />
      </Link>
      <p className="text-center  text-sm">جميع الحقوق محفوظة © 2024 الإتحاد الوطني</p>
    </footer>
  );
}
