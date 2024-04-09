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
      Registration deadline for full reimbursement is <strong class="dot">1st of April</strong>.
      </p>
      <p class="dot">
      You may cancel before the 1st of April free of charge. After this, a cancellation fee up to the full price can be billed to your company if neither you nor we can find someone else to take your spot. If you wish to cancel or change anything else regarding your registration after submission, send a mail to <a href="mailto:dot.festival@knowit.eu" class="dot">dot.festival@knowit.eu</a>. Remember to consult with your leader before registration.
      </p>
      <p class="dot">
      Registration fee dot.festival: <strong class="dot">5000 NOK</strong>.
      </p>
      <p class="dot">
      The following is covered by this cost:
</p>
<ul class="dot">
<li class="dot">Hotel Friday-Saturday (Single room/double if shared)</li>
<li class="dot">Lunch and dinner (Friday)</li>
<li class="dot">Venue</li>
</ul>
<p class="dot">
Travel is <strong class="dot">NOT</strong> included and must be arranged individually.
      </p>
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
      <h2 class="dot">Locations</h2>

      <h3 class="dot">Venues</h3>
      <p class="dot">The venue for day 1, Friday 31st of May, is Rebel, the venue for day 2, Saturday 1st of June, is Knowit.</p>
      <h4 class="dot">Rebel</h4>
      <address class="dot">
      Universitetsgata 2, 0164 Oslo
      </address>
      <p class="dot">
      <a class="dot" href="https://www.google.com/maps/place/Universitetsgata+2,+0164+Oslo/@59.9174995,10.7374959,17z/data=!3m1!4b1!4m6!3m5!1s0x46416fa0b9a2ac11:0x3d03ca6ecde21457!8m2!3d59.9174968!4d10.7400708!16s%2Fg%2F11srdwwyxq?entry=ttu" target="_blank" rel="noopener noreferrer">Link to maps.</a>
      </p>
      <h4 class="dot">Knowit</h4>
      <address class="dot">
      Universitetsgata 1, 0164 Oslo
      </address>
      <p class="dot">
      <a class="dot" href="https://www.google.com/maps/place/Universitetsgata+1,+0164+Oslo/@59.9171886,10.7381045,17z/data=!3m1!4b1!4m6!3m5!1s0x46416e7cf558d1e5:0xe4dad998c3be081c!8m2!3d59.9171877!4d10.7389393!16s%2Fg%2F11fr3qfn79?entry=ttu" target="_blank" rel="noopener noreferrer">Link to maps.</a>
      </p>
      <h3 class="dot">Hotel</h3>
      <p class="dot">
      The address for the hotel is:
      </p>
      <address class="dot">
      Scandic St. Olavs plass
      St. Olavs Plass 1
      0165 Oslo
      Tel 23 15 56 00
      </address>
      <p class="dot">
      <a href="https://www.google.com/maps/place/Scandic+St.+Olavs+plass/@59.9181767,10.737292,17z/data=!3m1!4b1!4m9!3m8!1s0x4616da4749cce2e1:0x6adbba6aa14c5e81!5m2!4m1!1i2!8m2!3d59.918174!4d10.7398669!16s%2Fg%2F113gz7w46?entry=ttu" class="dot" target="_blank" rel="noreferrer noopener">Links to maps</a>
      </p>
      <h2 class="dot">
      Travel
      </h2>

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

<a class="dot" href="https://avinor.no/flyplass/oslo/til-og-fra-flyplassen/tog-buss-og-taxi/tog" rel="noopener noreferrer" target="_blank">Avinor</a> (To and from airport)
<a class="dot" href="https://ruter.no" rel="noopener noreferrer" target="_blank">Ruter</a> (To and from airport and in Oslo)
<a class="dot" href="https://entur.no" rel="noopener noreferrer" target="_blank">Entur</a> (To and from airport and in Oslo)
      </p>
    </div>
  </section>`;
};
