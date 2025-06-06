export const useFormatDate = (dateString: string) => {
  return new Intl.DateTimeFormat('zh-TW', { timeZone: 'UTC' }).format(new Date(dateString));
};
