var celcius = 24;
var fahrenheits = document.getElementById("main-f");
var kelvins = document.getElementById("main-k");

kelvin = celcius + 273.15

fahrenheits.innerHTML = "Celcius: 24° -> Fahrenheit: "  + ((celcius * 1.8) + 32) + "°";
kelvins.innerHTML = "Celcius: 24° -> Kelvin: "  +  kelvin + "°";

// modificar e otimizar a função abaixo, implementando ela no código

// function cToF(){
//     let output = (parseFloat(celcius.value) * 9/5) + 32;
//     fahrenheit.value = parseFloat(output.toFixed(2));
// }

// function fToC(){
//     let output = (parseFloat(fahrenheit.value) - 32) * 5/9
//     celcius.value = parseFloat(output.toFixed(2));
// }