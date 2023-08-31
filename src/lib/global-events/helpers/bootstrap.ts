import { KIRouteDetailsType } from '../../../@types/module/router';

import { init } from '../../spa';

import App from '../../../app';

export const bootstrap = (routeDetails: KIRouteDetailsType) => {
  init(App, routeDetails);
};
