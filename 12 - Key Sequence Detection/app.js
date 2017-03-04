const pressedKeys = [];
const konamiCode = 'drinkbeer';
window.addEventListener('keyup', (e) => findKonamiCode(e));

function findKonamiCode (e) {
  pressedKeys.push(e.key);
  pressedKeys.splice(-konamiCode.length - 1, pressedKeys.length -  konamiCode.length)
  if (pressedKeys.join('').includes(konamiCode)){
    cornify_add();
  };
  console.log(pressedKeys);
};
