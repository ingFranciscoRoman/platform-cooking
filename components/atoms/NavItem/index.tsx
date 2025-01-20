import Link from "next/link";

interface NavItemProps {
  label: string;
  href: string;
}

function NavItem({ label, href }: NavItemProps) {
  return (
    <Link className="nav-item-font" href={href}>
      {label}
    </Link>
  );
}

export default NavItem;
