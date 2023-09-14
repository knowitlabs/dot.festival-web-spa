import { router } from '../../router';

import { bootstrap } from '../global-events/helpers';

export const languageChanged = (e: string) => {
  document.documentElement.lang = e;

  const routeDetails = router();

  bootstrap(routeDetails);
};
