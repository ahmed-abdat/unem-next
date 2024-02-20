import localFont from "next/font/local";
import { Tajawal, Rubik, Baloo_Bhaijaan_2 } from "next/font/google";

export const RB = localFont({
  src: "./RB-Regular.ttf",
  variable: "--font-rb",
  preload: true,
  fallback: ["sans-serif", "system-ui", "arial"],
});

export const AljaziraRegular = localFont({
  src: "./Al-Jazeera-Regular.woff2",
  variable: "--font-aljazira-regular",
  preload: true,
  fallback: ["sans-serif", "system-ui", "arial"],
});

export const AljaziraBold = localFont({
  src: "./Al-Jazeera-Bold.woff2",
  variable: "--font-aljazira-bold",
  preload: true,
  fallback: ["sans-serif", "system-ui", "arial"],
});

export const tajawal = Tajawal({
  weight: ["400", "500", "700"],
  subsets: ["arabic"],
  variable: "--font-tajawal",
  fallback: ["system-ui", "arial"],
});
