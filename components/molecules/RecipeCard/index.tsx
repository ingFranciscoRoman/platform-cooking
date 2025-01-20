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
  const { firstTitle, secondTitle } = useSplitTitle(title);
  //TODO: problemas con el responsive desing
  return (
    <div className={style.cardContainer}>
      <div className={style["container-img"]}>
        <Image src={image} alt={title} width={160} height={157} />
      </div>
      {/** Cara frontal de la card */}
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
      {/** Cara tracera de la card */}
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
              <p className={style["sub-title-item"]}># raciones</p>
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
              <p className={style["sub-title-item"]}># minutos</p>
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
              <p className={style["sub-title-item"]}>fácil</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <section className={style.cardContainer}>
    //   <div className={style["container-img"]}>
    //     <Image src={image} alt={title} width={160} height={157} />
    //   </div>
    //   <div className={style.card}>
    //     <div className={style.cardContent}>
    //       <div className={style["content-title"]}>
    //         <p className="font-card-title">{firstTitle}</p>
    //         <p className="font-card-title-recipe">{secondTitle}</p>
    //       </div>
    //       <div className={style["content-icons"]}>
    //         <div className={style["content-icons-start"]}>
    //           <Image
    //             src="/img/ic_star.svg"
    //             alt="icon-portion"
    //             width={20}
    //             height={20}
    //           />
    //           <p className="font-card-title">{aggregateLikes}</p>
    //         </div>
    //         <div className={style["content-icons-heart"]}>
    //           <Image
    //             src="/img/ic_heart.svg"
    //             alt="icon-portion"
    //             width={20}
    //             height={20}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {/* <Image src={image} alt={title} width={160} height={157} /> */}
    //   <div className={style.hiddenCard}>
    //     <BackInformationCard
    //       image={`${image}`}
    //       title={`${title}`}
    //       servings={servings}
    //       readyInMinutes={readyInMinutes}
    //       difficulty={difficulty}
    //       iconPortion={iconPortion}
    //       iconTime={iconTime}
    //       iconDiff={iconDiff}
    //     />
    //   </div>
    // </section>
  );
}

export default RecipeCard;
