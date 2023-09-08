import { cx } from '@knowitlabs/cx';

import './styles/responsiveImage.styl';

const html = String.raw;

export type DOT_ResponsiveImageInputType = {
  image: string;
  className?: string;
  style?: string;
  focal?: string;
};

export const ResponsiveImage = (
  props: DOT_ResponsiveImageInputType
): string => {
  const { image, className, style, focal, ...rest } = props;
  const attrs = Object.entries(rest)
    .map((attr) => {
      const [property, value] = attr;

      return ` ${property}="${value}"`;
    })
    .join(' ');
  const focalCSS = focal ? `object-position: ${focal}` : '';
  const _style = style ? ` style="${style}"` : '';
  const sizezArray = ['320', '640'];
  const srcset = sizezArray.map((size) => {
    return `${image}@${size}w.jpg ${size}w`;
  });
  const classNames = cx('dot responsive-image', {
    [`${className}`]: typeof className !== 'undefined'
  });

  return html`<div class="${classNames}" ${attrs}${_style}>
    <img
      srcset="${srcset.join(', ')}"
      sizes="(min-width: 1024px) 50vw, 100vw"
      src="${image}.jpg"
      style="${focalCSS}"
      class="dot image"
      role="presentation"
    />
  </div>`;
};
