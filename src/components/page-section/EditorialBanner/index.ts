import { ResponsiveImage } from '../../media/ResponsiveImage';

import './styles/editorialBanner.styl';

const html = String.raw;

export type DOT_EditorialBannerPropsType = {
  image: string;
  content: string;
  focal?: string;
};

export const EditorialBanner = (
  props: DOT_EditorialBannerPropsType
): string => {
  const { image, content, focal = 'center center' } = props;

  return html`<div class="dot editorial-banner">
    ${ResponsiveImage({ image, focal })}
    <div class="dot content">${content}</div>
  </div>`;
};
