const html = String.raw;

export const ErrorPage = ({ params }) => {
  const { error } = params;

  return html`<section class="dot section">
    <div class="dot container">
      <h1 class="dot">Something went wrong</h1>
      <p class="dot">It is not your fault, it's us. Please try again later</p>

      <div class="dot message error">
        <p class="dot">${error}</p>
        <pre class="dot language-jsstacktrace">
          <code class="dot">${error.stack}</code>
        </pre>
      </div>
    </div>
  </section>`;
};
