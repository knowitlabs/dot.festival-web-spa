import { Container } from '../../components/layout/Container';
import { Register } from '../../features/Register';

const html = String.raw;

export const RegisterPage = () => {
  return html`
    <div
      class="dot container"
      style="display: flex; flex-direction:column;height:100%;min-height: 1500px;"
    >
      ${Register()}
    </div>`;
};
