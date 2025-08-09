import { current, getScore, reset, submit } from '../state/quiz.js';
import { start, stop } from '../state/timer.js';
import { maybeSetNewHighScore, getBestScore } from '../state/highScore.js';

let quizCard = document.createElement('div');
quizCard.id = 'quiz-card';

document.body.append(quizCard);

export function showQuestion() {
  let q = current();
  quizCard.innerHTML = `
    <h2>${q.text}</h2>
    <div id="choices"></div>
    <p id="progress"></p>
    <p id="timer"></p>
  `;

  let choiceBox = quizCard.querySelector('#choices');

  q.choices.forEach((el, i) => {
    let button = document.createElement('button');
    button.innerText = el;
    button.onclick = () => handleAnswer(i);
    choiceBox.append(button);
  });

  start(
    (seconds) =>
      (quizCard.querySelector('#timer').textContent = `⏳ ${seconds}s`),
    () => handleAnswer(-1) 
  );

  getProgress();
}

function handleAnswer(choiceIndex) {
  stop(); 
  let more = submit(choiceIndex);
  more ? showQuestion() : showResult();
}
export function getProgress() {
  const { score, total } = getScore();
  quizCard.querySelector(
    '#progress'
  ).textContent = `Score: ${score}/Total:${total}`;
}

export function showResult() {
  const { score, total } = getScore();
  const isHigh = maybeSetNewHighScore(score, total);
  const best = getBestScore();

  quizCard.innerHTML = `
    <h2>Quiz is Finished</h2>
    <p>Your Score: ${score}/${total} ${isHigh ? '🏆 New High Score!' : ''}</p>
    <p>Best: ${best.score}/${best.total}</p>
    <button id="retry">Try Again</button>
  `;

  quizCard.querySelector('#retry').onclick = () => {
    reset();
    showQuestion();
  };
}
