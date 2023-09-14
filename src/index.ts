'use strict';
import i18next from 'i18next';

import {
  DOMContentLoaded,
  eventAfterAppRender,
  popstate,
  languageChanged
} from './lib/global-events';

import './styles/index.styl';

// "they" said that we need this for the back button to work in a vanilla SPA
// but it is causing more trouble..
window.addEventListener('popstate', popstate);

document.addEventListener('DOMContentLoaded', DOMContentLoaded);

document.addEventListener('eventAfterAppRender', eventAfterAppRender);

i18next.on('languageChanged', languageChanged);
