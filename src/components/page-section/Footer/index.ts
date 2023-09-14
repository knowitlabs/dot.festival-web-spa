import logo from '../../../../public/images/logo/knowit-logo.svg';
import { Emissions } from '../../content/Emissions';

import './styles/footer.styl';

const html = String.raw;
const Footer = async () => {
  return html`
    <footer class="dot footer">
      <div class="dot container">
        <span class="dot logo"> ${logo} </span>
        ${Emissions()}
      </div>
    </footer>
  `;
};

export default Footer;
