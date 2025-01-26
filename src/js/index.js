/*
OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo 
cartao da lista
*/

// passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
// passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
const btn_avancar = document.getElementById("btn-avancar");
const btn_voltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartao_atual = 0;

// passo 2 - dar um jeito de identificar o clique do usuário na seta avançar

btn_avancar.addEventListener("click", function(){

    if(cartao_atual === cartoes.length-1){
        cartoes[cartao_atual].classList.remove("selecionado");
        cartao_atual = 0;
        cartoes[cartao_atual].classList.add("selecionado");
        return;
    }
    // passo 4 - buscar o cartão que esta selecionado e esconder

    cartoes[cartao_atual].classList.remove("selecionado");

    // passo 3 - fazer aparecer o próximo cartão da lista

    cartao_atual++;
    cartoes[cartao_atual].classList.add("selecionado");
})
/*
    OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão 
anterior da lista
*/
//  passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
btn_voltar.addEventListener("click", function(){
    if(cartao_atual === 0){
        cartoes[cartao_atual].classList.remove("selecionado");
        cartao_atual = cartoes.length - 1;
        cartoes[cartao_atual].classList.add("selecionado");
        return;
    }
//  passo 4 - buscar o cartão que esta selecionado e esconder

    cartoes[cartao_atual].classList.remove("selecionado");

//  passo 3 - fazer aparecer o cartão anterior da lista
    cartao_atual--;
    cartoes[cartao_atual].classList.add("selecionado");
})