let numeroSecreto= gerarNumeroAleatorio();



function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute(){
    let chute=document.querySelector('input').value
    
    if(chute==numeroSecreto){
        exibirTextoNaTela('h1','acertou');
        exibirTextoNaTela('p','voce descobriu o numero secreto');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroSecreto){
        exibirTextoNaTela('p','o numero secreto e menor ');
       } else{ 
      exibirTextoNaTela('p','o numero secreto e maior ');
      }
      limparCampo();
 }
}

function gerarNumeroAleatorio(){
   return parseInt(Math.random() *10 +1)
}


function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarjogo(){
    numeroSecreto ==gerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
    exibirTextoNaTela('h1','acertou');
    exibirTextoNaTela('p','voce descobriu o numero secreto');
}