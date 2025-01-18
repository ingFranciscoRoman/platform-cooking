export const useSplitTitle = (title: string) => {
  const words = title.split(" ");
  const mainTitle = words.slice(0, 2).join(" ");
  const subTitle = words.slice(2).join(" ");

  return { mainTitle, subTitle };
};
