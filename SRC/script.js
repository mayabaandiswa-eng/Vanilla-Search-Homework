let apiKey = a3te02ob303fbf3720b84aa127ffc8b

function formatDate(date) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[date.getDay()];
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return `${day} ${hours}:${minutes}`;
}

function displayWeather (response) {

    document.querySelector("#city-name").innerHTML = response.name;

    document.querySelector("#temperature").innerHTML = Math.round(response.main.temp);

    document.querySelector("#description").innerHTML = response.weather[0].description;

    document.querySelector("#humidity").innerHTML = response.main.humidity;

    document.querySelector("#wind").innerHTML = response.wind.speed;

    let iconCode = response.weather[0].icon; 
    document.querySelector("#icon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    document.querySelector("#date-time").innerHTML = formatDate(new Date());
}

function searchCity(city) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${a3te02ob303fbf3720b84aa127ffc8b}&units=metric`;
}