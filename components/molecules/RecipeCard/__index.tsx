"use client";

import Image from "next/image";
import style from "@/components/molecules/RecipeCard/RecipeCard.module.scss";
import { useSplitTitle } from "@/components/molecules/RecipeCard/hooks/useSplitTitle";

interface RecipeCardProps {
  title: string;
  servings: number;
  readyInMinutes: number;
  difficulty: string;
  aggregateLikes: number;
  image: string;
}

function RecipeCard({
  title,
  servings,
  readyInMinutes,
  difficulty,
  aggregateLikes,
  image,
}: RecipeCardProps) {
  const { firstTitle, secondTitle } = useSplitTitle(title);

  return (
    <div className={style.cardContainer}>
      <div className={style["container-img"]}>
        <Image src={image} alt={title} width={160} height={157} />
      </div>
      <div className={style["container-card-front"]}>
        <div className={style["card-front"]}>
          <div className={style["content-title"]}>
            <p className="font-card-title">{firstTitle}</p>
            <p className="font-card-title-recipe">{secondTitle}</p>
          </div>
          <div className={style["content-information-recipe"]}>
            <div className={style["information-data-recipe"]}>
              <Image
                src="/img/ic_star.svg"
                alt="icon-portion"
                width={20}
                height={20}
              />
              <p className="font-card-title">{aggregateLikes}</p>
            </div>
            <div>
              <Image
                src="/img/ic_heart.svg"
                alt="icon-portion"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={style["hidden-card"]}>
        <div className={style["card-back"]}>
          <div className={style["content-porcion"]}>
            <Image
              src="/img/porcion.svg"
              width={17}
              height={17}
              alt="porcion"
            />
            <div>
              <p className={style["title-item"]}>Tamaño de la porción</p>
              <p className={style["sub-title-item"]}>{servings} raciones</p>
            </div>
          </div>
          <div className={style["content-time-preparation"]}>
            <Image
              src="/img/timepre.svg"
              width={17}
              height={17}
              alt="tiempo de preparación"
            />
            <div>
              <p className={style["title-item"]}>Tiempo de preparación</p>
              <p className={style["sub-title-item"]}>
                {readyInMinutes} minutos
              </p>
            </div>
          </div>
          <div className={style["content-difficulty"]}>
            <Image
              src="/img/diff.svg"
              width={17}
              height={17}
              alt="dificultad del plato"
            />
            <div>
              <p className={style["title-item"]}>Dificultad</p>
              <p className={style["sub-title-item"]}>{difficulty}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
