"use client";

import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useMemo } from "react";

type Recipe = {
  id: number;
  title: string;
  servings: number;
  readyInMinutes: number;
  aggregateLikes: number;
  image: string;
};

type RecipesResponse = {
  recipes: Recipe[];
};

type RecipeContextType = {
  data: Recipe[] | undefined;
  isFetching: boolean;
  error: unknown;
};

const RecipeContext = createContext<RecipeContextType | null>(null);

export function RecipeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data, error, isFetching } = useQuery<RecipesResponse>({
    queryKey: ["/recipes/random?number=4"],
  });

  const recipes = useMemo(() => {
    return (
      data?.recipes?.map((recipe) => ({
        id: recipe.id,
        title: recipe.title,
        servings: recipe.servings,
        readyInMinutes: recipe.readyInMinutes,
        aggregateLikes: recipe.aggregateLikes,
        image: recipe.image,
      })) || []
    );
  }, [data]);

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
