export const getDateDigits = (date: string) =>
  `${new Date(date).getHours()}:${`${new Date(date).getMinutes()}`.padStart(
    2,
    '0'
  )}`;
