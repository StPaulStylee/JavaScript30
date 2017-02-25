const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
  console.log('Make me a sanwich!');
// Interpolated
console.log('Make me a %s!', 'ketchup popsicle');
// Styled
console.log('%c I am a sexy bitch!', 'font-size:22px; color: red');
// warning!
console.warn('Quick, get a bag... I\'m gonna poop!');
// Error :|
console.error('... and great, I\'ve shit myself.');
// Info
console.info('I once ate 45 chicken nuggets in one sitting.')
// Testing
console.assert(1 + 2 === 4, 'This ain\'t 1984 son! Learn to do math!')
// clearing
// console.clear(); // This function clears the console. Hahahahaha.

// Viewing DOM Elements
const p = document.querySelector('p');
console.dir(p)

// Grouping together
dogs.forEach(dog => {
  // instead of console.group, you can use console.groupCollapsed and info is collapsed by default
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old, making them ${dog.age * 7} in dog years.`);
  console.log(`While still relatively young, ${dog.name} still shits on the floor quite often.`);
  console.log(`Damn ${dog.name}`);
  console.groupEnd(`${dog.name}`);
});
// counting
console.count('Hi.');
console.count('Hi.');
console.count('Hi.');
console.count('Hi.');

// timing
console.time('Fetching github info...');
fetch('https://api.github.com/users/StPaulStylee')
  .then(data => data.json())
  .then(data => {
    console.log(data);
    console.timeEnd('Fetching github info...');
  });
