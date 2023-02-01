var resposta = document.getElementById("answer");

var valorEmDolar = 10;
var valorEmEuro = 10;
var valorEmIene = 10;
var valorEmBitcoin = 10;

var cotacaoDoDolar = 5.32;
var cotacaoDoEuro = 5.55;
var cotacaoDoIene = 0.039;
var cotacaoDoBitcoin = 117045.32;


// Multiplicação
var realDolar = valorEmDolar * cotacaoDoDolar;
var realEuro = valorEmEuro * cotacaoDoEuro;
var realIene = valorEmIene * cotacaoDoIene;
var realBitcoin = valorEmBitcoin * cotacaoDoBitcoin;

function convercao (){
    realDolar = realDolar.toFixed(2);
    realEuro = realEuro.toFixed(2);
    realIene = realIene.toFixed(2);
    realBitcoin = realBitcoin.toFixed(2);
    // console.log("Dolar:" + realDolar + "\n Euro" + realEuro + "\nIene" + realIene);
    resposta.innerHTML = '<h2>O valor de conversão destas moedas para real ficará:</h2>' + "<br>Em dolar: R$" + realDolar + "<br>Em Euro R$" + realEuro + "<br>Em Iene R$" + realIene + "<br><br>Em Bitcoin: R$" + realBitcoin;
}
// Arredondamento 
// math.round sere para retornar valores arredondados

// Método toFixed formata um número utilizando notação ponto fixo


convercao()

// alert('Conversão de Moedas Pra Real \n\nO valor em dolar é R$' + realDolar + '\n');
