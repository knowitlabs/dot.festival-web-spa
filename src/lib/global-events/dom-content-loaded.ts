import { KIEventType, KINavigateToEventType } from '../../@types/module/events';

import { router } from '../../router';

import { bootstrap } from '../global-events/helpers';
import { eventMatches } from '../event-matches';
import { navigateTo } from '../navigate-to';

export const DOMContentLoaded = () => {
  document.addEventListener('navigateTo', (e: KINavigateToEventType) => {
    const { to } = e.detail;

    navigateTo(to);
  });
  document.body.addEventListener('click', (e: KIEventType<HTMLElement>) => {
    const el = eventMatches(e, '[data-link]') as HTMLAnchorElement;

    if (el) {
      e.preventDefault();
      navigateTo(el.href);
    }
  });

  const routeDetails = router();

  bootstrap(routeDetails);
};
