import { createWidget } from '@typeform/embed';
import { addOnAfterAppRender } from '../../config/spa';

const html = String.raw;

import '@typeform/embed/build/css/widget.css';

export const Register = () => {
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

  return html`<h1 class="dot">Register</h1>
    <form id="register-form" style="height: 100%;"></form>`;
};
