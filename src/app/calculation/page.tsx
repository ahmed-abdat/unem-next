import MoyenCalculation from "@/components/calculat-moyen/MoyenCalculation";

import { Metadata } from "next";


export const metadata: Metadata = {
  title: " حساب المعدل التوجيهي",
  description: " حساب المعدل التوجيهي",
};

export default function Calculation() {
  return <MoyenCalculation />;
}
