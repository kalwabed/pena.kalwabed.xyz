export const dateFormatter = (date: Date | string, options?: Intl.DateTimeFormatOptions): string => {
  if (!date) return '';

  return new Intl.DateTimeFormat(['id', 'en-US'], { day: 'numeric', month: 'short', year: 'numeric', ...options }).format(new Date(date));
};
