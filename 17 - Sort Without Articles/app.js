const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName) {
   // if index starts with an "a", "the", or "an". Search in case insensitve. trim is used to remove any leading spaces
  return bandName.replace(/^(a |the |an )/i, '').trim();
}
 //putting the strip function in the conditional keeps us from actually modifying the array elements
const sortedBands = bands.sort((a,b) => strip(a) > strip(b) ?  1 : -1);

// when you insert something into the innerHTML that isn't a string, it calls .toString on it.
// Therefore, you have to call .join() at the end to remove the commas that will appear from
// converting the array to a string
document.querySelector('#bands').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
console.log(sortedBands);
