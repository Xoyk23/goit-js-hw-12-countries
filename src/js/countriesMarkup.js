import refs from './refs.js';
import countriesTpl from '../templates/multipleCountriesTemplate.hbs';
import countryTpl from '../templates/singleCountryTemplate.hbs';

function addCountriesMarkup(country) {
  refs.countriesContainer.insertAdjacentHTML(
    'beforeend',
    countriesTpl([...country]),
  );
}

function addCountryMarkup(country) {
  refs.countriesContainer.insertAdjacentHTML(
    'beforeend',
    countryTpl([...country]),
  );
}

export default addCountriesMarkup;

function resetUi() {
  if (refs.searchForm.value === '') {
    refs.countriesContainer.innerHTML = '';
  }
}

export { addCountriesMarkup, addCountryMarkup, resetUi };
