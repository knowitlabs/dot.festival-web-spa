import { KIEventType, KINavigateToEventType } from '../../types/module/events';

import { getBytesTransferred, getEmissions } from '../../utils/eco';

import { router } from '../router';
import { bootstrap } from '../global-events/helpers/bootstrap';
import { eventMatches } from '../event-matches';
import { navigateTo } from '../navigate-to';
import { formatBytes } from '../../utils/format-bytes';

export const DOMContentLoaded = async () => {
  document.addEventListener('navigateTo', (e: KINavigateToEventType) => {
    const { to } = e.detail;

    navigateTo(to);
  });
  document.body.addEventListener(
    'click',
    async (e: KIEventType<HTMLElement>) => {
      const el = eventMatches(e, '[data-link]') as HTMLAnchorElement;

      if (el) {
        e.preventDefault();
        await navigateTo(el.href);
      }
    }
  );

  const routeDetails = router();

  await bootstrap(routeDetails);

  const emissionElement = document.getElementById('co2-emissions');

  if (!emissionElement) return;

  emissionElement.innerHTML = `${formatBytes(
    getBytesTransferred()
  )} => ${getEmissions()}`;
};
