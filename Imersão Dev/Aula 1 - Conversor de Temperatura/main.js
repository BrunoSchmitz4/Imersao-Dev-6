var celcius = 24;
var fahrenheits = document.getElementById("main-f");
var kelvins = document.getElementById("main-k");

kelvin = celcius + 273.15
fahrenheits.innerHTML = "Celcius: 24° -> Fahrenheit: "  + ((celcius * 1.8) + 32) + "°";
kelvins.innerHTML = "Celcius: 24° -> Kelvin: "  +  kelvin + "°";