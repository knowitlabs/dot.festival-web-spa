const html = String.raw;

import './styles/details.styl';

export const Details = () => {
  return html`<section class="dot section details">
    <div class="dot container">
      <div class="dot content">
        <span class="dot pretitle first">When?</span>
        <h2 class="dot when">7 - 8 November 2025</h2>

        <span class="dot pretitle second">Where?</span>
        <h2 class="dot when">Malmö, Sweden</h2>
      </div>
    </div>
  </section>`;
};
