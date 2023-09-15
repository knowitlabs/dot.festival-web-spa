import { router } from '../router';

import { bootstrap } from '../global-events/helpers/bootstrap';

export const languageChanged = async (e: string) => {
  document.documentElement.lang = e;

  const routeDetails = router();

  await bootstrap(routeDetails);
};
