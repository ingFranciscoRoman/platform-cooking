import Image from "next/image";
import style from "@/components/atoms/BackInformationCard/BackCard.module.scss";

interface BackInformationCardProps {
  iconPortion?: string;
  iconTime?: string;
  iconDiff?: string;
  image: string;
  title: string;
  servings: number;
  readyInMinutes: number;
  difficulty: string;
}

function BackInformationCard({
  iconDiff,
  iconTime,
  iconPortion,
  image,
  title,
  servings,
  readyInMinutes,
  difficulty,
}: BackInformationCardProps) {
  return (
    <>
      <div className={style.cardContent}>
        <p>{title}</p>
        <p>{servings} raciones</p>
        <p>Tiempo de preparación: {readyInMinutes} minutos</p>
        <p>Dificultad: {difficulty}</p>
      </div>
    </>
  );
}

export default BackInformationCard;
