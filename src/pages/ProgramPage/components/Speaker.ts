const html = String.raw;

export const Speaker = (speaker) => {
  const { id, name, profilePicture } = speaker;

  return html`<div class="dot speaker" id="speaker-${id}">
    <img src="${profilePicture}" class="dot speaker-avatar" />
    <span class="dot speaker-name">${name}</span>
  </div>`;
};
