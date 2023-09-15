import arrowCircleDownIcon from '../../../assets/images/icons/ui/fi-ts-arrow-alt-circle-down.svg';

const html = String.raw;

export type DOT_FAQQuestionPropsType = {
  question: string;
};

export const FAQQuestion = (props: DOT_FAQQuestionPropsType) => {
  const { question } = props;

  return html`
    <summary class="dot question">${question}${arrowCircleDownIcon}</summary>
  `;
};
