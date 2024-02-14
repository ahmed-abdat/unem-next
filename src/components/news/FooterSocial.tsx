import Link from "next/link";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
export default function FooterSocial() {
  return (
    <div className="w-full flex gap-x-4 justify-center items-center">
    <Link href="https://wa.me/+22236199323?text=" aria-label="facebook">
        <FaFacebook className="text-4xl text-blue-600" />
        </Link>
        <Link href='https://www.facebook.com/unem.mr/' aria-label="whatsapp">
            <FaWhatsapp className="text-4xl text-green-600" />
        </Link>
        <Link href='https://www.youtube.com/@unemmr' aria-label="youtube">
            <FaYoutube className="text-4xl text-red-600" />
        </Link>
    </div>
  );
}
