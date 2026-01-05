// import i18next from 'i18next';

import { Link } from '../../navigation/Link';
// import { addOnClick, useState } from '../../../lib/spa';
import translate from '../../../lib/translate';

import './styles/header.styl';

//import logo from '../../../assets/images/logo/logo.svg';
import logo from '../../../assets/images/logo/knowit-logo.svg';
import earthIcon from '../../../assets/images/icons/ui/fi-ts-earth-europa.svg';
// import { cx } from '@knowitlabs/cx';

const html = String.raw;
const Header = async () => {

  return html`
    <header class="dot header">
      <div class="dot container">
        ${Link({ to: '/', content: logo, className: 'header logo' })}
        <div class="dot global-navigation">
          <!--<span
            class="dot"
            style="font-size:1.5rem; line-height: 1.33; font-weight: 500;"
            >More coming soon!</span
          >-->
          ${Link({
    to: '/register',
    className: 'header button primary cfp',
    content: `
            ${translate('primary-register')}`
  })}
          ${Link({
    to: '/about',
    className: 'header button',
    content: 'About'
  })}
          ${Link({
    to: '/practicalities',
    className: 'header button',
    content: 'Practicalities'
  })}
           ${Link({
    to: 'https://knowit-festival-2025.sessionize.com/',
    className: 'header button',
    content: 'Program'
  })}
        </div>
      </div>
    </header>
  `;
};

export default Header;
