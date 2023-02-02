// o parseInt adjuda a sortear números apenas inteiros
var numeroSecreto = parseInt(Math.random() * 1001);

//Funciona como um alert()
var chute = '';
var tentativa = 0;
var iniciar = '';
var jogo = 1;

while(jogo == 1){
    while (chute != numeroSecreto){

        var chute = prompt('Chute um número (entre 1 e 1000) :)');
        if (chute == numeroSecreto){
            iniciar = prompt('Parabéns, você acertou!! O número realmente era' + numeroSecreto + '. Você fez '+tentativa+'/10 de suas tentativas.'+
                '\nQuer tentar de novo?(Sim/Não)')
                // Se quiser jogar de novo
                if((iniciar == 'sim') || (iniciar == 'Sim')){
                    jogo = 1
                    tentativa = 0
                }
                // Se não quiser jogar de novo
                else if((iniciar == 'não') || (iniciar == 'Não')){
                    jogo = 0
                    tentativa = 0
                }
            while((iniciar != 'sim') || (iniciar != 'Sim') || (iniciar != 'não') || (iniciar != 'Não')){
                iniciar = prompt('Parabéns, você acertou!! O número realmente era' + numeroSecreto + 'Você fez'+tentativa+'/10 de suas tentativas.'+
                '\nQuer tentar de novo?(Sim/Não)');
                // Se quiser jogar de novo
                    if((iniciar == 'sim') || (iniciar == 'Sim')){
                        jogo = 1
                        tentativa = 0
                    }
                    // Se não quiser jogar de novo
                    else if((iniciar == 'não') || (iniciar == 'Não')){
                        jogo = 0
                        tentativa = 0
                }
            };
        }else if (chute < numeroSecreto){
            alert('Ou nous, você errou! O número secreto é maior que ' + chute + '.');
            tentativa += 1
        }else if(chute > numeroSecreto){
            alert('Ou nous, você errou! O número secreto é menor que ' + chute + '.');
            tentativa += 1
        };
        if(tentativa == 10){
            // Impedir erro de respostas diferentes
            iniciar = prompt("Suas tentativas acabaram, você perdeu o jogo!\nQuer tentar de novo?(Sim/Não)");
                // Se quiser jogar de novo
                if((iniciar == 'sim') || (iniciar == 'Sim')){
                    jogo = 1
                    tentativa = 0
                }
                // Se não quiser jogar de novo
                else if((iniciar == 'não') || (iniciar == 'Não')){
                    jogo = 0
                    tentativa = 0
                }
            // while((iniciar != 'sim') || (iniciar != 'Sim') || (iniciar != 'não') || (iniciar != 'Não')){
            //     iniciar = prompt("Suas tentativas acabaram, você perdeu o jogo!\nQuer tentar de novo?(Sim/Não)")
            //     // Se quiser jogar de novo
            //     if((iniciar == 'sim') || (iniciar == 'Sim')){
            //         jogo = 1
            //         tentativa = 0
            //     }
            //     // Se não quiser jogar de novo
            //     else if((iniciar == 'não') || (iniciar == 'Não')){
            //         jogo = 0
            //         tentativa = 0
            //     }
            // }
        }
    };
    // Se perder
    
}

// Verificação com IF sem DICA
// if (chute == 1){ 
//     alert('Você acertou!');   
// }else{
//     alert('Vish kk...tente novamente.');
// }

// Verificação com IF com DICA
// if (chute == numeroSecreto){ 
//     alert('Você acertou!');   
// }else if(chute > numeroSecreto){
//     alert('Errou...o número secreto é menor');
// }else if(chute < numeroSecreto){
//     alert('Errou...o número secreto é maior');
// }

// Verificação com WHILE

