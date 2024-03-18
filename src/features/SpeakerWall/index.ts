import { addOnAfterAppRender } from '../../config/spa';
import translate from '../../lib/translate';

const html = String.raw;
const shuffleArray = (array: unknown[]): unknown[] => {
  const identity = (x: unknown) => x;
  const newArray = array.map(identity);

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
};

export const SpeakerWall = () => {
  addOnAfterAppRender(async () => {
    const response = await fetch(
      'https://sessionize.com/api/v2/2cycckpp/view/SpeakerWall'
    );
    const data = await response.json();
    const speakerWallElement = document.querySelector('#speaker-wall');

    let speakerHTML = '';

    if (speakerWallElement && data) {
      const shuffledArray = shuffleArray(data);
      const maxArray = shuffledArray.slice(0, 6);

      speakerHTML = maxArray
        .map((speaker: any) => {
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

  return html` <section class="dot section speaker-wall">
    <div class="dot container">
      <h2 class="dot speaker-wall-title">${translate('speakerWallTitle')}</h2>
      <div class="dot speaker-wall-content" id="speaker-wall"></div>
    </div>
  </section>`;
};
