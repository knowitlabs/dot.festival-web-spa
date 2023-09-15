export type KIRouteType = {
  name: string;
  path?: string;
  page?: string;
  regex?: RegExp;
  layout?: string;
};

export type KIPreviousRouteType = {
  name: string;
};

export type KIRoutesType = KIRouteType[];

export type KIRouteDetailsType = {
  // eslint-disable-next-line no-unused-vars
  page: KIRouterMatchType;
  // eslint-disable-next-line no-unused-vars
  previousPage: KIRouterMatchType;
  previousParams: unknown;
  currentParams: unknown;
  paramsChanged: boolean;
  routeChanged: boolean;
};

export type KIRouterMatchType = {
  route: KIRouteType;
  result?: RegExpMatchArray | null;
};
