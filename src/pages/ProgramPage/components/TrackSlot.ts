const html = String.raw;

export const TrackSlot = ({ track, index }) => {
  const { name } = track;

  return html`<span
      class="dot track-slot track-${index}"
      aria-hidden="true"
      style="grid-column: track-${index}; grid-row: tracks;"
    >
      ${name}
    </span>
    <span
      class="dot lane-slot track-${index}"
      aria-hidden="true"
      style="grid-column: track-${index}; grid-row: lanes;"
    ></span>`;
};
