const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 50; // 50px

function shadow(e) {
  // const width = hero.offsetWidth;
  // const height = hero.offsetHeight;
  // this is destructuring and does the same as the commented out consts above
  const { offsetWidth: width, offsetHeight: height } = hero; //offsetWidth and offsetHeight is the dimension of the window
  let { offsetX: x, offsetY: y } = e;// offset is distance from left of window and top of window

  if (this !== e.target) { // this is hero and e.target is the element being hovered... if they aren't the same, do something
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2)); // essentially, this takes the max range of the walk (100) and sets its limits to -50 to 50
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 red,
                           ${xWalk * -1}px ${yWalk}px 0 green,
                           ${yWalk}px ${xWalk * -1}px 0 blue,
                           ${yWalk * -1}px ${xWalk}px 0 yellow`;
}

hero.addEventListener('mousemove', shadow);
