import translate from '../../../lib/translate';
import { Link } from '../../navigation/Link';

import { CountDown } from './CountDown';

import './styles/hero.styl';

const html = String.raw;
const Hero = () => {
  return html`
    <div class="dot hero">
      <img
        class="dot image"
        role="presentation"
        src="/images/illustrations/dot_illustration.png"
      />
      <!--
      <h1 class="dot">${translate('title')}</h1>
      <p class="dot lead">${translate('description')}</p>
      <div class="dot actions">
      ${Link({
    to: 'register',
    className: 'button primary',
    content: translate('primary-register')
  })}
    </div>-->
    </div>

    ${CountDown()}
  `;
};

export default Hero;
