import { KIRouterMatchType } from '../types/module/router';

export const getParams = (match: KIRouterMatchType) => {
  if (!match.result) return {};

  const values = match.result.slice(1);

  if (!match.route.path) return {};

  const keys = Array.from(match.route.path.matchAll(/:([\w]+)/g)).map(
    (result: string[]) => result[1]
  );

  return Object.fromEntries(keys.map((key, i) => [key, values[i]]));
};
