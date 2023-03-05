// api key: 63adbb2ef2b05b269cb2aefd099b08de

const API_KEY = `63adbb2ef2b05b269cb2aefd099b08de`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));

}

const displayTemperature = data => {
    const temperature = document.getElementById('temperature');
    temperature.innerText = data.main.temp;
}

loadTemperature('dhaka');
