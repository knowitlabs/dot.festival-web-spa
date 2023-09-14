import translate from '../../../lib/translate';

import '../../action/Button/styles/button.styl';

import { Link } from '../../navigation/Link';

const html = String.raw;

export const Meantime = () => {
  return html`<div class="dot text-box green">
        <h2 class="dot title">${translate('inTheMeanTimeTitle')}</h2>
        <p class="dot description">${translate('inTheMeanTimeDescription')}</p>
        ${Link({
    to: 'https://sessionize.com/dot-festival-2024-oslo/',
    server: true,
    content: translate('callForSpeakers'),
    className: 'dot button',
    style: 'margin-bottom: 4rem;'
  })}
        <div class="dot layout-text three-columns">
          <div class="dot">
            <h3 class="dot">${translate('callForSpeakers')}</h3>
            <p class="dot">
            ${translate('callForSpeakersText1')}
            </p>
            <p class="dot">
            ${translate('callForSpeakersText2')}
            </p>
          </div>
          <div class="dot">
            <h3 class="dot">${translate('isThereAThemeINeedToFollow')}</h3>
            <p class="dot">
              ${translate('isThereAThemeINeedToFollowText')}
            </p>
          </div>
          <div class="dot">
            <h3 class="dot">${translate('makeItCrossDisciplinary')}</h3>
            <p class="dot">
              ${translate('makeItCrossDisciplinaryText')}
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
};
