import { KIRouteDetailsType } from '../../../types/module/router';

import { init } from '../../spa';

import App from '../../../app';

export const bootstrap = async (routeDetails: KIRouteDetailsType) => {
  await init(App, routeDetails);
};
