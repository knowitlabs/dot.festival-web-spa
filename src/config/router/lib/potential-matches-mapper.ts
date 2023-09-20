import { KIRouteType, KIRouterMatchType } from '../../../types/module/router';

export const potentialMatchesMapper = (
  route: KIRouteType
): KIRouterMatchType => {
  // javascript, i'm looking at you!!
  let pathName = decodeURI(location.pathname) + '';

  if (window.location.search) {
    const q:
      | Record<string, unknown>
      | {
          p: string;
        } = {};

    window.location.search
      .slice(1)
      .split('&')
      .forEach((v) => {
        const a = v.split('=');

        q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
      });

    if (q.p !== undefined) {
      pathName =
        window.location.pathname.slice(0, -1) +
        (q.p || '') +
        (q.q ? '?' + q.q : '') +
        window.location.hash;
    }
  }

  return {
    route: route,
    result: route.regex ? pathName.match(route.regex) : null
  };
};
