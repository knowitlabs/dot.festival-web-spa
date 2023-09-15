import { addOnAfterAppRender } from '../../config/spa';
import translate from '../../lib/translate';

const html = String.raw;

export const SpeakerWall = () => {
  addOnAfterAppRender(async () => {
    const response = await fetch(
      // 'https://sessionize.com/api/v2/bxgh3fps/view/SpeakerWall'
      'https://sessionize.com/api/v2/2l4eynf3/view/SpeakerWall'
    );
    const data = await response.json();
    const speakerWallElement = document.querySelector('#speaker-wall');

    let speakerHTML = '';

    if (speakerWallElement) {
      speakerHTML = data
        .map((speaker) => {
          return html`<div
            class="dot speaker"
            style="background-image:url(${speaker.profilePicture});"
            role="presentation"
          ></div>`;
        })
        .join('\n');

      speakerWallElement.innerHTML = speakerHTML;
    }
  });

  return html`<h2 class="dot speaker-wall-title">
      ${translate('speakerWallTitle')}
    </h2>
    <div class="dot speaker-wall" id="speaker-wall"></div>`;
};
