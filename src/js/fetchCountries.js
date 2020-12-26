import refs from './refs.js';
const _ = require('lodash');

refs.searchForm.value = '';
console.log(refs.searchForm.value);

const searchQuery = _.debounce(() => {
  fetchCountries(refs.searchForm.value);
}, 1000);

function fetchCountries(searchQuery) {}

export default fetchCountries;
