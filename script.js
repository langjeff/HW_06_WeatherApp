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
var fiveDayEl = document.getElementById("fiveDay");

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

    // coordinates data to pass to 5 day and uv
    console.log(data.coord);
    long = data.coord.lon;
    console.log(long);
    lat = data.coord.lat;
    console.log(lat);
      // nested fetch for uv index
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
      //nested fetch for 5 day forecast
      var fiveDayUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + long + '&units=imperial&exclude=current,minutely,hourly,alerts&appid=18c8e29c5116333e08aef89074ae53f7';
      fetch(fiveDayUrl)
      .then(function (response) {
      return response.json();
      })
      .then(function (data) {

      console.log(data);
      for (var i = 1; i < 6; i++) {
        // create card for five day forecast
      var fiveDayCard = document.createElement("div");
      fiveDayCard.setAttribute("class","card d-inline-flex p-2 m-1")
      fiveDayCard.setAttribute("style","width: 15rem;");
      fiveDayEl.appendChild(fiveDayCard);
        //create element for image icon
      var fiveDayIcon = document.createElement("img");
      fiveDayIcon.setAttribute("class","card-img-top text-center");
      fiveDayIcon.setAttribute("src","http://openweathermap.org/img/wn/" + data.daily[i].weather[0].icon + "@2x.png");
      fiveDayIcon.setAttribute("style","width: 100px;");
      fiveDayIcon.setAttribute("alt","weather icon");
      fiveDayCard.appendChild(fiveDayIcon);
      // console.log(data.daily[i].weather[0].icon);
        //create card body
      var fiveDayBody = document.createElement("div");
      fiveDayBody.setAttribute("class","card-body");
      fiveDayCard.appendChild(fiveDayBody);
        //fiveday date
      var fiveDayDate = (data.daily[i].dt);
        // converts date to string 
      var fiveDayDatems = fiveDayDate * 1000;
      var fiveDayDateObject = new Date(fiveDayDatems);
      var fiveDayDateString = fiveDayDateObject.toLocaleDateString();
      var fiveDayDateDay = fiveDayDateObject.toLocaleString("en-US", {weekday: "long"});
        // create card title
      var fiveDayTitle = document.createElement("h5");
      fiveDayTitle.setAttribute("class","card-title text-center")  
      fiveDayTitle.textContent = fiveDayDateDay;
      fiveDayBody.appendChild(fiveDayTitle);
        // create card text date
      var fiveDayTextDate = document.createElement("p");
      fiveDayTextDate.setAttribute("class","card-text text-center");
      fiveDayTextDate.textContent = fiveDayDateString;  
      fiveDayBody.appendChild(fiveDayTextDate);
      // console.log(fiveDayDateString);
      // console.log(fiveDayDateDay);
        // create temperature for card
      var fiveDayTemp = document.createElement("p");
      fiveDayTemp.setAttribute("class","card-text text-center");
      fiveDayTemp.textContent = "Temp: " + data.daily[i].temp.day + "\xb0";
      fiveDayBody.appendChild(fiveDayTemp);  
      // console.log(data.daily[i].temp.day);
        //create humidity for card
      var fiveDayHumidity = document.createElement("p");
      fiveDayHumidity.setAttribute("class","card-text text-center");
      fiveDayHumidity.textContent = "Humid.: " + data.daily[i].humidity +"%";
      fiveDayBody.appendChild(fiveDayHumidity);
      //  console.log(data.daily[i].humidity);
        //create weather description for card  
      var fiveDayDescription = document.createElement("p");
      fiveDayDescription.setAttribute("class","card-text text-center");
      fiveDayDescription.textContent = data.daily[i].weather[0].description;
      fiveDayBody.appendChild(fiveDayDescription);
      }
      });
  });


 


// // icon link
// http://openweathermap.org/img/wn/10d@2x.png

  

