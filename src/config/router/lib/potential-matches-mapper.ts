import { KIRouteType, KIRouterMatchType } from '../../../types/module/router';

export const potentialMatchesMapper = (
  route: KIRouteType
): KIRouterMatchType => {
  // javascript, i'm looking at you!!
  const pathName = decodeURI(location.pathname) + '';

  return {
    route: route,
    result: route.regex ? pathName.match(route.regex) : null
  };
};
