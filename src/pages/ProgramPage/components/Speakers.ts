import { getSpeaker } from '../lib/get-speaker';
import { Speaker } from './Speaker';

const html = String.raw;

export const Speakers = ({ session, speakers }) => {
  let _html = '';

  for (const speaker of session.speakers) {
    const { id } = speaker;
    const speakerMeta = getSpeaker(id, speakers);

    _html += Speaker({ ...speaker, ...speakerMeta });
  }

  return html`<div class="dot speakers">${_html}</div>`;
};
