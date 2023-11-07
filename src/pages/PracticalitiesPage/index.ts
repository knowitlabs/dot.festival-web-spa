import { Link } from '../../components/navigation/Link';
import translate from '../../lib/translate';

const html = String.raw;

export const PracticalitiesPage = () => {
  return html`<section class="dot section">
    <div class="dot container">
      <h1 class="dot">Practicalities</h1>
      <h2 class="dot">General information</h2>

      <p class="dot">
        dot.festival 2024 will be hosted centrally in Norway. We are in the
        process of finalizing the venue and hotel confirmations and will provide
        information and localization when this is complete, as well as other
        useful information. We will rapidly update with more information the
        following month. We also have a
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
      Any questions can be forwarded to <a class="dot" href="mailto: dot.festival@knowit.eu">dot.festival@knowit.eu</a>
      </p>
      <h2 class="dot">Registration</h2>
      <p class="dot">
      ${Link({
    to: 'register',
    className: 'button primary',
    content: translate('primary-register')
  })}
      </p>
      <p class="dot">
      Registration deadline is <strong class="dot">17th of April</strong>.
      </p>
      <p class="dot">
      You may cancel before the 30th of April free of charge. After this, a cancellation fee up to the full price can be billed to your company if neither you nor we can find someone else to take your spot. If you wish to cancel or change anything else regarding your registration after submission, send a mail to <a href="mailto:dot.festival@knowit.eu" class="dot">dot.festival@knowit.eu</a>. Remember to consult with your leader before registration.
      </p>
      <p class="dot">
      Registration fee dot.festival: <strong class="dot">5000 NOK</strong>.
      </p>
      <p class="dot">
      The following is covered by this cost:
</p>
<ul class="dot">
<li class="dot">Hotel Friday-Saturday (Single room)</li>
<li class="dot">Lunch and dinner (Friday), breakfast and lunch (Saturday)</li>
<li class="dot">Venue</li>
</ul>
<p class="dot">
Travel is NOT included and must be arranged individually.
      </p>
      <h2 class="dot">Locations</h2>
      <p class="dot">
      add adresses and info here
      </p>
      <h2 class="dot">
      Travel
      </h2>
      <p class="dot">
      The travel cost is not included in the conference cost.
</p>
<p class="dot">
Travel to and from the airport (Oslo Lufthavn - Gardermoen):
We recommend traveling with train (Flytoget or region trains) or bus.
</p>
<h2 class="dot">Travel in Oslo</h3>
<p class="dot">
We recommend downloading the app VY or Ruter, for timetables and tickets. You can also visit their website.
</p>
<p class="dot">
Visit websites for information here:

<a href="https://avinor.no/flyplass/oslo/til-og-fra-flyplassen/tog-buss-og-taxi/tog" rel="noopener noreferrer" target="_blank">Avinor</a> (To and from airport)
<a href="https://ruter.no" rel="noopener noreferrer" target="_blank">Ruter</a> (To and from airport and in Oslo)
<a href="https://entur.no" rel="noopener noreferrer" target="_blank">Entur</a> (To and from airport and in Oslo)
      </p>
    </div>
  </section>`;
};
