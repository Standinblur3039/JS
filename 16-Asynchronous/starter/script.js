'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/////////////////////////////////////// asynchronous
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v3.1/name/india`);
const data = request.send();

request.addEventListener('load', function () {
  console.log(this.responseText);
});
