import React, { useState } from "react";
import style from "@/components/molecules/RecipeCard/HoverCard.module.scss";
import Image from "next/image";
import { useSplitTitle } from "@/components/molecules/RecipeCard/hooks/useSplitTitle";

interface RecipeCardProps {
  title: string;
  servings: number;
  readyInMinutes: number;
  difficulty: string;
  aggregateLikes: number;
  image: string;
}

const HoverCard = ({
  title,
  servings,
  readyInMinutes,
  difficulty,
  aggregateLikes,
  image,
}: RecipeCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { firstTitle, secondTitle } = useSplitTitle(title);

  return (
    <div>
      <div className={style["container-image"]}>
        <Image src={image} alt="plato" width={160} height={170} />
      </div>
      <div
        className={style["hover-card"]}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Front Card */}
        <div className={`${style.card} ${style.front}`}>
          <div className={style["card-front"]}></div>
          <div className={`${style["card-front-content"]}`}>
            <div className={style["card-front-content-title"]}>
              <h3 className="font-card-title">{firstTitle}</h3>
              <h3 className="font-card-title-recipe">{secondTitle}</h3>
            </div>
            <div className={style["card-front-content-icons"]}>
              <div className={style["card-front-content-icons-item"]}>
                <Image
                  src="/img/ic_star.svg"
                  alt="heart"
                  width={23}
                  height={23}
                />
                <p>{aggregateLikes}</p>
              </div>
              <div>
                <Image
                  src="/img/ic_heart.svg"
                  alt="heart"
                  width={19}
                  height={17}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Back Card */}
        <div
          className={`${style.card} ${style.back} ${
            isHovered ? style.visible : ""
          }`}
        >
          <div className={style["card-back"]}></div>
          <div className={style["card-back-content"]}>
            <div className={style["card-back-content-item"]}>
              <Image
                src="/img/porcion.svg"
                alt="porcion"
                width={17}
                height={17}
              />
              <div className={style["font-back-card-text"]}>
                <p className="font-back-card-text">Tamaño de la porción</p>
                <p className="font-back-card-text-recipe">
                  {servings} raciones
                </p>
              </div>
            </div>
            <div className={style["card-back-content-item"]}>
              <Image src="/img/timepre.svg" alt="time" width={17} height={17} />
              <div className={style["font-back-card-text"]}>
                <p className="font-back-card-text">Tiempo de preparación</p>
                <p className="font-back-card-text-recipe">
                  {readyInMinutes} minutos
                </p>
              </div>
            </div>
            <div className={style["card-back-content-item"]}>
              <Image
                src="/img/diff.svg"
                alt="difficult"
                width={17}
                height={17}
              />
              <div className={style["font-back-card-text"]}>
                <p className="font-back-card-text">Dificultad</p>
                <p className="font-back-card-text-recipe">{difficulty}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
