const html = String.raw;

export type DOT_FAQAnswerPropsType = {
  answer: string;
};

export const FAQAnswer = (props) => {
  const { answer } = props;

  return html` <div class="dot answer">${answer}</div>`;
};
