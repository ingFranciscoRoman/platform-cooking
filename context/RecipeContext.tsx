"use client";

import { useFetchRecipes } from "@/hooks/useFetchRecipes";
import { RecipeContextType } from "@/types/recipes.types";
import { createContext, useContext } from "react";

const RecipeContext = createContext<RecipeContextType | null>(null);

export function RecipeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { recipes, isFetching, error } = useFetchRecipes();

  return (
    <RecipeContext.Provider value={{ data: recipes, isFetching, error }}>
      {children}
    </RecipeContext.Provider>
  );
}

export function useRecipes() {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error(
      "useRecipes debe ser usado dentro de RecipeContextProvider"
    );
  }
  return context;
}
