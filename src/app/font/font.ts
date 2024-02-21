import localFont from "next/font/local";
import { Tajawal, Rubik, Baloo_Bhaijaan_2 } from "next/font/google";

export const RB = localFont({
  src: "./RB-Regular.ttf",
  variable: "--font-rb",
});

export const Aljazira = localFont({
  src: [
    {
      path: "./Al-Jazeera-Bold.woff2",
      weight: "600",
    },
    {
      path : './Al-Jazeera-Heavy.woff2',
      weight : '700'

    },
    {
      path: "./Al-Jazeera-Regular.woff2",
      weight: "500",
    },
    {
      path: "./Al-Jazeera-Light.woff2",
      weight: "400",
    }
  ],
  variable: "--font-aljazira",
});


export const tajawal = Tajawal({
  weight: ["400", "500", "700"],
  subsets: ["arabic"],
  variable: "--font-tajawal",
  fallback: ["system-ui", "arial"],
});
