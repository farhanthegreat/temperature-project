// api key: 

const API_KEY = ``;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));

}

const displayTemperature = data => {
    const temperature = document.getElementById('temperature');
    temperature.innerText = data.main.temp;
    const cityName = document.getElementById('city-name');
    cityName.innerText = data.name;
    const weather = document.getElementById('weather');
    weather.innerText = data.weather[0].main;
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    loadTemperature(city);

})

loadTemperature('dhaka');
