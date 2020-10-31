fetch('http://api.openweathermap.org/data/2.5/weather?q=denver&appid=18c8e29c5116333e08aef89074ae53f7&units=imperial')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.name);
    var date = (data.dt);
    // console.log(date);
    var datems = date * 1000;
    var dateObject = new Date(datems);
    var dateString = dateObject.toLocaleDateString();
    console.log(dateString);
    console.log(data.main.temp);
    console.log(data.weather[0].icon);
    console.log(data.weather[0].description);
    console.log(data.main.humidity);
    console.log(data.wind.speed);
    console.log(data.main.temp_max);
    console.log(data.main.temp_min);
    console.log(data.coord);
  });

  //current forecast
  // city name, date, an icon w/ conditions, temperature, humidity, wind speed and uv index ( use css styles and class for color coding for favorable, normal, unfavorable)

   //uv index
  fetch('http://api.openweathermap.org/data/2.5/uvi?lat=39.74&lon=-104.98&appid=18c8e29c5116333e08aef89074ae53f7')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.value);
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

  

