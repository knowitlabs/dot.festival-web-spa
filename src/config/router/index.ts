import { KIRouteType, KIRouterMatchType } from '../../types/module/router';
import { getParams } from '../../config/get-params';

import { getRouterMatch } from './lib/get-router-match';
import { routes } from './routes';

let previousPage: KIRouterMatchType = {
  route: { name: 'none' }
};
let previousParams = {};

export const router = () => {
  const page: KIRouterMatchType = getRouterMatch(routes);
  const currentParams = getParams(page);

  let paramsChanged = false;
  let routeChanged = false;

  if (previousPage.route.name === (page.route as KIRouteType).name) {
    if (JSON.stringify(previousParams) !== JSON.stringify(currentParams)) {
      paramsChanged = true;
      routeChanged = true;
      window.scrollTo(0, 0);
      document.dispatchEvent(
        new CustomEvent('eventParamsChanged', {
          bubbles: true,
          cancelable: true,
          detail: {
            previousParams,
            currentParams
          }
        })
      );
    }
  } else {
    routeChanged = true;
    window.scrollTo(0, 0);
  }

  previousParams = getParams(page);
  previousPage = page as KIRouterMatchType;

  const routeDetails = {
    page,
    previousPage,
    previousParams,
    currentParams,
    paramsChanged,
    routeChanged
  };

  if (routeChanged) {
    document.dispatchEvent(
      new CustomEvent('eventBeforeRouteChanged', {
        bubbles: true,
        cancelable: true,
        detail: {
          routeDetails
        }
      })
    );
  }

  return routeDetails;
};
