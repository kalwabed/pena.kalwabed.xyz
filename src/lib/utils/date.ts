export const dateFormatter = (date: Date | string, options?: Intl.DateTimeFormatOptions): string => {
  if (!date) return '';

  return new Intl.DateTimeFormat(['id', 'en-US'], { ...options }).format(new Date(date));
};
