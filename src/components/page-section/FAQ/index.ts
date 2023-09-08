import './styles/faq.styl';

import { DOT_FAQItemType, FAQItem } from './FAQItem';

const html = String.raw;

export type DOT_FAQPropsType =
  | Record<string, never>
  | {
      questions: Record<string, string>[];
    };

export const FAQ = (props: DOT_FAQPropsType) => {
  const { questions } = props;

  return html`<div class="dot faqs">
    ${questions.map((item: DOT_FAQItemType) => FAQItem({ item })).join('\n')}
  </div>`;
};
