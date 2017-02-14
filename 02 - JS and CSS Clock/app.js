const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  // take seconds are turn them into a degree
  // we add 90 to offset the oringal location of the hands in the div
  const currentSecond = ((seconds / 60) * 360) + 90;
  const currentMinute = ((minutes / 60) * 360) + 90;
  const currentHour = ((hours / 12) * 360) + 90;
  secondHand.style.transform = `rotate(${currentSecond}deg)`;
  minuteHand.style.transform = `rotate(${currentMinute}deg)`;
  hourHand.style.transform = `rotate(${currentHour}deg)`;
  console.log(seconds, minutes, hours);

  // Stop the transition so the minute hand doesn't go counter clockwise
  // when transitioning from 59 sec to 0 sec
  if (seconds == 0) {
    secondHand.style.transition = 'none';
  }
}

setInterval(setDate, 1000);
