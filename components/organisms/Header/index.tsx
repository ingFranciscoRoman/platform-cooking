// import Image from "next/image";
import { monsterClubhouse, poppins } from "@/lib/fonts";
import style from "./Header.module.scss";
import Navbar from "@/components/molecules/NavBar";

const dataNav = [
  "Home",
  "Vegetarianos",
  "Platos Principales",
  "Tortas",
  "Comida Rápida",
  "Menú Niños",
  "Sopas",
];

export const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <div className={style.titleApp}>
        <h1 className={`${monsterClubhouse.className}`}>Recipe</h1>
        <span className={`${poppins.className}`}>App</span>
      </div>
      <nav>
        <Navbar dataNav={dataNav} />
      </nav>
    </header>
  );
};
