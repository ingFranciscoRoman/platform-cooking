import React, { useState } from "react";
import style from "@/components/molecules/RecipeCard/HoverCard.module.scss";

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

  return (
    <div
      className={`${style["hover-card"]} ${isHovered ? style.hover : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Front Card */}
      <div
        className={`${style.card} ${style.front} ${
          isHovered ? style.hidden : ""
        }`}
      >
        Front Card
      </div>

      {/* Back Card */}
      <div
        className={`${style.card} ${style.back} ${
          isHovered ? style.visible : ""
        }`}
      >
        Back Card
      </div>
    </div>
  );
};

export default HoverCard;
