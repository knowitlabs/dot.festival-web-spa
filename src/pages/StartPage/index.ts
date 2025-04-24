import Hero from '../../components/page-section/Hero';
import '../../components/action/Button/styles/button.styl';
import { Container } from '../../components/layout/Container';
import { Section } from '../../components/layout/Section';
import { WhatHappenedToKDS } from '../../features/WhatHappenedToKDS';
import { Details } from '../../components/page-section/Details';
import { WeNeedYou } from '../../components/page-section/WeNeedYou';

const html = String.raw;

export const StartPage = () => {
  return html`
    ${Section(Container(Hero()))} ${WeNeedYou()} ${Details()}
    ${/*WhatHappenedToKDS()*/""}
  `;
};
