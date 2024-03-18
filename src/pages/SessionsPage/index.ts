import { Container } from '../../components/layout/Container';
import { Section } from '../../components/layout/Section';
import { addOnAfterAppRender } from '../../config/spa';
import { Speakers } from '../ProgramPage/components/Speakers';
import { Tags } from '../ProgramPage/components/Tags';
import { getDateDigits } from '../ProgramPage/lib/get-date-digits';
import { getDuration } from '../ProgramPage/lib/get-duration';
import { getTags } from '../ProgramPage/lib/get-tags';

import './styles/sessionsPage.styl';

const html = String.raw;
const getDayName = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDay();
  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  return dayNames[day];
};

export const SessionsPage = () => {
  addOnAfterAppRender(async () => {
    const response = await fetch(
      'https://sessionize.com/api/v2/2cycckpp/view/Sessions'
    );
    const data = await response.json();
    const responseSpeakers = await fetch(
      'https://sessionize.com/api/v2/2cycckpp/view/Speakers'
    );
    const speakers = await responseSpeakers.json();
    const { sessions } = data[0];
    const speakerWallElement = document.querySelector('#sessions');

    let speakerHTML = '';

    if (speakerWallElement && data) {
      speakerHTML = sessions
        .map((session: any) => {
          const {
            description,
            room,
            startsAt,
            endsAt,
            title,
            questionAnswers
          } = session;
          const startsAtHumanReadable = getDateDigits(startsAt);
          const duration = getDuration(startsAt, endsAt);
          const tags = getTags(session);
          const userTagsObject = questionAnswers.find(
            (qa) => qa.question === 'Tags'
          );
          const userTags = (
            userTagsObject.answer
              ? userTagsObject.answer.split(',').map((answer) => answer.trim())
              : []
          ).map((tag) => ({
            name: tag
          }));

          return html`<div class="dot session">
            <time class="dot duration">
              ${getDayName(startsAt)} ${startsAtHumanReadable} → ${duration}
              mins
            </time>
            <span class="dot session-room"
              >Room: <strong class="dot">${room}</strong></span
            >
            <h2 class="dot session-title">${title}</h2>
            <div class="dot session-content">${description}</div>
            ${Speakers({ session, speakers })}
            ${Tags({ tags: [...tags, ...userTags] })}
          </div>`;
        })
        .join('\n');

      speakerWallElement.innerHTML = speakerHTML;
    }
  });

  return html`
    ${Section(
    Container(
      html`<h1 class="dot">Sessions</h1>
          <div id="sessions" class="dot sessions"></div>`
    )
  )}
  `;
};
