import logo from '../../../../public/images/logo/logo.svg';

import './styles/header.styl';

const html = String.raw;
const Header = async () => {
  return html`
    <header class="dot header">
      <div class="dot container">
        <span class="dot logo"> ${logo} </span>
      </div>
    </header>
  `;
};

export default Header;
