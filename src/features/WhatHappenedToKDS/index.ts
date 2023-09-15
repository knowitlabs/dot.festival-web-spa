import translate from '../../lib/translate';

const html = String.raw;

export const WhatHappenedToKDS = () => {
  return html`<div class="dot text-box white apple">
    <h2 class="dot title">${translate('whatHappenedToKDSTitle')}</h2>
    <p class="dot description" style="max-width:60%;">
      ${translate('whatHappenedToKDSDescription')}
    </p>
  </div>`;
};
