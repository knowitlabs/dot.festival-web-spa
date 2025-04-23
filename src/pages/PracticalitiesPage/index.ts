import { Link } from '../../components/navigation/Link';
import translate from '../../lib/translate';

const html = String.raw;

export const PracticalitiesPage = () => {
  return html`<section class="dot section">
    <div class="dot container">
      <h1 class="dot">Practicalities</h1>
      <h2 class="dot">Registration</h2>
      <p class="dot">
        ${Link({
    to: 'register',
    className: 'button primary',
    content: translate('primary-register')
  })}
      </p>
      <p class="dot">
        Registration deadline for full reimbursement is
        <strong class="dot">1st of September</strong>.
      </p>
      <p class="dot">
        You may cancel before the 1st of September free of charge. After this, a
        cancellation fee up to the full price can be billed to your company if
        neither you nor we can find someone else to take your spot. If you wish
        to cancel or change anything else regarding your registration after
        submission, send a mail to
        <a href="mailto:info@knowitfestival.eu" class="dot"
          >info@knowitfestival.eu</a
        >. Remember to consult with your leader before registration.
      </p>
      <p class="dot">
        Registration fee Knowit Festival: <strong class="dot">5500 NOK</strong>.
      </p>
      <p class="dot">The following is covered by this cost:</p>
      <ul class="dot">
        <li class="dot">
          Hotel Friday-Saturday (Single room/double if shared)
        </li>
        <li class="dot">Lunch and dinner (Friday)</li>
        <li class="dot">Venue</li>
      </ul>
      <p class="dot">
        Travel is <strong class="dot">NOT</strong> included and must be arranged
        individually.
      </p>
      <h2 class="dot">General information</h2>

      <p class="dot">
        Knowit Festival 2025 will be hosted in Malmö, Sweden. We also have a
        <a
          href="https://info.knowit.no/code-of-conduct"
          target="_blank"
          class="dot"
          rel="noopener noreferrer"
          >Code of Conduct</a
        >.
      </p>
      <h2 class="dot">General information</h2>
      <p class="dot">
        Any questions can be forwarded to
        <a class="dot" href="mailto: info@knowitfestival.eu"
          >info@knowitfestival.eu</a
        >
      </p>
      <h2 class="dot">Locations</h2>

      <h3 class="dot">Venues</h3>
      <p class="dot">TBD</p>
      <h3 class="dot">Hotel</h3>
      <p class="dot">The address for the hotel is:</p>
      <p class="dot">TBD</p>
      <h2 class="dot">Travel</h2>

      <p class="dot">TBD</p>
    </div>
  </section>`;
};
