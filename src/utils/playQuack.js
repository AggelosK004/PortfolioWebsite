import quackSound from "../assets/quack.mp3";

let quackAudio = null;

export function playQuack() {
  if (!quackAudio) {
    quackAudio = new Audio(quackSound);
  }
  quackAudio.currentTime = 0;
  quackAudio.play().catch(() => {});
}
