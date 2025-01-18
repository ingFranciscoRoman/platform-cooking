"use client";

import { useState } from "react";
import Image from "next/image";
import style from "@/components/molecules/RecipeCard/RecipeCard.module.scss";
import { useSplitTitle } from "@/components/molecules/RecipeCard/hooks/useSplitTitle";
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
    <section className={style.cardContainer}>
      <div className={style.card}>
        <Image src={image} alt={title} width={160} height={157} />
        <div className={style.cardContent}>
          <p>{mainTitle}</p>
          <p>{subTitle}</p>
          <p>{servings} raciones</p>
        </div>
      </div>
      <div className={style.hiddenCard}>
        <Image src={image} alt={title} width={160} height={157} />
        <div className={style.cardContent}>
          <p>{title}</p>
          <p>{servings} raciones</p>
          <p>Tiempo de preparación: {readyInMinutes} minutos</p>
          <p>Dificultad: {difficulty}</p>
          <p>Likes: {aggregateLikes}</p>
        </div>
      </div>
    </section>
  );
}

export default RecipeCard;
