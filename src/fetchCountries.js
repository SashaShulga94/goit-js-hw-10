export default function fetchCountries(name) {
  const BASE_URL = 'https://restcountries.com/v3.1/name';
  const param = '?fields=name,capital,population,flags,languages';

  return fetch(`${BASE_URL}/${name}${param}`).then(response => {
    if (!response.ok) {
      throw new Error('Oops, there is no country with that name');
    }
    return response.json();
  });
}

// console.log(fetch('https://restcountries.com/v3.1/name/peru'));
console.log(fetch);
