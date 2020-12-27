import refs from './refs.js';
import addCountriesMarkup, {
  addCountryMarkup,
  resetUi,
} from './countriesMarkup.js';
import { error, success, info } from './notify.js';

const _ = require('lodash');

refs.searchForm.value = '';

const searchQuery = _.debounce(() => {
  fetchCountries(refs.searchForm.value);
}, 500);

function fetchCountries(searchQuery) {
  if (searchQuery === '') {
    resetUi();
    return;
  }
  fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(response => {
      return response.json();
    })
    .then(data =>
      data.filter(country =>
        country.name
          .toLowerCase()
          .includes(refs.searchForm.value.toLowerCase()),
      ),
    )
    .then(dataCountries => {
      if (dataCountries.length !== 1 && dataCountries.length <= 10) {
        refs.countriesContainer.innerHTML = '';
        dataCountries.map(country => addCountriesMarkup(country));
      } else if (dataCountries.length === 1) {
        refs.countriesContainer.innerHTML = '';
        dataCountries.map(country => {
          addCountryMarkup(country);
        });
      } else if (dataCountries.length > 10) {
        refs.countriesContainer.innerHTML = '';
        error({
          title: 'Your query must contain more than one character!',
          sticker: false,
        });
      }
    })
    .catch(function () {
      error({
        title: 'Oops!',
        text: 'Something wrong, try reinput!',
      });
    });
}

refs.searchForm.addEventListener('input', searchQuery);
refs.countryNameForm.addEventListener('submit', e => e.preventDefault());

export default fetchCountries;
