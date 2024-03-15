import { getDateDigits } from '../lib/get-date-digits';
import { getDuration } from '../lib/get-duration';
import { getTags } from '../lib/get-tags';
import { Speakers } from './Speakers';
import { Tags } from './Tags';

const html = String.raw;

export const SessionDialog = ({ session, speakers }) => {
  const { id, title, description, startsAt, endsAt, isPlenumSession } = session;
  const startsAtHumanReadable = getDateDigits(startsAt);
  const duration = getDuration(startsAt, endsAt);
  const tags = getTags(session);

  return html`<dialog class="dot session-dialog" id="modal_session_${id}">
    <time class="dot duration">
      ${startsAtHumanReadable} → ${duration} mins
    </time>
    <span class="dot session-dialog-title">${title}</span>
    <div class="dot session-dialog-content">${description}</div>
    ${Speakers({ session, speakers })} ${Tags({ tags })}
    <form method="dialog">
      <button
        class="dot session-dialog-button session-dialog-close-button button"
      >
        Close
      </button>
    </form>
  </dialog>`;
};
