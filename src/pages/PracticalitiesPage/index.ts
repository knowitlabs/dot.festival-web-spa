import { Link } from '../../components/navigation/Link';
import translate from '../../lib/translate';
import { FAQ } from '../../components/page-section/FAQ';
import './styles/practicalities.styl';

const html = String.raw;

export const PracticalitiesPage = () => {
  return html`<section class="dot section">
    <div class="dot container">
      <h1 class="dot">Practicalities</h1>
      <p class="dot practicalities-leading-paragraph">
        Registration deadline for full reimbursement is 1st of September.      
      </p>
      <p class="dot">
        ${Link({
        to: 'register',
        className: 'button primary cfp',
        content: translate('primary-register')
        })}
      </p>
      <div class="dot container dot-practicalities-container">
        <div class="dot content">
          <h2 class="dot practicalities-title">General information</h2>
          <p class="dot practicalities-text">
            Registration fee Knowit Festival: NOK 5 500,-          
          </p>
          <p class="dot practicalities-text">
            The following is covered by this cost:
          </p>
          <ul class="practicalities-covered-by-cost">
            <li>Hotel Friday-Saturday (Single room/double if shared)</li>
            <li>Lunch and dinner (Friday)</li>
            <li>Venue</li>
          </ul> 
          <p class="dot practicalities-text"> 
          Travel is NOT included and must be arranged individually.
          </p>
          <p class="dot practicalities-text"> 
          Questions can be forwarded to <a href="mailto:info@knowitfestival.eu">info@knowitfestival.eu</a>
          </p>
        </div>
      </div>
    </div>

      <div class="dot container">
        <h2 class="dot practicalities-faq-title">More information</h2>
        ${FAQ({
          questions: [
            {
              q: 'Venue',
              a: 'Studio Malmö is our main festival venue - a vibrant hub for innovation, collaboration and creativity located in the heart of Malmö. With stunning views over the canal and modern conference facilities, Studio sets the perfect atmosphere for inspiring talks, workshops and spontaneous connections, <br>Location: Nordenskiöldsgatan 24, 211 19 Malmö<br> <a href="https://www.studiomalmo.com/">Learn more about the venue</a>'
            },
            {
              q: 'Hotel',
              a: ''
            },
            {
              q: 'Travel route suggestion',
              a: 'TBD'
            }
          ]
        })}
      </div>
      <div class="dot container">
        <h2 class="dot practicalities-faq-title">Cancellation</h2>
        <p class="dot practicalities-text cancellation">
        You may cancel before the 1st of September free of charge. 
        After this, a cancellation fee up to the full price can be billed to your company if neither you nor we can find someone else to take your spot. 
        If you wish to cancel or change anything else regarding your registration after submission, send a mail to <a class="cancellation-link" href="mailto:info@knowitfestival.eu">info@knowitfestival.eu</a>
        Remember to consult with your leader before registration.
        </p>
  </section>`;
};
