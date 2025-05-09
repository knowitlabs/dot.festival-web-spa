import { Link } from '../../components/navigation/Link';
import { FAQ } from '../../components/page-section/FAQ';
import buttonBackground from '../../assets/images/icons/extras/button.svg';
import translate from '../../lib/translate';

import './styles/about.styl';

const html = String.raw;

export const AboutPage = () => {
return html`<section class="dot section">
  <div class="dot container">
    <h1 class="dot about-title">About the festival</h1>
    <p class="dot about-leading-paragraph">
    The ambition for Knowit Festival will be held annually and that its location varies from year to year.
    </p>
  </div>

  <div class="dot container dot-history-container">
    <div class="dot content">
        <h2 class="dot history-title">History</h2>
        <p class="dot history-text">
          What started as a gathering for developers has grown into a celebration of all the amazing minds at Knowit. It’s more than just a conference. It’s a space that highlights our collaborative spirit and our commitment to working across disciplines to create impact.
        </p>
        <p class="dot history-text"> 
        Together, we make it happen.
        </p>
          ${Link({
      to: 'https://www.knowit.eu/about-knowit/our-policies/',
      server: true,
      className: 'button primary cfp border white history-button',
      content: `
      ${buttonBackground}
      ${buttonBackground}
      ${buttonBackground}
      ${buttonBackground}
      ${buttonBackground}
      ${translate('codeOfConduct')}`
    })}
    </div>
  </div>

  <div class="dot container">
    <h2 class="dot about-faq-title">Frequently asked questions</h2>
    ${FAQ({
      questions: [
        {
          q: 'Is the travel costs covered by the conference cost?',
          a: 'The conference price does not cover travel, nor do we book for people.'
        },
        {
          q: 'Where can I store my luggage?',
          a: 'The conference facility will have an area where you can keep your luggage before hotel check-in and after hotel check-out. The hotel may also keep your luggage'
        },
        {
          q: 'Which hotel am I staying at?',
          a: 'TBD'
        }
      ]
    })}
  </div>
</section>
`;
};
