import style from "./Footer.module.scss";
import Image from "next/image";

function Footer() {
  return (
    <footer className={style.containerFooter}>
      <h1 className="primari-m-title">Con el Patrocinio de</h1>
      <Image src="/img/products.png" alt="products" width={536} height={248} />
    </footer>
  );
}

export default Footer;
