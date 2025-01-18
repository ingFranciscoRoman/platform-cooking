import Image from "next/image";
import style from "@/components/atoms/BackCard/BackCard.module.scss";

interface BackCardProps {
  iconPortion: string;
  iconTime: string;
  iconDiff: string;
}

function BackCard({ iconDiff, iconTime, iconPortion }: BackCardProps) {
  return (
    <div className={style["container-information-recipie"]}>
      <div className={style["info-item"]}>
        <Image
          src={`${iconPortion}`}
          alt="iconos-portion"
          width={24}
          height={24}
          className={style.icon}
        />
        <p className={style["font-back-card-text"]}>Tamaño de la porción</p>
        <p className={style["font-back-card-text-recipe"]}>4 raciones</p>
      </div>
      <div className={style["info-item"]}>
        <Image src={`${iconTime}`} alt="iconos-time" width={24} height={24} />
        <p className={style["font-back-card-text"]}>Tiempo de preparación</p>
        <p className={style["font-back-card-text-recipe"]}>10 minutos</p>
      </div>
      <div className={style["info-item"]}>
        <Image src={`${iconDiff}`} alt="iconos-diff" width={24} height={24} />
        <p className={style["font-back-card-text"]}>Dificultad</p>
        <p className={style["font-back-card-text-recipe"]}>Fácil</p>
      </div>
    </div>
  );
}

export default BackCard;
