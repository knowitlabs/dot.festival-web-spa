import { Container } from '../../components/layout/Container';
import { Section } from '../../components/layout/Section';

import { addOnAfterAppRender, addOnClick, useState } from '../../config/spa';

import './styles/program.styl';

const html = String.raw;

export const ProgramPage = async () => {
  const [activeTab, setActiveTab] = useState('tab-1', 'program');

  addOnAfterAppRender(() => {
    const tabElements = document.querySelectorAll('.sz-tabs .sz-tabs__link');

    let tabIndex = 1;

    for (const tabElement of tabElements) {
      const id = `tab-${tabIndex}`;
      const href = tabElement.getAttribute('href') as string;
      const tabSectionElementSelector = href;
      const tabSectionElement = document.querySelector(
        tabSectionElementSelector
      );

      if (tabSectionElement) {
        tabSectionElement.classList.remove('sz-tab-container--active');
      }

      tabElement.setAttribute('id', id);

      addOnClick(id, (e: MouseEvent) => {
        e.preventDefault();
        setActiveTab(id);
      });

      tabIndex++;
    }

    const activeTabElement = document.querySelector(`#${activeTab}`);

    if (activeTabElement) {
      const href = activeTabElement.getAttribute('href') as string;

      activeTabElement.classList.add('sz-tab-container--active');

      const activeTabSectionElement = document.querySelector(href);

      if (activeTabSectionElement) {
        activeTabSectionElement.classList.add('sz-tab-container--active');
      }
    }
  });

  const response = await fetch(
    'https://sessionize.com/api/v2/owci0trj/view/GridSmart'
  );
  const sessionizeHTML = await response.text();

  return html`${Section(Container(sessionizeHTML, 'schedule'))}`;
};
