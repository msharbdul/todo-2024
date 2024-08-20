let form=document.getElementById("form")
let cityinput=document.getElementById("cityinput")
// let button=document.getElementById("button")
let displayweather=document.getElementById("weather-display")
let APIkey ="d2a180bc23b5aed61c4f2f35541fb791"

form.addEventListener("submit", function(event){
    event.preventDefault()
    let city=cityinput.value
    collectWeatherReport(city)
    form.reset()
})
function collectWeatherReport(city){
    let weatherRequest= new XMLHttpRequest()
    weatherRequest.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`)

    weatherRequest.onreadystatechange=function(){
        if(this.readyState === 4 && this.status===200){
            let data= JSON.parse(this.responseText)
            PrintWeatherOnUi(data)
        }
    }
    weatherRequest.send()
}
function PrintWeatherOnUi(data){
    displayweather.innerHTML=` `
    let temprature=data.main.temp
    let humidity=data.main.humidity
    let nameOfCity=data.name

    let cityinputname=document.createElement("div")
    cityinputname.classList.add("city-input-name")

    let nameofcitytext=document.createElement("h1")
    nameofcitytext.textContent=nameOfCity

    let humiditycontnrtittle=document.createElement("div")
    humiditycontnrtittle.classList.add("Humidity-contnr")

    let humiditytexttilte=document.createElement("p")
    humiditycontnrtittle.textContent="humidity"

    let displayhumdity=document.createElement("h5")
    displayhumdity.textContent=humidity

    let currentmpcontainer=document.createElement("div")
    currentmpcontainer.classList.add("current-temp-contnr")
    
    let displaytemtittle=document.createElement("p")
    displaytemtittle.textContent="current temprature"

    let displaycurrenttemp=document.createElement("h5")
    displaycurrenttemp.textContent=`${(temprature-273.15).toFixed()}ºc`

    cityinputname.append(nameofcitytext)
    currentmpcontainer.append(displaytemtittle,displaycurrenttemp)
    humiditycontnrtittle.append(humiditytexttilte,displayhumdity)
    displayweather.append(cityinputname,currentmpcontainer,humiditycontnrtittle)
}

