import { questions } from '../data/questions.js';
import { shuffle } from '../utils/shuffle.js';
import { start, stop } from '../state/timer.js';
import { maybeSetNewHighScore, getBestScore } from '../state/highScore.js';

let index = 0;
let score = 0;

shuffle(questions);
export function current() {
  return questions[index];
}

export function submit(choiceIndex) {
  if (choiceIndex == current().answer) {
    score++;
  }
  index++;
  return index < questions.length;
}

export function getScore() {
  return { score, total: questions.length };
}

export function reset() {
  index = 0;
  score = 0;
  shuffle(questions);
}
