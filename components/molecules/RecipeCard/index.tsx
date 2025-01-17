interface RecipeCardProps {
  title: string;
  servings: number;
  readyInMinutes: number;
  difficulty: string;
  aggregateLikes: number;
  image: string;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  title,
  servings,
  readyInMinutes,
  difficulty,
  aggregateLikes,
  image,
}) => {
  return <div>RecipeCard</div>;
};
