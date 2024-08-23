'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountryOrNeighbour = function (data, isNeighbour = false) {
  const html = `
            <article class="country ${isNeighbour && 'neighbour'}">
                <img class='country__img' src="${
                  isNeighbour ? data.flags.svg : data.flag
                }" />
                <div class="country__data">
                    <h3 class="country__name">${
                      isNeighbour ? data.name.common : data.name
                    }</h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${(
                      +data.population / 1000000
                    ).toFixed(1)} people</p>
                    <p class="country__row"><span>🗣</span>${
                      isNeighbour ? data.languages.spa : data.languages[0]?.name
                    }</p>
                    <p class="country__row"><span>💰</span>${
                      isNeighbour
                        ? data.currencies.name
                        : data.currencies[0]['name']
                    }</p>
                </div>
            </article>
        `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  //   countriesContainer.style.opacity = 1;
};

const renderError = msg => {
  countriesContainer.insertAdjacentText('beforeend', msg);
  //   countriesContainer.style.opacity = 1;
};

const getJSON = (url, errorMsg = 'Something went wrong') => {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }

    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v2/name/${country}`, 'country not found')
    .then(data => {
      renderCountryOrNeighbour(data[0]);
      const neighbour = data[0].borders;
      if (!neighbour) throw new Error('No neighbour found');

      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'country not found'
      );
    })
    .then(data => {
      console.log(data);
      renderCountryOrNeighbour(data[0], true);
    })
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`something went wrong! 💥💥💥 ${err.message}. Try again`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};

btn.addEventListener('click', () => {
  getCountryData('australia');
});
