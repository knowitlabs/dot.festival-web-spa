import { Meantime } from '../../features/Meantime';

import Hero from '../../components/page-section/Hero';
import '../../components/action/Button/styles/button.styl';
import { Container } from '../../components/layout/Container';
import { Section } from '../../components/layout/Section';

const html = String.raw;

export const StartPage = () => {
  return html`
    ${Section(Container(Hero()))} ${Section(Container(Meantime()))}
  `;
};
