import './styles.css';
import './js/fetchCountries.js';
// import countryTemplateMrkp from './templates/countryTemplate';

// fetch('https://restcountries.eu/rest/v2?name').then(response =>
//   response.json(),
// );

// console.log(response.json());

console.log(fetch);

// function fetchCountries(searchQuery) {
//   fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
//     .then(response => {
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//     });
// }

const refs = {
  searchForm: document.querySelector('#formCountryNameSearchInput'),
};

console.log(refs.searchForm);

// refs.searchForm.addEventListener('input', fetchCountries());

// fetch('https://restcountries.eu/rest/v2?name')
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     // data handling
//   })
//   .catch(error => {
//     // error handling
//   });

// fetch('https://restcountries.eu/rest/v2?name')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);

//     const markup = countryTemplateMrkp(data);
//   });
