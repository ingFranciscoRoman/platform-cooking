import Link from "next/link";
import style from "./NavItem.module.scss";

interface NavItemProps {
  label: string;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, href }) => {
  return <Link href={href}>{label}</Link>;
};

export default NavItem;
