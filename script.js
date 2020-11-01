// code variables
var long = "";
var lat = "";
// html elements
var cityEl = document.getElementById("city");
var currIconEl = document.getElementById("currentIcon");
var descriptionEl = document.getElementById("wDescription");
var dateEl = document.getElementById("wDate");
var dayEl = document.getElementById("wDay");
var tempEl = document.getElementById("temp");
var humidityEl = document.getElementById("humidity");
var windEl = document.getElementById("wind");
var uvEl = document.getElementById("uv");
var minEl = document.getElementById("min");
var maxEl = document.getElementById("max");

// get current weather from openweathermap
fetch('http://api.openweathermap.org/data/2.5/weather?q=denver&appid=18c8e29c5116333e08aef89074ae53f7&units=imperial')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data);
    // console.log(data.name);
    cityEl.textContent = data.name;
    // get data and convert to string
    var date = (data.dt);
    // console.log(date);
    var datems = date * 1000;
    var dateObject = new Date(datems);
    var dateString = dateObject.toLocaleDateString();
    var dateDay = dateObject.toLocaleString("en-US", {weekday: "long"});
    //icon
    console.log(data.weather[0].icon);
    currIconEl.setAttribute("src","http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png");
    // date
    // console.log(dateString);
    dateEl.textContent = dateString;
    //day
    // console.log(dateDay);
    dayEl.textContent = dateDay;
    // description
    console.log(data.weather[0].description);
    descriptionEl.textContent = data.weather[0].description;
    //temp
    console.log(data.main.temp);
    tempEl.textContent = "Current Temperature: " + data.main.temp + "\xb0";
    // humidity
    console.log(data.main.humidity);
    humidityEl.textContent = "Humidity: " +data.main.humidity + "%";
    // wind speed
    console.log(data.wind.speed);
    windEl.textContent = "Wind Speed: " +data.wind.speed + " mph";
    // max temp
    console.log(data.main.temp_max);
    maxEl.textContent = "Max. Temp. " +data.main.temp_max + "\xb0";
    // min temp
    console.log(data.main.temp_min);
    minEl.textContent = "Min. Temp. " +data.main.temp_min + "\xb0";
    // coordinates data to pass to 5 day and uv
    console.log(data.coord);
    long = data.coord.lon;
    console.log(long);
    lat = data.coord.lat;
    console.log(lat);
  });

  //current forecast
  // city name, date, an icon w/ conditions, temperature, humidity, wind speed and uv index ( use css styles and class for color coding for favorable, normal, unfavorable)

   //uv index
  var uvUrl = 'http://api.openweathermap.org/data/2.5/uvi?lat=' + lat + '&lon=' + long + '&appid=18c8e29c5116333e08aef89074ae53f7';
  fetch(uvUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.value);
    uvEl.textContent = "UV Index: " + data.value;
  });
 
  //5 day forecast
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat=39.74&lon=-104.98&units=imperial&exclude=current,minutely,hourly,alerts&appid=18c8e29c5116333e08aef89074ae53f7')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    for (var i = 1; i < 6; i++) {
    var date = (data.daily[i].dt);
    // console.log(date);
    var datems = date * 1000;
    var dateObject = new Date(datems);
    var dateString = dateObject.toLocaleDateString();
    console.log(dateString);
    console.log(data.daily[i].temp.day);
    console.log(data.daily[i].weather[0].icon);
    console.log(data.daily[i].humidity);
  }
});

// // icon link
// http://openweathermap.org/img/wn/10d@2x.png

  

