import { Container } from '../../components/layout/Container';
import { Register } from '../../features/Register';

const html = String.raw;

export const RegisterPage = () => {
  return html`${Container(html`<p class="dot">
      <strong class="dot"
        >If you register after 1st of April, you will not be reimbursed if you
        cancel. You or you company will be billed.</strong
      >
    </p>`)}
    <div
      class="dot container"
      style="display: flex; flex-direction:column;height:100%;min-height: 1500px;"
    >
      ${Register()}
    </div>`;
};
