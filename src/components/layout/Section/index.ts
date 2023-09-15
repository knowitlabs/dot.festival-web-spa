import './styles/section.styl';

const html = String.raw;

export const Section = (children: string) => {
  return html`<section class="dot section">${children}</section>`;
};
