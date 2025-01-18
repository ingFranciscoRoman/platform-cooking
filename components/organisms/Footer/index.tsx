import { memo } from "react";
import Image from "next/image";
import style from "@/components/organisms/Footer/Footer.module.scss";

function Footer() {
  return (
    <footer className={style.containerFooter}>
      <h1 className="primari-m-title">Con el Patrocinio de</h1>
      <Image src="/img/products.png" alt="products" width={536} height={248} />
    </footer>
  );
}

export default memo(Footer);
