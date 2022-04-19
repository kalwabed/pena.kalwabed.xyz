export const tagSlugify = (tag: string) => {
  return tag.toLowerCase().replace(/\s+/g, '-');
};

export const tagDeslugify = (tag: string) => {
  return tag.replace(/-/g, ' ');
};
