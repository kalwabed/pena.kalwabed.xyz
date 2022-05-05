export const slugify = (tag: string): string => {
  return tag.toLowerCase().replace(/\s+/g, '-');
};

export const deslugify = (tag: string): string => {
  return tag.replace(/-/g, ' ');
};
