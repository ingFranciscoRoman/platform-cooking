export interface Recipe {
  id: number;
  title: string;
  servings: number;
  readyInMinutes: number;
  aggregateLikes: number;
  image: string;
}

export interface RecipesResponse {
  recipes: Recipe[];
}

export interface RecipeContextType {
  data: Recipe[] | undefined;
  isFetching: boolean;
  error: unknown;
}
