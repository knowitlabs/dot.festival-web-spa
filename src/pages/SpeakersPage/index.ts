import { Container } from '../../components/layout/Container';
import { Section } from '../../components/layout/Section';
import { Meantime } from '../../features/Meantime';

const html = String.raw;

export const SpeakersPage = () => {
  return html`
    ${Section(Container('<h1 class="dot">Cooming soon!</h1>'))}
    ${Section(Container(Meantime()))}
  `;
};
