"use client";

import Image from "next/image";
import style from "@/components/molecules/RecipeCard/RecipeCard.module.scss";
import { useSplitTitle } from "@/components/molecules/RecipeCard/hooks/useSplitTitle";
import BackInformationCard from "@/components/atoms/BackInformationCard";

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
        <BackInformationCard
          image={`${image}`}
          title={`${title}`}
          servings={servings}
          readyInMinutes={readyInMinutes}
          difficulty={difficulty}
          iconPortion={iconPortion}
          iconTime={iconTime}
          iconDiff={iconDiff}
        />
      </div>
    </section>
  );
}

export default RecipeCard;
