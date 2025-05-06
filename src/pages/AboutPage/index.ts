import { Link } from '../../components/navigation/Link';
import { FAQ } from '../../components/page-section/FAQ';
import './styles/about.styl';

const html = String.raw;

export const AboutPage = () => {
  return html`<section class="dot section">
    <div class="dot container">
      <p class="dot about-leading-paragraph">
      Knowit Festival, formerly known as Knowit Developer Summit (KDS), is a conference for Knowit employees, by Knowit employees. As KDS originally was an arena for the developers in Knowit, the new concept embraces the wide range of subject areas and expertise found in our employees, as well as underlying our need/mission/? for working interdisciplinary. Together we get it done!
      </p>
      <p class="dot">
      ${Link({
    to: 'https://www.knowit.eu/about-knowit/our-policies/',
    server: true,
    className: 'button primary coc',
    content: 'Code of Conduct'
  })}
      </p>
      <h2 class="dot about-title">
      Knowit Festival 2025
      </h2>
      <p class="dot about-text>
      In 2025, the conference will be in Sweden. The goal of the conference is to create a safe and low-threshold arena for our employees to share, learn and develop, as well as creating stronger bonds between our colleagues.
      </p>
      <p class="dot about-text>
      The ambition for Knowit Festival is that it will be held annually and that its location varies from year to year.
      </p>
    <div class="dot container">
      <h2 class="dot about-faq-title">FAQ</h2>
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
        a: 'TBD'
      }
    ]
  })}
    </div>
  </section>`;
};
