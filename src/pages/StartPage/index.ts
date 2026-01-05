
import '../../components/action/Button/styles/button.styl';
import Hero from '../../components/page-section/Hero';
import { Container } from '../../components/layout/Container';
import { Section } from '../../components/layout/Section';
import { Details } from '../../components/page-section/Details';
import { Program } from '../../components/page-section/Program';

const html = String.raw;

export const StartPage = () => {
  return html`
   ${Section(Container(Hero()))} ${Container(Program())} ${Container(Details())}
  `;
};
