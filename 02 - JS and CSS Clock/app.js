const secondHand = document.querySelector('.second-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  // take seconds are turn them into a degree
  // we add 90 to offset the oringal location of the hands in the div
  const currentSecond = ((seconds) / 60 + 360) + 90;
  secondHand.style.transform = `rotate(${currentSecond}deg)`;
}

setInterval(setDate, 1000);
