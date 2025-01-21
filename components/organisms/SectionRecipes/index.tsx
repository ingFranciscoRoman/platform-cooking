import React, { useMemo } from "react";
import style from "@/components/organisms/SectionRecipes/SectionRecipes.module.scss";
import RecipeCard from "@/components/molecules/RecipeCard";
import { useRecipes } from "@/context/RecipeContext";

const getDifficulty = (readyInMinutes: number) => {
  if (readyInMinutes < 20) return "fácil";
  if (readyInMinutes <= 40) return "media";
  return "difícil";
};

function SectionRecipes() {
  const { data: recipes, isFetching } = useRecipes();

  const dataRecipes = useMemo(
    () =>
      recipes?.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          title={recipe.title}
          servings={recipe.servings}
          readyInMinutes={recipe.readyInMinutes}
          difficulty={getDifficulty(recipe.readyInMinutes)}
          aggregateLikes={recipe.aggregateLikes}
          image={recipe.image}
        />
      )),
    [recipes]
  );

  if (isFetching) return <div>Cargando recetas...</div>;

  return (
    <section className={style.sectionRecipes}>
      <h3 className={`primari-m-title ${style["title-section"]}`}>
        Nuevas Recetas
      </h3>
      <div className={style["container-recipe"]}>{dataRecipes}</div>
    </section>
  );
}

export default SectionRecipes;
