import { Container } from '../../components/layout/Container';
import { Section } from '../../components/layout/Section';

import { addOnAfterAppRender, addOnClick, useState } from '../../config/spa';

import './styles/program.styl';
import { getSessionizeData } from './lib/get-sessionize-data';
import { TimeSlots } from './components/TimeSlots';
import { TrackSlots } from './components/TrackSlots';
import { Sessions } from './components/Sessions';
import { SessionDialogs } from './components/SessionDialogs';

const html = String.raw;
const handleDialogClose = (e) => {
  if (e.key === 'Escape') {
    const openDialogs = document.querySelectorAll('dialog[open]');

    if (openDialogs && openDialogs.length) {
      openDialogs.forEach((dialog: HTMLDialogElement) => dialog.close());
    }
  }
};

export const ProgramPage = async () => {
  document.removeEventListener('keydown', handleDialogClose);
  document.addEventListener('keydown', handleDialogClose);

  const [activeTab, setActiveTab] = useState('tab-1', 'program');

  addOnAfterAppRender(() => {
    const tabElements = document.querySelectorAll('.dot.tabs .dot.tab-link');

    let tabIndex = 1;

    for (const tabElement of tabElements) {
      const id = `tab-${tabIndex}`;
      const href = tabElement.getAttribute('href') as string;
      const tabSectionElementSelector = href;
      const tabSectionElement = document.querySelector(
        tabSectionElementSelector
      );

      if (tabSectionElement) {
        tabSectionElement.classList.remove('is-active');
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

      activeTabElement.classList.add('is-active');

      const activeTabSectionElement = document.querySelector(href);

      if (activeTabSectionElement) {
        activeTabSectionElement.classList.add('is-active');
      }
    }
  });

  const { schedule, speakers } = await getSessionizeData();
  const sessionizeHTML = html`
    <ul class="dot tabs">
      <li class="dot tab-item">
        <a class="dot tab-link button" href="#day-1" id="tab-1">Friday</a>
      </li>
      <li class="dot tab-item">
        <a class="dot tab-link button" href="#day-2" id="tab-2">Saturday</a>
      </li>
    </ul>
    ${schedule
    .map((day, index) => {
      const { rooms } = day;

      return html`<div class="dot tab-container" id="day-${index + 1}">
          <div class="dot schedule">
            ${TimeSlots()} ${TrackSlots({ rooms })}
            ${Sessions({ rooms, speakers })}
          </div>
          ${SessionDialogs({ rooms, speakers })}
        </div>`;
    })
    .join('\n')}
  `;

  return html`${Section(Container(sessionizeHTML, 'program'))}`;
};
