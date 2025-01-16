import { monsterClubhouse } from "@/lib/fonts";
import style from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={style.containerFooter}>
      <h1 className={`${monsterClubhouse.className}`}>Con el Patrocinio de</h1>
      <div>imagenes</div>
    </footer>
  );
};
