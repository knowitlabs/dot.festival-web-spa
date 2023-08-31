import Header from '../../components/Header';
import Hero from '../../components/Hero';

const html = String.raw;

export const StartPage = async () => {
  return html`<div class="dot container">${await Header()} ${await Hero()}</div>
    <div class="dot container"></div>`;
};
