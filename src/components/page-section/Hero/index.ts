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
      <p class="dot lead date">${translate('date')}</p>
      <p class="dot lead location">${translate('location')}</p>

      <h2 class="dot lead secondTitle">${translate('secondTitle')}</h2>
      <p class="dot lead secondDescription">${translate('secondDescription')}</p>
      <div class="dot actions">
      </div>
    </div>
  `;
};

export default Hero;
