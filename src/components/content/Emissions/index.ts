import { addOnAfterAppRender } from '../../../lib/spa';

import { Link } from '../../navigation/Link';

import { getEmissions } from './lib/eco';

import leafIcon from '../../../../public/images/icons/extras/leaf.svg';

import './styles/emissions.styl';

const html = String.raw;

export const Emissions = () => {
  addOnAfterAppRender(() => {
    const emissionElement = document.getElementById('co2-emissions');

    if (!emissionElement) return;

    emissionElement.innerHTML = getEmissions();
  });

  return html`${Link({
    to: 'https://www.thegreenwebfoundation.org/',
    className: 'dot emissions',
    content: html`${leafIcon}
      <span class="dot" id="co2-emissions"> ${getEmissions()} </span>
      g/CO²`
  })}`;
};
