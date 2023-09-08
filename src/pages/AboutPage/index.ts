import { FAQ } from '../../components/page-section/FAQ';
import './styles/about.styl';

const html = String.raw;

export const AboutPage = async () => {
  return html`<section class="dot section">
    <div class="dot container">
      <p class="dot">
        Knowit Developer Summit (KDS) is Knowit's internal software development
        conference. The conference is put on by, and for, our passionate
        developers at Knowit: we arrange it, we are its speakers, and we make up
        its audience.
      </p>

      <p class="dot">
        The ambition for KDS is that it will be held annually and that its
        location varies from year to year. The conference begins during Friday
        around lunchtime and runs until Saturday afternoon.A conference dinner
        is arranged on the Friday evening.
      </p>

      <p class="dot">
        Hotels and conference facilities are carefully selected. We strive to
        ensure that accommodation is comfortable and that the conference is
        located near a transportation hub such as an airport, train station or
        bus terminal. The conference is always held in a city where Knowit
        developers live and work, and one or more members of the committee must
        live nearby.
      </p>

      <p class="dot">
        The conference committee consists of individuals from various Knowit
        companies. There are no rules regarding who can join the committee; new
        members are welcome to get involved!
      </p>

      <p class="dot">
        KDS is financed through cost price, and thus there is no profit target.
        The cost is shared equally between all participants, regardless of where
        you live, whether you are a speaker, audience member, or a member of the
        committee. Travel to and from the conference is handled by the
        participant.
      </p>
    </div>
    <div class="dot container">
      <h2 class="dot">History</h2>
      <p class="dot">
        The idea of holding a conference "by developers, for developers" arose
        sometime around 2012 within Knowit Objectnet in Norway, thanks to
        Fredrik Vraalsen, Alf Kristian Støyle, Tobias "tobiast" Torrissen and
        Jan Henrik Gundelsby). It was important that the conference's title make
        clear that the conference was for developers; thus, Knowit Developer.
      </p>

      <p class="dot">
        The word "Summit" was added quite undramatically; its use may have been
        inspired by the "Colorado Software Summit". The target group for the
        conference was the passionate system developers from Knowit, especially
        within the Java- and .NET- platforms. The goal was that as many of the
        participants as possible would also be speakers - preferably all. With
        this arrangement, it also became clear that no external speakers would
        be invited.
      </p>
    </div>
    <div class="dot container">
      <h2 class="dot">FAQ</h2>
      ${FAQ({
    questions: [
      {
        q: 'Is there WiFi?',
        a: 'Yes! When in pressen, the SSID is pressen. Password is pressen19 . If in track four, the hotel has its own open network'
      },
      {
        q: 'When is the hotel check-in?',
        a: 'Checkin opens 15:00 on friday. There are a few hours between the last presentation and the dinner when you can peacefully check in.'
      },
      {
        q: 'When is the hotel check-out?',
        a: 'The checkout is 12:00 on Saturday. We recommend checking out in the morning and storing luggage at the venue.'
      },
      {
        q: 'Is the travel costs covered by the conference cost?',
        a: 'The conference price does not cover travel, nor do we book for people.'
      },
      {
        q: 'How do I get to the conference facility and hotels from the airport?',
        a: 'We recommend checking out https://www.visitcopenhagen.com/copenhagen/planning/travel-copenhagen-airport. The short of it is that we recommend taking the metro. The stop closest to the conference facility is Rådhuspladsen, and the main central station (Hovedbanegården) is also close by.'
      },
      {
        q: 'Where can I store my luggage?',
        a: 'The conference facility will have an area where you can keep your luggage before hotel check-in and after hotel check-out. The hotel may also keep your luggage'
      }
    ]
  })}
    </div>
  </section>`;
};
