export const coundown = () => {
  const daysElement = document.getElementById('days');
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');

  if (!daysElement || !hoursElement || !minutesElement || !secondsElement) {
    return;
  }

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const registrationOpens = new Date('nov 7 2023 12:00:00');
  const countDown = new Date(registrationOpens).getTime();
  const x = setInterval(function () {
    const now = new Date().getTime();
    const pastDate = countDown - now;

    daysElement.innerText = '' + Math.floor(pastDate / day);
    hoursElement.innerText = '' + Math.floor((pastDate % day) / hour);
    minutesElement.innerText = '' + Math.floor((pastDate % hour) / minute);
    secondsElement.innerText = '' + Math.floor((pastDate % minute) / second);

    //do something later when date is reached
    if (pastDate < 0) {
      clearInterval(x);
    }
    //seconds
  }, 0);
};
