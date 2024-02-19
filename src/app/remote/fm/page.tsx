import Iframe from "@/components/Iframe";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'التسجيل عن بعد في كلية الطب',
  description: 'الاتحاد الوطني لطلبة موريتانيا - التسجيل عن بعد في كلية الطب',
};


export default function Fm() {
  return (
      <Iframe url="https://inscription.fmpos.una.mr/" isFull title="التسجيل عن بعد في كلية الطب"/>
  );
}
