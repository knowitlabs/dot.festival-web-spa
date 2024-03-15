import { Session } from './Session';

export const Sessions = ({ rooms, speakers }) => {
  let trackIndex = 0;
  let _html = '';

  for (const room of rooms) {
    ++trackIndex;

    let sessionIndex = 0;

    for (const session of room.sessions) {
      ++sessionIndex;
      _html += Session({
        session,
        sessionIndex,
        numberOfRooms: rooms.length,
        speakers,
        trackIndex
      });
    }
  }

  return _html;
};
