export const getSessionFormat = (session) => {
  const { categories } = session;
  const category = categories.find((c) => c.id === 55126);

  if (!category || !category.categoryItems.length) return [];

  const formats = category.categoryItems.map((c) => c.id);

  if (!formats || !formats.length) return [];

  return formats;
};
