import { Poppins } from "next/font/google";
import localFont from "next/font/local";

export const monsterClubhouse = localFont({
  src: "./MonsterClubhouse.ttf",
  weight: "400",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
