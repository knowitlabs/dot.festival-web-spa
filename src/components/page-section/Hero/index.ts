import { Link } from '../../navigation/Link';
import './styles/hero.styl';

const html = String.raw;
const Hero = async () => {
  return html` <div class="dot hero">
    <img
      class="dot image"
      role="presentation"
      src="images/8dddb761187601b14ad9d911f36d9fba.png"
    />
    <h1 class="dot">
      Connecting the cross-disiplinary dots between Knowit employes.
    </h1>
    <p class="dot lead">
      Join us for a 2 day creative festival with talks, workshops, and social
      events. Coming soon.
    </p>
    <div class="dot actions">
      ${Link({
    to: 'https://6g52rc80nij.typeform.com/to/fcxtlQF7',
    className: 'button primary',
    server: true,
    content: 'Register now!'
  })}
    </div>
  </div>`;
};

export default Hero;
