export const useFormatDate = (
  dateString: string | number | Date | null | undefined,
) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("zh-TW", { timeZone: "UTC" }).format(date);
};
