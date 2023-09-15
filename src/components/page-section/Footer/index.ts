import { Emissions } from '../../../features/Emissions';

import logo from '../../../assets/images/logo/knowit-logo.svg';

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
