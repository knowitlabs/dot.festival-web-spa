const html = String.raw;

import translate from '../../../lib/translate';
import { Link } from '../../navigation/Link';

import buttonBackground from '../../../assets/images/icons/extras/button.svg';

import './styles/weNeedYou.styl';

export const WeNeedYou = () => {
  return html`<section class="dot section we-need-you">
    <div class="dot container">
      <div class="dot content">
        <h2 class="dot">Call for speakers</h2>
        <p class="dot">
          Makers, designers, developers, number-crushers, project leaders, dots,
          market influencers, engineers, dot-dots, business innovators, and
          more.
        </p>
        ${Link({
    to: 'https://sessionize.com/knowit-festival-2025',
    server: true,
    className: 'button primary cfp border',
    content: `
    ${buttonBackground}
    ${buttonBackground}
    ${buttonBackground}
    ${buttonBackground}
    ${buttonBackground}
    ${translate('callForSpeakers')}`
  })}
      </div>
    </div>
  </section>`;
};
