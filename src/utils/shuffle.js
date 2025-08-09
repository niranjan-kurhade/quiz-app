import { questions } from '../data/questions.js';

export function shuffle(questions) {
  return questions.sort(() => Math.random() - 0.5);
}
