import { cx } from '@knowitlabs/cx';

import { KIFunctionType } from '../../../types/module/function';

import { addOnClick } from '../../../config/spa';

export type KIButtonPropsType = {
  tabindex?: number;
  content: unknown;
  onClick: KIFunctionType;
  className?: unknown;
  style?: unknown;
  id: string;
};

import './styles/button.styl';

export const Button = (props: KIButtonPropsType): string => {
  const { content, onClick, className, style, id, ...rest } = props;

  if (!id || (id && id === '')) {
    throw new Error('Button component requires `id` prop');
  }

  if (!onClick) {
    throw new Error('Button component requires `onClick` prop');
  }

  if (onClick && typeof onClick !== 'function') {
    throw new TypeError(
      'Button component requires `onClick` prop to be of type `function`'
    );
  }

  addOnClick(id, onClick);

  const attrs = Object.entries(rest)
    .map((attr) => {
      const [property, value] = attr;

      return ` ${property}="${value}"`;
    })
    .join(' ');
  const _style = style ? ` style="${style}"` : '';
  const buttonClassNames = cx(`dot button ${className || ''}`);

  return `<button type="button" id="${id}" class="${buttonClassNames}"${attrs}${_style}>${content}</button>`;
};
