//grabbing elements in the html
var citySearchEl = document.querySelector('#citySearch')
var weatherDisplay = document.querySelector
var searchBtnEl = document.querySelector('#searchBtn')
var searchHistoryEl = document.querySelector('#searchHistory');

//add event listener click to the search button. So when clicked saveInput function is called
searchBtnEl.addEventListener('click', saveInput)

//saveInput function gets the value citySearch input and calls getWeather function with the value of now currentCity
function saveInput(){
    var currentCity = citySearchEl.value
    //retrieves city list from local storage
    var cityList = JSON.parse(localStorage.getItem('cities')) || [];
    //adds input city to the list
    cityList.push(currentCity);
    //store updated list in local storage
    localStorage.setItem('cities', JSON.stringify(cityList));

    //makes the stored input cities into buttons
     var newBtn = document.createElement('button');
     newBtn.textContent = currentCity;
     newBtn.addEventListener('click', function(){
        getWeather(currentCity);
     });
     //appends button to the search history element
     searchHistoryEl.appendChild(newBtn);
     
     getWeather(currentCity);
}
//defining getWeather function and takes the argument by currentCity and grabs the location in the API call to get weather data for that location
getWeather();
function getWeather(location){
    //putting the geocode api which, converts the specified name of a location or zip/post code into the exact geographical coordinates, into a variable
    var geoCodeUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + location + '&appid=01419ff8550f356d26c30e63536b2aea'
    
    //making  fetch request for the geocode API which will return json data with lat and lon coords for the location we searched
    fetch(geoCodeUrl)
    .then(function (response){
    return response.json();
    })
    .then(function (data){
    //saving lat and lon coords to variables to use for the second API call for weather data
    var lat = data[0].lat
    var lon = data[0].lon
     
    //putting current weather API which, grabs the current day weather, into a variable
    var url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=01419ff8550f356d26c30e63536b2aea&units=imperial'
    
    //making a fetch request for current weather API which will return json data with weather info for location we searched
    fetch(url)
    .then(function (response){
    return response.json();
    })
    .then(function (data){
    // parsing the date from JSON data and saving it to a variable
    var date = new Date(data.dt * 1000);
    // var timeDate = document.querySelector('#currentDate').innerHTML = date.toDateString();

    //current variables saving various weather data so it can displayed on to page
    var currentCityEl = document.querySelector('#currentCity').innerHTML = data.name
    var currentDateEl = document.querySelector("#currentDate").innerHTML = date
    var iconCurrentImg = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png'
    var currentIconEl = document.querySelector('#currentIcon').setAttribute('src', iconCurrentImg)
    var currentTempEl = document.querySelector('#currentTemp').innerHTML = data.main.temp + ' &deg;F'
    var currentWindEl = document.querySelector('#currentWind').innerHTML = data.wind.speed + ' MPH'
    var currentHumidEl = document.querySelector('#currentHumid').innerHTML = data.main.humidity + '%'

    //putting 5 day forecast API which, grabs weather for the next 5 days, into a variable
    var currentUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=01419ff8550f356d26c30e63536b2aea&units=imperial'
    fetch(currentUrl)
    .then(function (response){
    return response.json();
    })
    .then(function (data){
        //days variables saving various weather data so it can displayed on to page
        var day1DateEl = document.querySelector("#day1Date").innerHTML = data.list[0].dt_txt
        var iconImg1 = 'http://openweathermap.org/img/w/' + data.list[0].weather[0].icon + '.png'
        var day1IconEl = document.querySelector('#day1Icon').setAttribute('src', iconImg1)
        var day1TempEl = document.querySelector('#day1Temp').innerHTML = data.list[0].main.temp + ' &deg;F'
        var day1WindEl = document.querySelector('#day1Wind').innerHTML = data.list[0].wind.speed + ' MPH'
        var day1HumidEl = document.querySelector('#day1Humid').innerHTML = data.list[0].main.humidity + '%'

        var day2DateEl = document.querySelector("#day2Date").innerHTML = data.list[8].dt_txt
        var iconImg2 = 'http://openweathermap.org/img/w/' + data.list[8].weather[0].icon + '.png'
        var day2IconEl = document.querySelector('#day2Icon').setAttribute('src', iconImg2)
        var day2TempEl = document.querySelector('#day2Temp').innerHTML = data.list[8].main.temp + ' &deg;F'
        var day2WindEl = document.querySelector('#day2Wind').innerHTML = data.list[8].wind.speed + ' MPH'
        var day2HumidEl = document.querySelector('#day2Humid').innerHTML = data.list[8].main.humidity + '%'

        var day3DateEl = document.querySelector("#day3Date").innerHTML = data.list[16].dt_txt
        var iconImg3 = 'http://openweathermap.org/img/w/' + data.list[16].weather[0].icon + '.png'
        var day3IconEl = document.querySelector('#day3Icon').setAttribute('src', iconImg3)
        var day3TempEl = document.querySelector('#day3Temp').innerHTML = data.list[16].main.temp + ' &deg;F'
        var day3WindEl = document.querySelector('#day3Wind').innerHTML = data.list[16].wind.speed + ' MPH'
        var day3HumidEl = document.querySelector('#day3Humid').innerHTML = data.list[16].main.humidity + '%'

        var day4DateEl = document.querySelector("#day4Date").innerHTML = data.list[24].dt_txt
        var iconImg4 = 'http://openweathermap.org/img/w/' + data.list[24].weather[0].icon + '.png'
        var day4IconEl = document.querySelector('#day4Icon').setAttribute('src', iconImg4)
        var day4TempEl = document.querySelector('#day4Temp').innerHTML = data.list[24].main.temp + ' &deg;F'
        var day4WindEl = document.querySelector('#day4Wind').innerHTML = data.list[24].wind.speed + ' MPH'
        var day4HumidEl = document.querySelector('#day4Humid').innerHTML = data.list[24].main.humidity + '%'

        var day5DateEl = document.querySelector("#day5Date").innerHTML = data.list[32].dt_txt
        var iconImg5 = 'http://openweathermap.org/img/w/' + data.list[32].weather[0].icon + '.png'
        var day5IconEl = document.querySelector('#day5Icon').setAttribute('src', iconImg5)
        var day5TempEl = document.querySelector('#day5Temp').innerHTML = data.list[32].main.temp + ' &deg;F'
        var day5WindEl = document.querySelector('#day5Wind').innerHTML = data.list[32].wind.speed + ' MPH'
        var day5HumidEl = document.querySelector('#day5Humid').innerHTML = data.list[32].main.humidity + '%'
 
    }) 
    })
})
}
