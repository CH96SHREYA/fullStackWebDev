/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
 let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */

getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather"; 
  const requestURL =`${URL}?q=${city}&appid=${API_KEY}&units=imperial`;  
  let weatherPromise = fetch(requestURL);
  return  weatherPromise.then( response =>{ return response.json()});   
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = () => {
  const city = document.getElementById('city-input').value;
  let weatherData = getWeatherData(city);
  weatherData.then(response =>{    
      showWeatherData(response)
    })
    .catch(err => {console.log(err)})
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (weatherData) => {
  document.querySelector("#city-name").innerText = weatherData.name;
  document.querySelector("#weather-type").innerText = weatherData.weather[0].description;
  document.querySelector("#icon").src =`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  document.querySelector("#temp").innerText = weatherData.main.temp;
  document.querySelector("#min-temp").innerText = weatherData.main.temp_min;
  document.querySelector("#max-temp").innerText = weatherData.main.temp_max;
}

