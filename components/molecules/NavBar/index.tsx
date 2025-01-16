import NavItem from "@/components/atoms/NavItem";
import style from "./Navbar.module.scss";
import { poppins } from "@/lib/fonts";

interface NavbarProps {
  dataNav: string[];
}

const Navbar: React.FC<NavbarProps> = ({ dataNav }) => {
  return (
    <ul className={style.navList}>
      {dataNav.map((item) => (
        <li key={item} className={`${poppins.className}`}>
          <NavItem href="#" label={item} />
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
