
const STORAGE_KEY = 'bestScore';

export function getBestScore() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { score: 0, total: 0 };
}

export function maybeSetNewHighScore(currentScore, total) {
  const best = getBestScore();
  if (currentScore > best.score) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ score: currentScore, total }));
    return true;
  }
  return false;
}
