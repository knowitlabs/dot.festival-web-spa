/* eslint-disable no-console */
import { KIRouterMatchType } from './@types/module/router';
import { getParams } from './lib/get-params';
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

  const content = await PAGES[_page]({ params: _params });

  return html` <main class="ki">${content}</main> `;
};

export default App;
