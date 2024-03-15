import { TrackSlot } from './TrackSlot';

export const TrackSlots = ({ rooms }) => {
  let trackSlotsIndex = 0;
  let _html = '';

  for (const room of rooms) {
    ++trackSlotsIndex;
    _html += TrackSlot({ track: room, index: trackSlotsIndex });
  }

  return _html;
};
