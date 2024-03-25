export const getTimeSlot = (date: string) => {
  const timeSlotDate = new Date(date);

  timeSlotDate.setMinutes(Math.ceil(timeSlotDate.getMinutes() / 5) * 5);

  const hours = (timeSlotDate.getHours() + '').padStart(2, '0');
  const minutes = (timeSlotDate.getMinutes() + '').padStart(2, '0');
  const timeSlot = `${hours}${`${minutes}`}`;

  return `time-${timeSlot}`;
};
