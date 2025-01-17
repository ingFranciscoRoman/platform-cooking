"use client";

import Image from "next/image";
import style from "./RecipeCard.module.scss";
import { useState } from "react";
import { useSplitTitle } from "@/hooks/useSplitTitle";

interface RecipeCardProps {
  title: string;
  servings: number;
  readyInMinutes: number;
  difficulty: string;
  aggregateLikes: number;
  image: string;
  iconDiff?: string;
  iconPortion?: string;
  iconTime?: string;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  title,
  servings,
  readyInMinutes,
  difficulty,
  aggregateLikes,
  image,
  iconDiff,
  iconPortion,
  iconTime,
}) => {
  const [hover, setHover] = useState(false);
  const { mainTitle, subTitle } = useSplitTitle(title);

  return (
    <div
      className={style.card}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={style["contain-information"]}>
        <Image src={image} alt={title} width={160} height={157} />
        {!hover ? (
          <div className={style.information}>
            <div>
              <h1 className="font-card-title">{mainTitle}</h1>
              <h1 className="font-card-title-recipe">{subTitle}</h1>
            </div>
            <div>5.0 like</div>
          </div>
        ) : (
          <div className={style["container-information-recipie"]}>
            <div className={style["info-item"]}>
              <Image
                src={`${iconPortion}`}
                alt="iconos-portion"
                width={24}
                height={24}
              />
              <p className={style["font-back-card-text"]}>
                Tamaño de la porción
              </p>
              <p className={style["font-back-card-text-recipe"]}>4 raciones</p>
            </div>
            <div className={style["info-item"]}>
              <Image
                src={`${iconTime}`}
                alt="iconos-time"
                width={24}
                height={24}
              />
              <p className={style["font-back-card-text"]}>
                Tiempo de preparación
              </p>
              <p className={style["font-back-card-text-recipe"]}>10 minutos</p>
            </div>
            <div className={style["info-item"]}>
              <Image
                src={`${iconDiff}`}
                alt="iconos-diff"
                width={24}
                height={24}
              />
              <p className={style["font-back-card-text"]}>Dificultad</p>
              <p className={style["font-back-card-text-recipe"]}>Fácil</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
