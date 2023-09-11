import '../../action/Button/styles/button.styl';

import { Link } from '../../navigation/Link';

const html = String.raw;

export const Meantime = () => {
  return html`
    
      <div class="dot text-box green">
        <h2 class="dot title">In the meantime</h2>
        <p class="dot description">
          We need you as our speakers, or to host a workshop! Makers, designers,
          coders, number crushers, market influencers, engineers, business
          innovators, and more.
        </p>
        ${Link({
    to: 'https://sessionize.com/dot-festival-2024-oslo/',
    server: true,
    content: 'Register proposal',
    className: 'dot button',
    style: 'margin-bottom: 4rem;'
  })}
        <div class="dot layout-text three-columns">
          <div class="dot">
            <h3 class="dot">Call for speakers</h3>
            <p class="dot">
              We want to encourage everyone to present. It does not have to be
              long, nor does it have to be extensive. 10, 30 or 50 minutes, it is
              all up to you. It can be general, or very niche. We want someone
              from all skill levels and disciplinaries.
            </p>
            <p class="dot">
             We also want workshops, 120 or 240 minutes, whatever works for you. How about a workshop to build an app in Flutter? Or have to conduct a gerilja user test?
            </p>
          </div>
          <div class="dot">
            <h3 class="dot">Is there a theme I need to follow?</h3>
            <p class="dot">
              No, there is not. Share everything you have learned; like your
              discoveries using AI, your master-thesis, how you learned about
              sustainability from a project, or if you did not learn anything at
              all—quite honestly; if you have a completely f**ked up story you
              want to tell. At this conference you are sharing with your
              colleagues, get creative!
            </p>
          </div>
          <div class="dot">
            <h3 class="dot">Make it cross-disciplinary</h3>
            <p class="dot">
              At this conference we are celebrating our diverse disciplines. A
              developer can listen to a designer, a lego enthusiast can talk
              about marketing or just gather marketing for a light code-session.
              However, make it understandable across disciplines—if you are able
              to.
            </p>
          </div>
        </div>
      </div>
    </div>

  `;
};
