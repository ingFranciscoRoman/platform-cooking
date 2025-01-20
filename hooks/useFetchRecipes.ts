import { Recipe, RecipesResponse } from "@/types/recipes.types";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

// interface Recipe {
//   id: number;
//   title: string;
//   servings: number;
//   readyInMinutes: number;
//   aggregateLikes: number;
//   image: string;
// }

// interface RecipesResponse {
//   recipes: Recipe[];
// }

export function useFetchRecipes() {
  const { data, error, isFetching } = useQuery<RecipesResponse>({
    queryKey: ["/recipes/random?number=4"],
  });

  const recipes: Recipe[] = useMemo(() => {
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

  return { recipes, isFetching, error };
}
