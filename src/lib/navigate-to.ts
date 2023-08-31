import { init } from './spa';

import App from '../app';
import { router } from '../router';

export const navigateTo = async (url: string) => {
  history.pushState(null, '', url);

  const routeDetails = router();

  init(App, routeDetails);
};
