import { memo } from "react";
import style from "./Header.module.scss";
import Navbar from "@/components/molecules/NavBar";
import Image from "next/image";
import { dataNav } from "@/lib/data-nav";

function Header() {
  return (
    <header className={style.header}>
      <div className={style.titleApp}>
        <h1 className="primari-m-title">Recipe</h1>
        <span className="primiari-p-title">App</span>
      </div>
      <nav className={style["container-navbar"]}>
        <Navbar dataNav={dataNav} />
      </nav>
      <div className={style["container-icon-home"]} hidden>
        <Image src="/img/ic_home.png" alt="home-icon" width={25} height={25} />
      </div>
    </header>
  );
}

export default memo(Header);
