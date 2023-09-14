import Hero from '../../components/page-section/Hero';
import { Link } from '../../components/navigation/Link';

import { EditorialBanner } from '../../components/page-section/EditorialBanner';
import { Meantime } from '../../components/content/Meantime';

import arrowIcon from '../../../public/images/icons/ui/fi-ts-arrow-small-right.svg';

import '../../components/action/Button/styles/button.styl';

const html = String.raw;

export const StartPage = async () => {
  return html`
    <section class="dot section">
      <div class="dot container">${await Hero()}</div>
    </section>
    <section class="dot section">
      <div class="dot container">${Meantime()}</div>
    </section>
    <section class="dot section" style="display:none;">
      <div class="dot container center">
        ${EditorialBanner({
    image: 'images/editorial/KDS2023-704602',
    focal: 'center top',
    content: `
    <span class="dot title">Upcoming event</span>
    <span class="dot icon" role="presentation">${arrowIcon}</span>
    <p class="dot">
      lorum ipsum dolor sit amet..
      </p>
      <p class="dot">
      ${Link({
    to: 'https://www.knowit.eu/career/',
    content: 'A link',
    server: true
  })}</p>`
  })}
      </div>
    </section>
    <section class="dot section" style="display:none;">
      <div class="dot container">
        <h2 class="dot speaker-wall-title">${translate('speakerWallTitle')}</h2>
        <div class="dot speaker-wall" id="speaker-wall"></div>
      </div>
    </section>
    <section class="dot section" style="display:none;">
      <div class="dot container">
        <div class="dot text-box white apple">
          <h2 class="dot title">${translate('whatHappenedToKDSTitle')}</h2>
          <p class="dot description" style="max-width:60%;">
            ${translate('whatHappenedToKDSDescription')}
          </p>
        </div>
      </div>
    </section>
  `;
};
