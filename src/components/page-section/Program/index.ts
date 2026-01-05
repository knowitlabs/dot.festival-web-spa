const html = String.raw;

import translate from '../../../lib/translate';
import { Link } from '../../navigation/Link';

import buttonBackground from '../../../assets/images/icons/extras/button.svg';

import './styles/program.styl';

export const Program = () => {
  return html`<section class="dot section we-need-you">
    <div class="dot container">
      <div class="dot content">
        <h2 class="dot we-need-you-title">See the program</h2>
        <p class="dot we-need-you-text">
          Explore all the great talks from makers, designers, developers, number-crushers, project leaders, dots,
          market influencers, engineers, dot-dots, business innovators, and
          more.
        </p>
        ${Link({
    to: 'https://knowit-festival-2025.sessionize.com/',
    server: true,
    className: 'button primary cfp border',
    content: `
    ${buttonBackground}
    ${buttonBackground}
    ${buttonBackground}
    ${buttonBackground}
    ${buttonBackground}
    ${translate('programApp')}`
  })}
      </div>
    </div>
  </section>`;
};
