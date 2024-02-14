"use client";
import Link from "next/link";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";

export default function HomeFooter() {
  // handel whatsapp redirect
  const handelWhatsapp = () => {
    window.open("https://wa.me/+22236199323?text=");
  };
  // handel facebook redirect
  const handelFacebook = () => {
    window.open("https://www.facebook.com/unem.mr/");
  };

  // handel whatsapp redirect
  const handelAhmedWhtspp = () => {
    console.log("clicked");
    
    window.open("https://wa.me/+22242049074?text=");
  };

  return (
    <>
      <div className="mt-12 px-[1.1rem]">
        <h3 className="text-xl text-center font-rb font-medium" onClick={() => console.log('clicked')
        }>
          أكبر نقابة طلابية موريتانية تأسست 13 مايو 2000 م
        </h3>
      </div>
      <div className="relative mt-8 px-20 text-center">
        <div className="absolute w-3/5 h-32 bg-gradient-footer from-green-1 to-green-2 rounded-b-2xl top-0 left-[20%] z-0 border-t border-white"></div>
        <p className="absolute left-1/2 transform -translate-x-1/2 top-[20px] font-rb font-medium ">
          للتواصل CONTACT
        </p>
        <div className="flex items-center justify-center text-center gap-4 text-[1.8rem] absolute top-[60px] left-1/2 transform -translate-x-1/2 ">
          <Link className="cursor-pointer" href="https://www.facebook.com/unem.mr/" target="_blank" aria-label="facebook">
            <BsFacebook />
          </Link>
          <Link className="cursor-pointer" href="https://wa.me/+22236199323?text=" target="_blank" aria-label="whatsapp">
            <BsWhatsapp />
          </Link>
        </div>
      </div>
      <div
        className="absolute bottom-2.5 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-100 cursor-pointer"
        onClick={handelAhmedWhtspp}
      >
        <Link href='https://wa.me/+22242049074?text' className="p-2" target="_blank" aria-label="auther link">Made by @Ahmed Abdat</Link>
      </div>
    </>
  );
}
