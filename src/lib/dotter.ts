import { throttle } from './throttle';

/**
 * Get a random integer between `min` and `max`.
 *
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {number} a random integer
 */
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const xmlns = 'http://www.w3.org/2000/svg';
const drawDots = (e, dots = 25, element: HTMLElement | null = null) => {
  element = element || document.querySelector('body');

  if (!element) return;

  if (document.querySelector('.dot.dotter')) {
    document.querySelector('.dot.dotter')?.remove();
  }

  const svgElement = document.createElementNS(xmlns, 'svg');
  const height = window.innerHeight;
  const width = window.innerWidth;

  svgElement.classList.add('dot');
  svgElement.classList.add('dotter');

  svgElement.setAttribute('role', 'presentation');
  svgElement.setAttribute('xmlns', xmlns);
  svgElement.setAttribute('fill', 'currentColor');
  svgElement.setAttribute('viewBox', `0 0 ${width} ${height}`);

  for (let i = 0; i < dots; i++) {
    const x_coord = getRandomInt(0, width);
    const y_coord = getRandomInt(0, height);
    const circleElement = document.createElementNS(xmlns, 'circle');

    circleElement.setAttribute('cx', `${x_coord}`);
    circleElement.setAttribute('cy', `${y_coord}`);
    circleElement.setAttribute('r', '2');

    const textElement = document.createElementNS(xmlns, 'text');

    textElement.innerHTML = `${i}`;
    textElement.setAttribute('x', `${x_coord + 8}`);
    textElement.setAttribute('y', `${y_coord + 8}`);

    svgElement.appendChild(circleElement);
    svgElement.appendChild(textElement);
  }

  element.appendChild(svgElement);
};

export const dotter = () => {
  window.removeEventListener('resize', throttle(drawDots, 300));
  window.addEventListener('resize', throttle(drawDots, 300));
  drawDots(null);
};
