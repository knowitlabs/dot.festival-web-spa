/* eslint-disable no-console */
import { KIRouterMatchType } from './types/module/router';
import Footer from './components/page-section/Footer';
import Header from './components/page-section/Header';
import { dotter } from './lib/dotter';
import { getParams } from './config/get-params';
import { addOnAfterAppRender } from './config/spa';
// import * as PAGES from './pages';

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
  console.log(_page);

  let content = '';

  if (_page === 'AboutPage') {
    const { AboutPage: currentPage } = await import('./pages/AboutPage');

    content = currentPage();
  } else if (_page === 'StartPage') {
    const { StartPage: currentPage } = await import('./pages/StartPage');

    content = currentPage();
  } else if (_page === 'PageNotFoundPage') {
    const { PageNotFoundPage: currentPage } = await import(
      './pages/PageNotFoundPage'
    );

    content = currentPage();
  } else if (_page === 'CodeOfConductPage') {
    const { CodeOfConductPage: currentPage } = await import(
      './pages/CodeOfConductPage'
    );

    content = currentPage();
  } else if (_page === 'RegisterPage') {
    const { RegisterPage: currentPage } = await import('./pages/RegisterPage');

    content = currentPage();
  } else if (_page === 'RegisterReceiptPage') {
    const { RegisterReceiptPage: currentPage } = await import(
      './pages/RegisterReceiptPage'
    );

    content = currentPage();
  } else if (_page === 'ErrorPage') {
    const { ErrorPage: currentPage } = await import('./pages/ErrorPage');

    content = currentPage({ params: _params });
  } else {
    const { PageNotFoundPage: currentPage } = await import(
      './pages/PageNotFoundPage'
    );

    content = currentPage();
  }

  return html`${await Header()}
    <main class="dot">${content}</main>
    ${await Footer()}`;
};

export default App;
