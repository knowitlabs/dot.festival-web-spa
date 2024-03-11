const html = String.raw;

import './styles/container.styl';

export const Container = (children: string, className?: string) => {
  return html`<div class="dot container ${className}">${children}</div>`;
};
