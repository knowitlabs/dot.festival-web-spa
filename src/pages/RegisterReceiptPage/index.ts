import { Meantime } from '../../features/Meantime';
import { Receipt } from '../../features/Register/components/Receipt';

const html = String.raw;

export const RegisterReceiptPage = () => {
  return html`<section class="dot section">
      <div class="dot container">${Receipt()}</div>
    </section>
    <section class="dot section">
      <div class="dot container">${Meantime()}</div>
    </section> `;
};
