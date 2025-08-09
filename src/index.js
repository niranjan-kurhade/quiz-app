import { showQuestion } from './dom/dom.js';

document.addEventListener('keydown', (e) => {
  const key = e.key;

  if (key >= '1' && key <= '4') {
    const choiceButtons = document.querySelectorAll('#choices button');
    const index = parseInt(key) - 1;
    if (choiceButtons[index]) {
      choiceButtons[index].click();
    }
  }

  if (key.toLowerCase() === 'r') {
    const retryBtn = document.querySelector('#retry');
    if (retryBtn) retryBtn.click();
  }
});

showQuestion();
