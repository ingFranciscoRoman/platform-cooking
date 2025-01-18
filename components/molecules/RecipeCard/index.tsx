"use client";

import Image from "next/image";
import style from "./RecipeCard.module.scss";
import { useState } from "react";
import { useSplitTitle } from "@/hooks/useSplitTitle";
import BackCard from "@/components/atoms/BackCard";

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

function RecipeCard({
  title,
  servings,
  readyInMinutes,
  difficulty,
  aggregateLikes,
  image,
  iconDiff,
  iconPortion,
  iconTime,
}: RecipeCardProps) {
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
        <span className={style["firstName"]}>primero</span>
        <span className={style["secondName"]}>segundo</span>

        {!hover ? (
          <div className={style.information}>
            <div>
              <h1 className="font-card-title">{mainTitle}</h1>
              <h1 className="font-card-title-recipe">{subTitle}</h1>
            </div>
            <div>5.0 like</div>
          </div>
        ) : (
          <BackCard
            iconDiff={`${iconDiff}`}
            iconPortion={`${iconPortion}`}
            iconTime={`${iconTime}`}
          />
        )}
      </div>
    </div>
  );
}

export default RecipeCard;
