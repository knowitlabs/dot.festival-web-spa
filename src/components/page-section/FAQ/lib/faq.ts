import { KIKeyboardEventType } from '@knowitlabs/types';

const isVerticalNavigation = (e: KIKeyboardEventType<HTMLElement>) =>
  e.key == 'ArrowUp' || e.key == 'ArrowDown';

export const faq = () => {
  const faqHolderEls = document.querySelectorAll('.dot.faqs');

  faqHolderEls.forEach((holder) => {
    const allQuestions: HTMLElement[] = [];
    const faqs = holder.querySelectorAll('.dot.faq');

    let questionIndex = 0;
    let nextEl: HTMLElement;

    // eslint-disable-next-line no-undef
    const updateQuestions = (nodes: NodeListOf<Element>) => {
      allQuestions.length = 0;

      nodes.forEach((n: HTMLElement) => {
        const questionEl: HTMLElement | null = n.querySelector('.dot.question');

        if (questionEl) {
          allQuestions.push(questionEl);
        }
      });
    };
    const arrowNavigationHandler = (e: KIKeyboardEventType<HTMLElement>) => {
      e.preventDefault();

      if (e.key == 'ArrowUp') {
        nextEl =
          allQuestions[
            questionIndex > 0 ? --questionIndex : allQuestions.length - 1
          ];

        nextEl.focus();
      } else if (e.key == 'ArrowDown') {
        nextEl =
          allQuestions[
            questionIndex < allQuestions.length - 1 ? ++questionIndex : 0
          ];

        nextEl.focus();
      }
    };
    const keyUpHandler = (e: KIKeyboardEventType<HTMLElement>) => {
      if (isVerticalNavigation(e)) {
        arrowNavigationHandler(e);
      } else if (e.key == 'Home') {
        nextEl = allQuestions[0];

        nextEl.focus();
      } else if (e.key == 'End') {
        nextEl = allQuestions[allQuestions.length - 1];

        nextEl.focus();
      }
    };
    const keyUpEventListener = (e: KIKeyboardEventType<HTMLElement>) => {
      if (!e.repeat) {
        keyUpHandler(e);
      }
    };
    const focusHandler = (question: HTMLElement) => {
      questionIndex = allQuestions.indexOf(question);
    };

    updateQuestions(faqs);

    faqs.forEach((faq) => {
      const questionEl: HTMLElement | null = faq.querySelector('.dot.question');

      if (questionEl) {
        const focusEventListener = () => focusHandler(questionEl);

        questionEl.removeEventListener('focus', () => focusEventListener);
        questionEl.addEventListener('focus', () => focusEventListener);

        questionEl.removeEventListener('keyup', keyUpEventListener);
        questionEl.addEventListener('keyup', keyUpEventListener);
      }
    });
  });
};
