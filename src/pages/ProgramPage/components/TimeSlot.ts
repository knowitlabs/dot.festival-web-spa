const html = String.raw;

export const TimeSlot = ({ slot }) => {
  if (!slot) return '';

  if (slot === '')
    return html`<span class="dot time-slot" aria-hidden="true"></span>`;

  return html`<h2
    class="dot time-slot"
    style="grid-row: time-${slot.replace(':', '')}"
  >
    ${slot}
  </h2>`;
};
