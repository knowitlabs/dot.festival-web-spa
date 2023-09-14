// import i18next from 'i18next';

import { Link } from '../../navigation/Link';
// import { addOnClick, useState } from '../../../lib/spa';
import translate from '../../../lib/translate';

import './styles/header.styl';

import logo from '../../../../public/images/logo/logo.svg';
import earthIcon from '../../../../public/images/icons/ui/fi-ts-earth-europa.svg';
// import { cx } from '@knowitlabs/cx';

const html = String.raw;
const Header = async () => {
  // const [isOpen, setIsOpen] = useState(false, 'changeLanguage');

  // addOnClick('de', () => {
  //   i18next.changeLanguage('de');
  //   setIsOpen(false);
  // });
  // addOnClick('no', () => {
  //   i18next.changeLanguage('no');
  //   setIsOpen(false);
  // });
  // addOnClick('sv', () => {
  //   i18next.changeLanguage('sv');
  //   setIsOpen(false);
  // });
  // addOnClick('da', () => {
  //   i18next.changeLanguage('da');
  //   setIsOpen(false);
  // });
  // addOnClick('en', () => {
  //   i18next.changeLanguage('en');
  //   setIsOpen(false);
  // });
  // addOnClick('fi', () => {
  //   i18next.changeLanguage('fi');
  //   setIsOpen(false);
  // });
  // addOnClick('pl', () => {
  //   i18next.changeLanguage('pl');
  //   setIsOpen(false);
  // });
  // addOnClick('uk', () => {
  //   i18next.changeLanguage('uk');
  //   setIsOpen(false);
  // });

  // addOnClick('change-language-toggle', () => {
  //   setIsOpen(!isOpen);
  // });

  // const changeLanguageDropdownClassNames = cx(
  //   'dot dropdown change-language-dropdown',
  //   {
  //     'is-open': isOpen as boolean
  //   }
  // );

  return html`
    <header class="dot header">
      <div class="dot container">
        ${Link({ to: '/', content: logo, className: 'logo' })}
        <div class="dot global-navigation">
          ${Link({
    to: 'https://sessionize.com/dot-festival-2024-oslo/',
    server: true,
    className: 'button primary cfp',
    content: translate('callForSpeakers')
  })}
          <div class="dot" style="display:none;">
            <button
              class="dot dropdown-toggle button"
              id="change-language-toggle"
            >
              ${earthIcon}
            </button>
            <ul class="dot dropdown-list">
              <li class="dot dropdown-item">
                <button class="dot dropdown-action" id="de">🇩🇪 Deutsch</button>
              </li>
              <li class="dot dropdown-item">
                <button class="dot dropdown-action" id="no">🇳🇴 Norsk</button>
              </li>
              <li class="dot dropdown-item">
                <button class="dot dropdown-action" id="sv">🇸🇪 Svenska</button>
              </li>
              <li class="dot dropdown-item">
                <button class="dot dropdown-action" id="da">🇩🇰 Dansk</button>
              </li>
              <li class="dot dropdown-item">
                <button class="dot dropdown-action" id="fi">
                  🇫🇮 Suomalainen
                </button>
              </li>
              <li class="dot dropdown-item">
                <button class="dot dropdown-action" id="en">🏴󠁧󠁢󠁥󠁮󠁧󠁿 English</button>
              </li>
              <li class="dot dropdown-item">
                <button class="dot dropdown-action" id="pl">🇵🇱 Polski</button>
              </li>
              <li class="dot dropdown-item">
                <button class="dot dropdown-action" id="uk">
                  🇺🇦 Українська
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  `;
};

export default Header;
