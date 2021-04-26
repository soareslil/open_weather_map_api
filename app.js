var input = document.querySelector('.input_text')
var main = document.querySelector('#name')
var temp = document.querySelector('.temp')
var desc = document.querySelector('.desc')
var clouds = document.querySelector('.clouds')
var windspeed = document.querySelector('.winds')
var button = document.querySelector('.submit')

button.addEventListener("click", function(name){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=2dd398a8e70f94b54066042f425fb782&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var descValue = data['weather'][0]['description']
        var tempValue = data['main']['temp']
        var cloudValue = data['clouds']['all']
        var windsValue = data['wind']['speed']


        input.value="";
        main.innerHTML = nameValue;
        temp.innerHTML = 'Temperature - '+tempValue;
        desc.innerHTML = 'Description - '+descValue;
        clouds.innerHTML = 'Clouds - '+cloudValue;
        windspeed.innerHTML = 'Wind - '+windsValue;
console.log(data)
    })
    .catch(err => alert("Wrong city name!"));
})