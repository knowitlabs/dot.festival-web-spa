export const getDuration = (from: string, to: string) => {
  const fromDate = new Date(from) as unknown as number;
  const toDate = new Date(to) as unknown as number;
  const diffMs = toDate - fromDate;
  const diffMins = diffMs / (1000 * 60);

  return diffMins;
};
