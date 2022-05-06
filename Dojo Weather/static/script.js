

function hide(element){
    document.querySelector("#popup").remove(element);
}


var high = document.querySelectorAll(".high h3");
var low = document.querySelectorAll(".low h3");
console.log(document.getElementById('current_max').innerText)

function chooseTemp(choice){
    for (var i=0; i <= 4; i++) {
        var highT = document.getElementsByClassName('high')[i].innerText;
        highT = highT.replace("°","");
        var lowT = document.getElementsByClassName('low')[i].innerText;
        lowT = lowT.replace("°","");
        console.log(document.getElementById("current_max"));
        if (choice.value == "C"){
                var newhighT = ((highT-32)/1.8);
                var newlowT = ((lowT-32)/1.8);
                newhighT = newhighT.toFixed(0);
                newlowT = newlowT.toFixed(0);
                document.getElementsByClassName('high')[i].innerText = newhighT + "°";
                document.getElementsByClassName('low')[i].innerText = newlowT + "°";
                console.log(newhighT,newlowT);
            } 
        else {
                var newhighT = ((highT * 1.8) + 32);
                newhighT = newhighT.toFixed(0);
                document.getElementsByClassName('high')[i].innerText = newhighT + "°";
                var newlowT = ((lowT * 1.8) + 32);
                newlowT = newlowT.toFixed(0);
                document.getElementsByClassName('low')[i].innerText = newlowT + "°";
            }
    }
} 

// $.ajax({
//     url: "/api/getWeather",
//     data: {
//       zipcode: 97201
//     },
//     success: function( result ) {
//       $( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
//     }
// })



if (document.getElementById("thistemp") == "C"){
    var thistemp = "metric";
} else {
    var thistemp = "imperial";
}

function cityClick(city){
    // Converts the fetch url into a working url for the desired city.
    console.log(city);
    globalThis.url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=8392d4fc2c303f9ad87d17363e8291b4&units=" + thistemp;
    document.getElementById('current_city').innerText = document.getElementById(city).innerText;

}
fetch(url)
    .then(response => response.json() )
    .then(cityData => console.log(cityData) )
    .catch(err => console.log(err) )


async function getCityData() {
    
    // The await keyword lets js know that it needs to wait until it gets a response back to continue.
    var response = await fetch(url);
    // We then need to convert the data into JSON format.
    var cityData = await response.json();
    console.log(cityData);
    // current_maxx = document.getElementById("current_max").innerHTML;
    // current_maxx = current_maxx.replace("°","");
    // current_maxx = current_maxx.toFixed(0);
    console.log(document.getElementById("current_max"));
    console.log(cityData.main.temp_max);
    var newMax = cityData.main.temp_max + "°";
    document.getElementById("current_max").innerHTML = newMax;
    console.log(document.getElementById("current_max"));
    document.getElementById("current_min").innerText = cityData.main.temp_min + "°";
    document.getElementById("current_pic").src = ("http://openweathermap.org/img/wn/" + cityData.weather[0].icon + "@2x.png");
   
    console.log(cityData.weather[0]); 
    document.getElementById("current_description").innerText = cityData.weather[0].description;
    return cityData;

}

    // console.log(getcityData());
