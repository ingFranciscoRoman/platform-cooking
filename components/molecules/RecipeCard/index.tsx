"use client";

import Image from "next/image";
import style from "./RecipeCard.module.scss";
import { useState } from "react";

interface RecipeCardProps {
  title: string;
  servings: number;
  readyInMinutes: number;
  difficulty: string;
  aggregateLikes: number;
  image: string;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  title,
  servings,
  readyInMinutes,
  difficulty,
  aggregateLikes,
  image,
}) => {
  const [hover, setHover] = useState(false);

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
            <h1>titulo</h1>
            <div>
              5.0 <span>⭐</span>
              like <span>⭐</span>
            </div>
          </div>
        ) : (
          <>
            <h1>detalle</h1>
          </>
        )}
      </div>
    </div>
  );
};
