import { monsterClubhouse } from "@/lib/fonts";
import style from "./Footer.module.scss";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className={style.containerFooter}>
      <h1 className={`${monsterClubhouse.className}`}>Con el Patrocinio de</h1>
      <div>
        <Image
          src="/assets/products.png"
          alt="productus"
          width={100}
          height={100}
        />
      </div>
    </footer>
  );
};
