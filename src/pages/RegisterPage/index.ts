import { createWidget } from '@typeform/embed';
import '@typeform/embed/build/css/widget.css';
import { addOnAfterAppRender } from '../../lib/spa';

const html = String.raw;

export const RegisterPage = () => {
  addOnAfterAppRender(() => {
    const container = document.querySelector('#register-form');

    if (container) {
      createWidget('fcxtlQF7', {
        container: container as HTMLElement,
        hideFooter: true,
        hideHeaders: true,
        autoFocus: true,
        onSubmit: () => {
          const navigateToEvent = new CustomEvent('navigateTo', {
            bubbles: true,
            cancelable: true,
            detail: {
              to: 'register/receipt'
            }
          });

          document.dispatchEvent(navigateToEvent);
        },
        opacity: 0
      });
    }
  });

  return html`<div
    class="dot container"
    style="display: flex; flex-direction:column;height:100%;min-height: 1000px;"
  >
    <h1 class="dot">Register</h1>
    <form id="register-form" style="height: 100%;"></form>
  </div>`;
};
