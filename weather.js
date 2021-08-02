const API_KEY = "33586f7e1dd9b78ad925dfae42ad2480";

function onGeoOk(position) {
    const lat = position.coords.latitude; 
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json()).then((data) => {
        const temp = document.querySelector("#temp span");
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        temp.innerText = `${data.main.temp}℃`;
        city.innerText = `${data.name},`;
        weather.innerText = data.weather[0].main;
    });
}
function onGeoError() {
    alert("Can't find you. No weather for you")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);