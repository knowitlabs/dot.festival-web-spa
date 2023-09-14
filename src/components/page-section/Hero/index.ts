import translate from '../../../lib/translate';
import { Link } from '../../navigation/Link';
import './styles/hero.styl';

const html = String.raw;
const Hero = async () => {
  return html`
    <div class="dot hero">
      <img
        class="dot image"
        role="presentation"
        src="images/8dddb761187601b14ad9d911f36d9fba.png"
      />
      <h1 class="dot">${translate('title')}</h1>
      <p class="dot lead">${translate('description')}</p>
      <!--<div class="dot actions">
      ${Link({
    to: 'register',
    className: 'button primary',
    content: translate('primary-register')
  })}
    </div>-->
    </div>
  </div>`;
};

export default Hero;
