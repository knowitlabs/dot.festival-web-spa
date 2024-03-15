export const getTags = (session) => {
  const { categories } = session;
  const category = categories.find((c) => c.name === 'Track');

  if (!category || !category.categoryItems.length) return [];

  const tags = category.categoryItems;

  if (!tags || !tags.length) return [];

  return tags;
};
