import { KIRouterMatchType, KIRoutesType } from '../../../types/module/router';
import { potentialMatchesMapper } from './potential-matches-mapper';

export const getRouterMatch = (routes: KIRoutesType): KIRouterMatchType => {
  // Test each route for a potential match.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const potentialMatches = routes.map(potentialMatchesMapper as any);

  let match = potentialMatches.find(
    (potentialMatch: KIRouterMatchType) => potentialMatch.result !== null
  ) as KIRouterMatchType;

  if (!match) {
    // javascript, i'm looking at you!!
    const pathName =
      decodeURI(location.pathname.replace('/dot.festival-web-spa', '')) + '';

    match = {
      route: { path: '/404', page: 'PageNotFoundPage', name: 'Page not found' },
      result: [pathName]
    };
  }

  return match;
};
