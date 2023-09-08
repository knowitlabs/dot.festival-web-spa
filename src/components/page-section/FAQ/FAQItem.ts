import { FAQAnswer } from './FAQAnswer';
import { FAQQuestion } from './FAQQuestion';

const html = String.raw;

export type DOT_FAQItemType = {
  q: string;
  a: string;
};

export type DOT_FAQItemPropsType = {
  item: DOT_FAQItemType;
};

export const FAQItem = (props: DOT_FAQItemPropsType) => {
  const { item } = props;
  const { q: question, a: answer } = item;

  return html` <details class="dot faq">
    ${FAQQuestion({ question })} ${FAQAnswer({ answer })}
  </details>`;
};
