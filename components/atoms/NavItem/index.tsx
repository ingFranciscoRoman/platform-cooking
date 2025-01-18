import Link from "next/link";

interface NavItemProps {
  label: string;
  href: string;
}

function NavItem({ label, href }: NavItemProps) {
  return <Link href={href}>{label}</Link>;
}

export default NavItem;
