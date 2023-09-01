import logo from '../../../../public/images/logo/logo.svg';
import { Link } from '../../navigation/Link';

import './styles/header.styl';

const html = String.raw;
const Header = async () => {
  return html`
    <header class="dot header">
      <div class="dot container">
        <span class="dot logo"> ${logo} </span>
        ${Link({
    to: 'https://sessionize.com/dot-festival-2024-oslo/',
    server: true,
    className: 'button primary cfp',
    content: 'Call for speakers'
  })}
      </div>
    </header>
  `;
};

export default Header;
