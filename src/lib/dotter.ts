import { waitFor } from '@knowitlabs/wait-for';

/**
 * Get a random integer between `min` and `max`.
 *
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {number} a random integer
 */
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const dotter = (dots = 20) => {
  const element = document.querySelector('#app');

  if (!element) return;

  waitFor(10);

  const { height, width } = element.getBoundingClientRect();
  const points: Record<string, number>[] = [];

  for (let i = 0; i < dots; i++) {
    const x_coord = getRandomInt(0, width);
    const y_coord = getRandomInt(0, height);

    points.push({ x_coord, y_coord });
  }

  points.forEach((point) => {
    const pointElement = document.createElement('span');
    const { x_coord, y_coord } = point;

    pointElement.classList.add('dot');
    pointElement.classList.add('point');
    pointElement.style['position'] = 'absolute';
    pointElement.style['left'] = `${x_coord}px`;
    pointElement.style['top'] = `${y_coord}px`;

    element.appendChild(pointElement);
  });
};
