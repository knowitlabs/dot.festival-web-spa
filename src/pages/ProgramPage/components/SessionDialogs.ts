import { SessionDialog } from './SessionDialog';

export const SessionDialogs = ({ rooms, speakers }) => {
  let _html = '';

  for (const room of rooms) {
    for (const session of room.sessions) {
      if (session.isPlenumSession) continue;

      _html += SessionDialog({ session, speakers });
    }
  }

  return _html;
};
