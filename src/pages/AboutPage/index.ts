import { Link } from '../../components/navigation/Link';
import { FAQ } from '../../components/page-section/FAQ';
import './styles/about.styl';

const html = String.raw;

export const AboutPage = () => {
  return html`<section class="dot section">
    <div class="dot container">
      <p class="dot">
      dot.festival, formerly known as Knowit Developer Summit (KDS), is a conference for Knowit employees, by Knowit employees. As KDS originally was an arena for the developers in Knowit, the new concept embraces the wide range of subject areas and expertise found in our employees, as well as underlying our need/mission/? for working interdisciplinary. Together we get it done!
      </p>
      <p class="dot">
      ${Link({
    to: 'https://info.knowit.no/code-of-conduct',
    server: true,
    className: 'button primary coc',
    content: 'Code of Conduct'
  })}
      </p>
      <h2 class="dot">
      dot.festival 2024
      </h2>
      <p class="dot>
      In 2024, the conference will have its 10th anniversary and we are celebrating this in Oslo, the origin of where the conference was formed. The goal of the conference is to create a safe and low-threshold arena for our employees to share, learn and develop, as well as creating stronger bonds between our colleagues.
      </p>
      <p class="dot>
      The ambition for dot.festival is that it will be held annually and that its location varies from year to year. The conference begins during Friday around lunchtime and runs until Saturday afternoon. A conference dinner is arranged on the Friday evening.
      </p>
    <div class="dot container">
      <h2 class="dot">FAQ</h2>
      ${FAQ({
    questions: [
      {
        q: 'Is the travel costs covered by the conference cost?',
        a: 'The conference price does not cover travel, nor do we book for people.'
      },
      {
        q: 'Where can I store my luggage?',
        a: 'The conference facility will have an area where you can keep your luggage before hotel check-in and after hotel check-out. The hotel may also keep your luggage'
      },
      {
        q: 'Which hotel am I staying at?',
        a: 'Scandic St. Olavs plass, St. Olavs Plass 1, 0165 Oslo, Tel +47 23 15 56 00'
      }
    ]
  })}
    </div>
  </section>`;
};
