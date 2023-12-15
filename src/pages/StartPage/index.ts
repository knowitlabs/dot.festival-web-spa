import Hero from '../../components/page-section/Hero';
import '../../components/action/Button/styles/button.styl';
import { Container } from '../../components/layout/Container';
import { Section } from '../../components/layout/Section';
import { WhatHappenedToKDS } from '../../features/WhatHappenedToKDS';
import { WeNeedYou } from '../../components/page-section/WeNeedYou';
import { Details } from '../../components/page-section/Details';
import { SpeakerWall } from '../../features/SpeakerWall';

const html = String.raw;

export const StartPage = () => {
  return html`
    ${Section(Container(Hero()))} ${WeNeedYou()}${Details()} ${SpeakerWall()}
    ${WhatHappenedToKDS()}
  `;
};
