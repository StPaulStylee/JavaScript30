const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
  .then(rawData => rawData.json())
  .then(jsonData => cities.push(...jsonData)); // ES6 spread

function locationSearch(locationToFind, cities) {
  return cities.filter(place => {

    const regex = new RegExp(locationToFind, 'gi'); //g = global; search entire sting & i = case insensitive
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayLocations() {
  const matchedLocation = locationSearch(this.value, cities);
  console.table(matchedLocation);
}


const searchInput = document.querySelector('.search');
const searchSuggestions = document. querySelector('.suggestions');

searchInput.addEventListener('change', displayLocations);
searchInput.addEventListener('keyup', displayLocations);
