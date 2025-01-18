import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";

type RecipeContextType = {
  data: any[];
  isLoading: boolean;
  error: unknown;
};

const RecipeContext = createContext<RecipeContextType | null>(null);

export function RecipeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {
    data = [],
    isLoading,
    error,
  } = useQuery<any[]>({
    queryKey: ["/recipes/random"],
  });

  return (
    <RecipeContext.Provider value={{ data, isLoading, error }}>
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
}
