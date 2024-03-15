import { cx } from '@knowitlabs/cx';
import { getDuration } from '../lib/get-duration';
import { Speakers } from './Speakers';
import { Tags } from './Tags';
import { getTags } from '../lib/get-tags';
import { getSessionFormat } from '../lib/get-session-format';
import { getTimeSlot } from '../lib/get-time-slot';
import { getDateDigits } from '../lib/get-date-digits';

const html = String.raw;

type SpeakerType = {
  id: string;
  name: string;
};

type CategoryItemType = {
  id: number;
  name: string;
};

type CategoryType = {
  id: number;
  name: string;
  categoryItems: CategoryItemType[];
  sort: number;
};

type SessionType = {
  id: string;
  title: string;
  description: string | null;
  startsAt: string;
  endsAt: string;
  isServiceSession: boolean;
  isPlenumSession: boolean;
  speakers: SpeakerType[];
  categories: CategoryType[];
  roomId: number;
  room: string;
  liveUrl: string | null;
  recordingUrl: string | null;
  status: string | null;
  isInformed: boolean;
  isConfirmed: boolean;
};

type SessionsObjectType = {
  sessions: SessionType[];
};

type SessionParamsType = {
  session: SessionType;
  sessionIndex: number;
  numberOfRooms: number;
  speakers: SpeakerType[];
  trackIndex: number;
};

export const Session = ({
  session,
  sessionIndex,
  numberOfRooms,
  speakers,
  trackIndex
}: SessionParamsType) => {
  const { id, title, description, startsAt, endsAt, isPlenumSession } = session;
  const startsAtHumanReadable = getDateDigits(startsAt);
  const timeSlotStart = getTimeSlot(startsAt);
  const timeSlotEnd = getTimeSlot(endsAt);
  const duration = getDuration(startsAt, endsAt);
  const tags = getTags(session);
  const formats = getSessionFormat(session);
  const classNames = cx(`dot session session-${sessionIndex}`, {
    ['is-plenum']: isPlenumSession,
    ['track-all']: isPlenumSession,
    ['is-workshop']: formats.includes(192696),
    meta: isPlenumSession,
    [`track-${trackIndex}`]: !isPlenumSession
  });

  let _style = `grid-row: ${timeSlotStart} / ${timeSlotEnd};`;

  if (isPlenumSession) {
    _style += `grid-column: track-1-start / track-${numberOfRooms}-end`;
  } else {
    _style += `grid-column: track-${trackIndex};`;
  }

  if (!isPlenumSession) {
    return html`<div
      tabindex="0"
      onclick="modal_session_${id}.showModal()"
      class="${classNames}"
      style="${_style}"
    >
      <div class="dot session-content">
        <time class="dot duration">
          ${startsAtHumanReadable} → ${duration} mins
        </time>
        <h4 class="dot session-title">${title}</h4>
        ${Speakers({ session, speakers })} ${Tags({ tags })}
      </div>
    </div>`;
  }

  return html`<div class="${classNames}" style="${_style}">
    <div class="dot session-content">
      <time class="dot duration">
        ${startsAtHumanReadable} → ${duration} mins
      </time>
      <h4 class="dot session-title">${title}</h4>
      ${Speakers({ session, speakers })} ${Tags({ tags })}
    </div>
  </div>`;
};
