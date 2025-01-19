export const useSplitTitle = (title: string) => {
  const words = title.split(" ");
  const firstTitle = words.splice(0, 2)[0];
  const secondTitle = words.splice(2)[0];

  return { firstTitle, secondTitle };
};
