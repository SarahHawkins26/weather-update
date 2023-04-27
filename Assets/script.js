
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
    var lat = data[0].lat;
    var lon = data[0].lon;
     

    var url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=01419ff8550f356d26c30e63536b2aea&units=imperial'
    fetch(url)
    .then(function (response){
    return response.json();
    })
    .then(function (data){
    console.log(data)
    console.log(data.dt)
    var date = new Date(data.dt * 1000)
    //current variables
    var currentDateEl = document.querySelector("#currentDate").innerHTML = date

    
    var currentUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=01419ff8550f356d26c30e63536b2aea&units=imperial'
    fetch(currentUrl)
    .then(function (response){
    return response.json();
    })
    .then(function (data){
        console.log(data)
        console.log(data.city.name)
        //days variables
        var day1TempEl = document.querySelector('#day1Temp').innerHTML = data.list[0].main.temp + ' &deg;F'

        var iconImg1 = 'http://openweathermap.org/img/w/' + data.list[0].weather[0].icon + '.png'
        var day1IconEl = document.querySelector('#day1Icon').setAttribute('src', iconImg1)
        
        // var day1IconEl = document.querySelector('#day1Icon').setAttribute('src', 'http://openweathermap.org/img/w/' + data.list[0].weather[0].icon + '.png')
        var day2TempEl = document.querySelector('#day2Temp').innerHTML = data.list[8].main.temp
        var day2WindEl = document.querySelector('#day2Wind').innerHTML - + 'MPH'
 
    }) 
    })
})




}
