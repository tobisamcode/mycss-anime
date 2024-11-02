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
  countriesContainer.style.opacity = 1;
};

const renderError = msg => {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const whereAmI = async function (country) {
  try {
    const res = await fetch(`https://restcountries.com/v2/name/${country}`);
    const [data] = await res.json();
    renderCountryOrNeighbour(data);
  } catch (error) {
    console.error(error.message);
    renderError(`Something went wrong! ⚠️ ${error.message}}`);
  }
};

btn.addEventListener('click', () => {
  whereAmI('australa');
});
