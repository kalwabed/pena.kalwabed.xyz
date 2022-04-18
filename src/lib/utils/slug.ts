export const tagSlugify = (tag: string) => {
  return tag.toLowerCase().replace(/\s+/g, '-');
};
