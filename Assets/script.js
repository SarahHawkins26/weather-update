var citySearchEl = document.querySelector('#citySearch')
var weatherDisplay = document.querySelector
var searchBtnEl = document.querySelector('#searchBtn')

searchBtnEl.addEventListener('click', saveInput)
function saveInput(){
    var currentCity = citySearchEl.value
    console.log(currentCity)
    getWeather(currentCity)


}

getWeather();
function getWeather(location){

    var geoCodeUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + location + '&appid=01419ff8550f356d26c30e63536b2aea'
    fetch(geoCodeUrl)
    .then(function (response){
    return response.json();
    })
    .then(function (data){
        console.log(data)
    console.log(data[0].lat)
    var lat = data[0].lat
    var lon = data[0].lon
     
    var url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=01419ff8550f356d26c30e63536b2aea&units=imperial'
    fetch(url)
    .then(function (response){
    return response.json();
    })
    .then(function (data){
    console.log(data)
    console.log(data.dt)
    var date = new Date(data.dt * 1000);
    // var timeDate = document.querySelector('#currentDate').innerHTML = date.toDateString();
    //current variables
    var currentCityEl = document.querySelector('#currentCity').innerHTML = data.name
    var currentDateEl = document.querySelector("#currentDate").innerHTML = date
    var iconCurrentImg = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png'
    var currentIconEl = document.querySelector('#currentIcon').setAttribute('src', iconCurrentImg)
    var currentTempEl = document.querySelector('#currentTemp').innerHTML = data.main.temp + ' &deg;F'
    var currentWindEl = document.querySelector('#currentWind').innerHTML = data.wind.speed + ' MPH'
    var currentHumidEl = document.querySelector('#currentHumid').innerHTML = data.main.humidity + '%'

    var currentUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=01419ff8550f356d26c30e63536b2aea&units=imperial'
    fetch(currentUrl)
    .then(function (response){
    return response.json();
    })
    .then(function (data){
        console.log(data)
        console.log(data.city.name)
        //days variables
        var day1DateEl = document.querySelector("#day1Date").innerHTML = data.list[0].dt_txt
        var iconImg1 = 'http://openweathermap.org/img/w/' + data.list[0].weather[0].icon + '.png'
        var day1IconEl = document.querySelector('#day1Icon').setAttribute('src', iconImg1)
        var day1TempEl = document.querySelector('#day1Temp').innerHTML = data.list[0].main.temp + ' &deg;F'
        var day1WindEl = document.querySelector('#day1Wind').innerHTML = data.list[0].wind.speed + ' MPH'
        var day1HumidEl = document.querySelector('#day1Humid').innerHTML = data.list[0].main.humidity + '%'

        var day2DateEl = document.querySelector("#day2Date").innerHTML = data.list[8].dt_txt
        var iconImg2 = 'http://openweathermap.org/img/w/' + data.list[8].weather[0].icon + '.png'
        var day2IconEl = document.querySelector('#day2Icon').setAttribute('src', iconImg2)
        var day2TempEl = document.querySelector('#day2Temp').innerHTML = data.list[8].main.temp
        var day2WindEl = document.querySelector('#day2Wind').innerHTML = data.list[8].wind.speed + ' MPH'
        var day2HumidEl = document.querySelector('#day2Humid').innerHTML = data.list[8].main.humidity + '%'

        var day3DateEl = document.querySelector("#day3Date").innerHTML = data.list[16].dt_txt
        var iconImg3 = 'http://openweathermap.org/img/w/' + data.list[16].weather[0].icon + '.png'
        var day3IconEl = document.querySelector('#day3Icon').setAttribute('src', iconImg3)
        var day3TempEl = document.querySelector('#day3Temp').innerHTML = data.list[16].main.temp
        var day3WindEl = document.querySelector('#day3Wind').innerHTML = data.list[16].wind.speed + ' MPH'
        var day3HumidEl = document.querySelector('#day3Humid').innerHTML = data.list[16].main.humidity + '%'

        var day4DateEl = document.querySelector("#day4Date").innerHTML = data.list[24].dt_txt
        var iconImg4 = 'http://openweathermap.org/img/w/' + data.list[24].weather[0].icon + '.png'
        var day4IconEl = document.querySelector('#day4Icon').setAttribute('src', iconImg4)
        var day4TempEl = document.querySelector('#day4Temp').innerHTML = data.list[24].main.temp
        var day4WindEl = document.querySelector('#day4Wind').innerHTML = data.list[24].wind.speed + ' MPH'
        var day4HumidEl = document.querySelector('#day4Humid').innerHTML = data.list[24].main.humidity + '%'

        var day5DateEl = document.querySelector("#day5Date").innerHTML = data.list[32].dt_txt
        var iconImg5 = 'http://openweathermap.org/img/w/' + data.list[32].weather[0].icon + '.png'
        var day5IconEl = document.querySelector('#day5Icon').setAttribute('src', iconImg5)
        var day5TempEl = document.querySelector('#day5Temp').innerHTML = data.list[32].main.temp
        var day5WindEl = document.querySelector('#day5Wind').innerHTML = data.list[32].wind.speed + ' MPH'
        var day5HumidEl = document.querySelector('#day5Humid').innerHTML = data.list[32].main.humidity + '%'
 
    }) 
    })
})




}
