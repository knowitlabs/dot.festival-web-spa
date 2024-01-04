import { Container } from '../../components/layout/Container';
import { Section } from '../../components/layout/Section';
import { addOnAfterAppRender } from '../../config/spa';

import './styles/speakersPage.styl';

const html = String.raw;

export const SpeakersPage = () => {
  addOnAfterAppRender(async () => {
    const response = await fetch(
      'https://sessionize.com/api/v2/iscaodmy/view/Speakers'
    );
    const data = await response.json();
    const speakerWallElement = document.querySelector('#speakers');

    let speakerHTML = '';

    if (speakerWallElement && data) {
      speakerHTML = data
        .map((speaker: any) => {
          const {
            profilePicture,
            fullName: name,
            bio,
            tagLine,
            links,
            sessions
          } = speaker;

          let fixedBio = '<p class="dot lead">' + bio + '</p>';

          const fixedSessions = `
          <ul class="dot sessions-list">
          ${sessions
    .map((session) => {
      return html`${session.name}`;
    })
    .join('\n')}
          </ul>`;

          fixedBio = fixedBio
            .replace(/\r\n\r\n/g, '</p><p class="dot">')
            .replace(/\n\n/g, '</p><p class="dot">');
          fixedBio = fixedBio
            .replace(/\r\n/g, '</p><p class="dot">')
            .replace(/\n/g, '</p><p class="dot">');

          return html`<div class="dot speaker-card">
            <div class="dot primary">
              <div
                class="dot speaker"
                style="background-image:url(${profilePicture});"
                role="presentation"
              ></div>
              <span class="dot name"> ${name} </span>
              <span class="dot tagLine"> ${tagLine} </span>
            </div>
            <div class="dot secondary">
              <div class="dot bio">${fixedBio}</div>
              <div class="dot sessions">
                <span class="dot sessions-title">
                  ${name} is holding this/these sessions:
                </span>
                ${fixedSessions}
              </div>
            </div>
          </div>`;
        })
        .join('\n');

      speakerWallElement.innerHTML = speakerHTML;
    }
  });

  return html`
    ${Section(
    Container(
      html`<h1 class="dot">Speakers</h1>
          <div id="speakers" class="dot speakers"></div>`
    )
  )}
    ${Section(Container(html`<h2 class="dot">More speakers coming soon!</h2>`))}
  `;
};
