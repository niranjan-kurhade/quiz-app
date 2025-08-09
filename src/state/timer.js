
let timer = null;
let timeLeft = 10;
let onTick = () => {};
let onExpire = () => {};

export function start(onTickCallback, onExpireCallback) {
  stop(); 

  timeLeft = 10;
  onTick = onTickCallback;
  onExpire = onExpireCallback;

  onTick(timeLeft);
  timer = setInterval(() => {
    timeLeft--;
    onTick(timeLeft);
    if (timeLeft === 0) {
      stop();
      onExpire();
    }
  }, 1000);
}

export function stop() {
  clearInterval(timer);
  timer = null;
}

export function getTimeLeft() {
  return timeLeft;
}
