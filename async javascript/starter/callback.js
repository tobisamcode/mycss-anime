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

const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(request.responseText);
    console.log('data-1 ', data);

    // Render the country 1
    renderCountryOrNeighbour(data);

    // GET NEIGHBOR COUNTRY 2
    const [neighbour] = data.borders;

    console.log('neighbour', neighbour);

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data] = JSON.parse(this.responseText);
      console.log('data-2: ', data);

      // Render the country 2
      renderCountryOrNeighbour(data, true);
    });
  });
};

getCountryAndNeighbour('brazil');
