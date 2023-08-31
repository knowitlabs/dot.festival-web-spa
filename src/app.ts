/* eslint-disable no-console */
import { KIRouterMatchType } from './@types/module/router';
import Footer from './components/Footer';
import Header from './components/Header';
import { dotter } from './lib/dotter';
import { getParams } from './lib/get-params';
import { addOnAfterAppRender } from './lib/spa';
import * as PAGES from './pages';

const html = String.raw;
const App = async (match: KIRouterMatchType, params: unknown) => {
  let _page: string;
  let _params = params;

  if (typeof match === 'string') {
    _params = params;
    _page = 'ErrorPage';
  } else {
    const { route } = match;
    const { page } = route;

    if (!page) {
      _page = 'ErrorPage';
    } else {
      _page = page;
    }

    _params = getParams(match);
  }

  globalThis.activeElement = document.activeElement;
  console.info(`Rendering: \`${_page}\``);

  addOnAfterAppRender(() => {
    dotter();
  });

  const content = await PAGES[_page]({ params: _params });

  return html`${await Header()}
    <main class="dot">${content}</main>
    ${await Footer()}`;
};

export default App;
