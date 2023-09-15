import { router } from '../router';
import { bootstrap } from '../global-events/helpers/bootstrap';

export const popstate = async () => {
  const routeDetails = router();

  await bootstrap(routeDetails);
};
