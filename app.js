var input = document.querySelector('.input_text')
var main = document.querySelector('#name')
var temp = document.querySelector('.temp')
var desc = document.querySelector('.desc')
var clouds = document.querySelector('.clouds')
var button = document.querySelector('.submit')

button.addEventListener("click", function(name){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=2dd398a8e70f94b54066042f425fb782&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var descValue = data['weather'][0]['description']
        var tempValue = data['main']['temp']

        main.innerHTML = nameValue;
        desc.innerHTML = 'Description - '+descValue;
        temp.innerHTML = 'Temperature - '+tempValue
        input.value="";

    })
    .catch(err => alert("Wrong city name!"));
})