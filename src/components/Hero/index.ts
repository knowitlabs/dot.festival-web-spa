import './styles/hero.styl';

const html = String.raw;
const Hero = async () => {
  return html` <div class="dot hero">
    <h1 class="dot">
      Connecting the cross-disiplinary dots between Knowit employes.
    </h1>
    <p class="dot lead">
      Join us for a 2 day creative festival with talks, workshops, and social
      events. Coming soon.
    </p>
  </div>`;
};

export default Hero;