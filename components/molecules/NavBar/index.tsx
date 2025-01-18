import NavItem from "@/components/atoms/NavItem";
import style from "./Navbar.module.scss";

interface NavbarProps {
  dataNav: string[];
}

function Navbar({ dataNav }: NavbarProps) {
  return (
    <ul className={style.navList}>
      {dataNav.map((item) => (
        <li key={item} className="primiari-p-title">
          <NavItem href="#" label={item} />
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
