fetch('http://api.openweathermap.org/data/2.5/weather?q=denver&appid=18c8e29c5116333e08aef89074ae53f7&units=imperial')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });


//   18c8e29c5116333e08aef89074ae53f7