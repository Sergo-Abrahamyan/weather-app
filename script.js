// Weather App - script.js
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');

const demoData = {
  london: { city: 'London', country: 'United Kingdom', temp: 18, feels: 16, humidity: 62, wind: 14, visibility: 10, description: 'Partly Cloudy', icon: 'fa-cloud-sun', bg: 'cloudy' },
  paris: { city: 'Paris', country: 'France', temp: 22, feels: 21, humidity: 55, wind: 10, visibility: 15, description: 'Clear Sky', icon: 'fa-sun', bg: 'sunny' },
  tokyo: { city: 'Tokyo', country: 'Japan', temp: 28, feels: 30, humidity: 78, wind: 18, visibility: 8, description: 'Warm and Humid', icon: 'fa-cloud', bg: 'cloudy' },
  moscow: { city: 'Moscow', country: 'Russia', temp: 5, feels: 2, humidity: 80, wind: 22, visibility: 5, description: 'Overcast', icon: 'fa-cloud-rain', bg: 'rainy' }
};

function updateUI(data) {
  document.getElementById('city-name').textContent = data.city;
  document.getElementById('country').textContent = data.country;
  document.getElementById('temperature').textContent = data.temp;
  document.getElementById('feels-like').textContent = data.feels + 'C';
  document.getElementById('humidity').textContent = data.humidity + '%';
  document.getElementById('wind').textContent = data.wind + ' km/h';
  document.getElementById('visibility').textContent = data.visibility + ' km';
  document.getElementById('description').textContent = data.description;
  document.getElementById('weather-icon').className = 'fas ' + data.icon;
  document.body.className = data.bg;
}

function searchCity() {
  const query = cityInput.value.trim().toLowerCase();
  if (!query) return;
  const found = Object.values(demoData).find(d => d.city.toLowerCase().includes(query));
  updateUI(found || { city: cityInput.value, country: '', temp: 20, feels: 19, humidity: 60, wind: 12, visibility: 10, description: 'Clear', icon: 'fa-sun', bg: 'sunny' });
  cityInput.value = '';
}

searchBtn.addEventListener('click', searchCity);
cityInput.addEventListener('keypress', e => { if (e.key === 'Enter') searchCity(); });
updateUI(demoData.london);
