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
  const { firstTitle, secondTitle } = useSplitTitle(title);
  //TODO: problemas con el responsive desing
  return (
    <>Contenedor de card</>
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
