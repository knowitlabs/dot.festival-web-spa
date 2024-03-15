const html = String.raw;

import './styles/tags.styl';

export const Tags = ({ tags }) => {
  return html`<ul class="dot tags">
    ${tags
    .map((tag) => {
      return html`<li class="dot tag">${tag.name}</li>`;
    })
    .join('\n')}
  </ul>`;
};
