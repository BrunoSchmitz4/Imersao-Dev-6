var result = document.getElementById("main-p");
var luz = 299792458;
var metros = 2;
var kms = luz / 1000;

function calculo(){
    metro = metros * luz;
    km = kms / luz;
    result.innerHTML = 'O resultado em metros ficará: ' + metro + 'm' + '<br>O resultado em kilômetros ficará: ' + km + 'km';
}

calculo()
// console.log("Miau");