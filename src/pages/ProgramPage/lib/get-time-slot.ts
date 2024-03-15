export const getTimeSlot = (date: string) => {
  const timeSlotDate = new Date(date);

  timeSlotDate.setMinutes(Math.ceil(timeSlotDate.getMinutes() / 5) * 5);

  const hours = timeSlotDate.getHours();
  const minutes = timeSlotDate.getMinutes();
  const timeSlot = `${hours}${`${minutes}`.padStart(2, '0')}`;

  return `time-${timeSlot}`;
};
