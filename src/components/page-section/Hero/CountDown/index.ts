import { addOnAfterAppRender } from '../../../../lib/spa';
import { coundown } from './lib/countdown';
import './styles/countdown.styl';

const html = String.raw;

export const CountDown = () => {
  addOnAfterAppRender(() => {
    coundown();
  });

  return html`<div class="dot" id="countdown">
    <ul class="dot">
      <li class="dot"><span class="dot" id="days"></span>days</li>
      <li class="dot"><span class="dot" id="hours"></span>Hours</li>
      <li class="dot"><span class="dot" id="minutes"></span>Minutes</li>
      <li class="dot"><span class="dot" id="seconds"></span>Seconds</li>
    </ul>
  </div>`;
};
