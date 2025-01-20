import NavItem from "@/components/atoms/NavItem";
import style from "./Navbar.module.scss";

interface NavData {
  name: string;
  img: string;
}

interface NavbarProps {
  dataNav: NavData[];
}

function Navbar({ dataNav }: NavbarProps) {
  return (
    <ul className={style.navList}>
      {dataNav.map((item) => (
        <li key={item.name} className="primiari-p-title">
          <NavItem href="#" label={item.name} />
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
