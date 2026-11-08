const form = document.querySelector('#chat-form');
const input = document.querySelector('#prompt');
const messages = document.querySelector('#messages');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const prompt = input.value.trim();
  if (!prompt) return;
  const item = document.createElement('div');
  item.className = 'message';
  item.textContent = prompt;
  messages.appendChild(item);
  input.value = '';
  setTimeout(() => {
    const reply = document.createElement('div');
    reply.className = 'message bot';
    reply.innerHTML = 'This preview is ready for your API connection. Add the NexaForge endpoint and API key to turn this into a live assistant.<small>preview mode · no request sent</small>';
    messages.appendChild(reply);
  }, 350);
});
