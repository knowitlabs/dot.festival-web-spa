import { addOnAfterAppRender } from '../../config/spa';

import { Link } from '../../components/navigation/Link';

import { getEmissions, getBytesTransferred } from '../../utils/eco';
import { formatBytes } from '../../utils/format-bytes';

import leafIcon from '../../assets/images/icons/extras/leaf.svg';

import './styles/emissions.styl';

const html = String.raw;

export const Emissions = () => {
  addOnAfterAppRender(() => {
    const emissionElement = document.getElementById('co2-emissions');

    if (!emissionElement) return;

    emissionElement.innerHTML = `${formatBytes(
      getBytesTransferred()
    )} => ${getEmissions()}`;
  });

  return html`${Link({
    to: 'https://www.thegreenwebfoundation.org/',
    className: 'dot emissions',
    content: html`${leafIcon}
      <span class="dot" id="co2-emissions">
        ${formatBytes(getBytesTransferred())} => ${getEmissions()}
      </span>
      g/CO²`
  })}`;
};
