export const useSplitTitle = (title: string) => {
  const words = title.split(" ");
  const firstTitle = words.slice(0, 2).join(" ");
  const secondTitle = words.slice(2).join(" ");

  return { firstTitle, secondTitle };
};
