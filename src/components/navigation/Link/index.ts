import { cx } from '@knowitlabs/cx';

export type DOTLinkPropsType = {
  tabindex?: number;
  content: unknown;
  to: string;
  className?: unknown;
  noDataLink?: boolean;
  style?: unknown;
  server?: boolean;
  id?: string;
};

const isBrowser = new Function(
  'try {return this===window;}catch(e){ return false;}'
);

export const Link = (props: DOTLinkPropsType): string | HTMLAnchorElement => {
  const { content, to, className, style, server = false, ...rest } = props;
  const browser = isBrowser();

  let postfix = '';

  if (!to || (to && to === '')) return '';

  const attrs = Object.entries(rest)
    .map((attr) => {
      const [property, value] = attr;

      return ` ${property}="${value}"`;
    })
    .join(' ');
  const _style = style ? ` style="${style}"` : '';
  const linkClassNames = cx(`dot ${className || ''}`, {
    'is-active': browser ? window.location.pathname === to : false
  });

  // external link
  if (server) {
    return `<a href="${to}" class="${linkClassNames}"${attrs}${_style}>${content}</a>`;
  } else if (to.indexOf('/') !== 0 && to.indexOf('http') !== -1) {
    postfix =
      typeof content === 'string' && content.indexOf('<svg') === -1
        ? ' (opens in new window)'
        : '';

    return `<a href="${to}" target="_blank" rel="noopener noreferrer" class="${linkClassNames}"${attrs}${_style}>${content}${postfix}</a>`;
  } else if (to.indexOf('#') === 0 || to.indexOf('mailto:') !== -1) {
    return `<a href="${to}" class="${linkClassNames}"${attrs}${_style}>${content}</a>`;
  }

  return `<a href="${to}" data-link="${to}" class="${linkClassNames}"${attrs}${_style}>${content}</a>`;
};
