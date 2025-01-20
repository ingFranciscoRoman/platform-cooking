import style from "@/components/molecules/NavCardList/NavCardList.module.scss";
import Image from "next/image";

interface NavData {
  name: string;
  img: string;
}

interface NavbarProps {
  dataNav: NavData[];
}

function NavCardList({ dataNav }: NavbarProps) {
  return (
    <div className={style["container-nav-card-list"]}>
      {dataNav.map((item) => (
        <div key={item.name} className={style["nav-card"]}>
          <Image src={item.img} alt={item.name} width={25} height={25} />
          <p className="font-back-card-text-recipety">{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default NavCardList;
