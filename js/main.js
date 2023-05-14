
const apiKey = 'c15f621a3e14340bd1405b43e16c147d';

const weatherIcon = document.querySelector('#icon')
const input = document.querySelector('#input')
const searchButton = document.querySelector('#search-button')
const error = document.querySelector('#error')


async function getWeatherData (city) {
   const URL = 
   `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=ru&units=metric`;
   
   const response = await fetch(URL);

   if (response.status == 404) {
      error.style.display = 'block'
   }
   
   const data = await response.json();

   

   document.querySelector('#city').innerHTML = data.name;
   document.querySelector('#clouds').innerHTML = data.weather[0].description;
   document.querySelector('#temp').innerHTML = Math.round(data.main.temp) + '°C';

   document.querySelector('#max').innerHTML = Math.round(data.main.temp_max) + '°C' ;
   document.querySelector('#min').innerHTML = Math.round(data.main.temp_min) + '°C';
   document.querySelector('#humidity').innerHTML = data.main.humidity + '%';
   document.querySelector('#wind').innerHTML = Math.round(data.wind.speed) + 'км/ч';


   if (data.weather[0].main == 'Clear') {
      weatherIcon.src = './img/sun.png'
   } else if (data.weather[0].main == 'Mist') {
      weatherIcon.src = './img/mist.png'
   } else if (data.weather[0].main == 'Rain') {
      weatherIcon.src = './img/rain.png'
   }else if (data.weather[0].main == 'Clouds') {
      weatherIcon.src = './img/cloud.png'
   }
}


searchButton.addEventListener('click',() => {
   getWeatherData(input.value)
   input.value = ''
})