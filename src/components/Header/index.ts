import logo from '../../../public/images/logo/logo.svg';

import './styles/header.styl';

const html = String.raw;
const Header = async () => {
  return html`
    <header class="dot header"><span class="dot logo">${logo}</span></header>
  `;
};

export default Header;
