import React from "react";
import style from "./NewRecipes.module.scss";
import { monsterClubhouse } from "@/lib/fonts";

export const NewRecipes = () => {
  return (
    <section className={style.newRecipes}>
      <div className={style.title}>
        <h3 className={`${monsterClubhouse.className}`}>Nuevas Recetas</h3>
      </div>
      <div>{/** data del api */}</div>
    </section>
  );
};
