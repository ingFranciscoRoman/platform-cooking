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

function Header() {
  return (
    <header className={style.header}>
      <div className={style.titleApp}>
        <h1 className="primari-m-title">Recipe</h1>
        <span className="primiari-p-title">App</span>
      </div>
      <nav>
        <Navbar dataNav={dataNav} />
      </nav>
    </header>
  );
}

export default Header;
