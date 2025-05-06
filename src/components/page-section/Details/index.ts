const html = String.raw;

import './styles/details.styl';
import buttonBackground from '../../../assets/images/icons/extras/button.svg';
import { Link } from '../../navigation/Link';
import translate from '../../../lib/translate';

export const Details = () => {
  return html`<section class="dot section details">
    <div class="dot container">
      <div class="dot content">
        <h2 class="dot when">Together we connect the dots!</h2>
        <p class="dot pretitle second">Knowit Festival is a conference for Knowit employees, by knowit employees.</p>
        ${Link({
          to: 'about',
          className: 'button primary cfp border white',
          content: `
          ${buttonBackground}
          ${buttonBackground}
          ${buttonBackground}
          ${buttonBackground}
          ${buttonBackground}
          ${translate('aboutKnowitFestival')}`
        })}
      </div>
    </div>
  </section>`;
};
