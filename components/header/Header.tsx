// import Image from "next/image";
import style from "./Header.module.scss";
import Link from "next/link";

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
      <div className={style.logo}>
        Recipe <span>App</span>
        {/* <Image
          src="/assets/logo-recipe-app.png"
          width={100}
          height={40}
          alt="logo-recipe-app"
        /> */}
      </div>
      <nav>
        <ul className={style.navList}>
          {dataNav.map((item) => (
            <li key={item}>
              <Link href="#">{item}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
