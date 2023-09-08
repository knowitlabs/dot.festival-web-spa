import { Meantime } from '../../components/content/Meantime';

const html = String.raw;

export const RegisterReceiptPage = () => {
  return html`<section class="dot section">
      <div class="dot container">
        <h1 class="dot" style="text-align:center; margin:0px auto;">
          Thank you for registering!
        </h1>
        <p class="dot lead" style="text-align:center; margin:0px auto;">
          We're looking forward to connect the dots with you!
        </p>
      </div>
    </section>
    <section class="dot section">
      <div class="dot container">${Meantime()}</div>
    </section> `;
};
