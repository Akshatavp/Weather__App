const apiKey = "d2808f702bbb120c54ddfc3fba8632c8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const cardbg = document.querySelector(".card");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none";

    }
    else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        if (data.weather[0].main == "Clouds") {
            cardbg.src = "imgs/cloud.png";

        }
        else if (data.weather[0].main == "Clear") {
            cardbg.src = "imgs/sun.png";

        }
        else if (data.weather[0].main == "Rain") {
            cardbg.src = "imgs/rainy.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            cardbg.src = "imgs/rainy.png";
        }
        else if (data.weather[0].main == "Mist") {
            cardbg.src = "imgs/misty.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";


    }


}


searchBtn.addEventListener("click", () => {


    checkWeather(searchBox.value);

})

checkWeather();
