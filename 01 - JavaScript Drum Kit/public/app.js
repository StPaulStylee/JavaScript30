function playSound(e) {
  // If an audio element with a data key is pressed down return the element
  // Remember we are using back-ticks that different string syntax because
  // we are using ES6. This syntax is known as query strings. Don't forget
  // the double quotes around the actual keycode number!
  // The audio variable know consists of the entire audio element that corresponds
  // with the matching keycode:data-key
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if (!audio) return; // Will stop the function from running all together if there is no match
  audio.currentTime = 0; // rewinds audiofile to beginning each time it is called. This allows us to rapid fire!
  audio.play();  // plays the audio src file in the audio element

  //Here we are doing the same as above, except this time we are selecting all elements
  // with a class of .key
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  //Here we are adding a class of .playing to the selected elements
  key.classList.add('playing');
}

//  find all elements with a class of .key and return them
const keys = document.querySelectorAll('.key');
console.log('keys: ', keys);

// the e or "event" parameter is coming from the transitionend event listener
function removeTransition(e) {
  console.log(e);
  if(e.propertyName !== 'transform') return; // Don't run if the propertyName isn't transform
  this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);

// for key element in the keys array (node list) add the transitionend event listener
// and then run the removeTransition function
// We are using ES6 arrow functions here
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
