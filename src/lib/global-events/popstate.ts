import { router } from '../../router';
import { bootstrap } from '../global-events/helpers';

export const popstate = () => {
  const routeDetails = router();

  bootstrap(routeDetails);
};
