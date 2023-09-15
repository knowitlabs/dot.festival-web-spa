const html = String.raw;

import './styles/container.styl';

export const Container = (children: string) => {
  return html`<div class="dot container">${children}</div>`;
};
