fetch('http://api.openweathermap.org/data/2.5/weather?q=denver&appid=18c8e29c5116333e08aef89074ae53f7&units=imperial')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
  //current forecast
  // city name, date, an icon w/ conditions, temperature, humidity, wind speed and uv index ( use css styles and class for color coding for favorable, normal, unfavorable)

// http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid={API key}

  //future 5 day forecast
  //date, icon for conditions, temperature, and humidity
  // api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

  

//   18c8e29c5116333e08aef89074ae53f7