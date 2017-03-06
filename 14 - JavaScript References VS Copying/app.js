// start with strings, numbers and booleans

// let age = 100;
// let age2 = age;
// console.log(age, age2);
// age = 200;
// console.log(age, age2);
//
// let name = 'Jeff';
// let name2 = name;
// console.log(name, name2);
// name = 'Jeffrey';
// console.log(name, name2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];


// and we want to make a copy of it.
const team = players;

// You might think we can just do something like this:
team[3] = 'Jeffrey';

// however what happens when we update that array?
console.log(team, players);// both are updated because team is just a reference to players

// So, how do we fix this? We take a copy instead!
const team2 = players.slice()// returns the entire players array and leaves original in tact
console.log(team2, players);


// one day

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or create a new array instance with Array from method
const team5 = Array.from(players);

// or use the new ES6 Spread
const team4 = [...players];

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Jeffrey',
  age: 30,
  hobbies: {
    gaming: 'video',
    music: 'guitar'
  }
}

// and think we make a copy:
const captain = person;
captain.age = 99; //same as array... you are just referening the original object


// how do we take a copy instead?
const captain2 = Object.assign({}, person, { age: 33 });

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
// this means that you can successfully copy objects that have objects within it, but you can only successfully edit the copy 1 layer deep with it
// affecting the orignal source

// or you can use the "poor mans" deep clone by doing this...
const person2 = JSON.parse(JSON.stringify(person));
person2.hobbies.gaming = 'video games'; // this method turns the referenced object into a string and immediately parses it back into an object, creating a copy!
