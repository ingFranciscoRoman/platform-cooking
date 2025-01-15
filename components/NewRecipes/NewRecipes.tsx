import React from "react";
import style from "./NewRecipes.module.scss";

export const NewRecipes = () => {
  return (
    <section className={style.newRecipes}>
      <div className={style.title}>
        <h3>Nuevas Recetas</h3>
      </div>
      <div>{/** data del api */}</div>
    </section>
  );
};
