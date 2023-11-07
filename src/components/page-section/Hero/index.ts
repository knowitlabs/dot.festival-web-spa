import translate from '../../../lib/translate';
import { Link } from '../../navigation/Link';

import buttonBackground from '../../../assets/images/icons/extras/button.svg';

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

      <h1 class="dot">${translate('title')}</h1>
      <p class="dot lead">${translate('description')}</p>
      <div class="dot actions">
        ${Link({
    to: 'register',
    className: 'button primary border',
    content: `${buttonBackground}${buttonBackground}${buttonBackground}${buttonBackground}${buttonBackground}${translate(
      'primary-register'
    )}`
  })}
      </div>
    </div>
  `;
};

export default Hero;
