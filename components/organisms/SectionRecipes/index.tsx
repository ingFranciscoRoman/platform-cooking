import React, { useMemo } from "react";
import style from "@/components/organisms/SectionRecipes/SectionRecipes.module.scss";
import RecipeCard from "@/components/molecules/RecipeCard";

const getDifficulty = (readyInMinutes: number) => {
  if (readyInMinutes < 20) return "fácil";
  if (readyInMinutes <= 40) return "media";
  return "difícil";
};

export const recipes = [
  {
    title: "Korean Sweet n Sour Chicken",
    servings: 4,
    readyInMinutes: 30,
    difficulty: getDifficulty(30),
    aggregateLikes: 2,
    image: "/img/ic_ojingeo_muchim.png", // https://img.spoonacular.com/recipes/638369-556x370.jpg
    iconDiff: "/img/diff.svg",
    iconPortion: "/img/porcion.svg",
    iconTime: "/img/timepre.svg",
  },
  {
    title: "Royal Wedding Pear and Coriander Scones",
    servings: 8,
    readyInMinutes: 45,
    difficulty: getDifficulty(45),
    aggregateLikes: 3,
    image: "/img/ic_cola_chicken.png", // https://img.spoonacular.com/recipes/658850-556x370.jpg
    iconDiff: "/img/diff.svg",
    iconPortion: "/img/porcion.svg",
    iconTime: "/img/timepre.svg",
  },
  {
    title: "White Chocolate Cranberry Ice Cream",
    servings: 6,
    readyInMinutes: 45,
    difficulty: getDifficulty(45),
    aggregateLikes: 16,
    image: "/img/ic_roasted_carrot.png", // https://img.spoonacular.com/recipes/665203-556x370.jpg
    iconDiff: "/img/diff.svg",
    iconPortion: "/img/porcion.svg",
    iconTime: "/img/timepre.svg",
  },
  {
    title: "Crab Salad Stuffed Pita Pockets",
    servings: 2,
    readyInMinutes: 25,
    difficulty: getDifficulty(25),
    aggregateLikes: 8,
    image: "/img/ic_cherries.png", // https://img.spoonacular.com/recipes/640318-556x370.jpg
    iconDiff: "/img/diff.svg",
    iconPortion: "/img/porcion.svg",
    iconTime: "/img/timepre.svg",
  },
];

function SectionRecipes() {
  const dataRecipes = useMemo(
    () =>
      recipes.map((recipe) => (
        <RecipeCard
          key={recipe.title}
          title={recipe.title}
          servings={recipe.servings}
          readyInMinutes={recipe.readyInMinutes}
          difficulty={recipe.difficulty}
          aggregateLikes={recipe.aggregateLikes}
          image={recipe.image}
          iconDiff={recipe.iconDiff}
          iconPortion={recipe.iconPortion}
          iconTime={recipe.iconTime}
        />
      )),
    [recipes]
  );
  return (
    <>
      <div className={style.title}>
        <h3 className="primari-m-title">Nuevas Recetas</h3>
      </div>
      <section className={style.newRecipes}>
        <div className={style["container-recipe"]}>{dataRecipes}</div>
      </section>
    </>
  );
}

export default SectionRecipes;
