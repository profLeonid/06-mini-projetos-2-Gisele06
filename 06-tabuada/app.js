'use strict'

const criarListaNumero = function(quantidade){
    let listaNumeros = []

    for(let i = 1; i <= quantidade; i++){
        listaNumeros.push(i)
    }
    return listaNumeros

}

const criarListaAdicao = function(quantidade){
    let listaAdicao = []
    let N = quantidade

    for(let i = 1; i <= quantidade; i++){
        listaAdicao.push(i + N)
    }
    return listaAdicao

}

const criarListaSubtracao = function(quantidade){
    let listaSubtracao = []
    let N = quantidade

    for(let i = 1; i <= quantidade; i++){
        listaSubtracao.push(N - i)
    }
    return listaSubtracao

}

const criarListaMultiplicacao = function(quantidade){
    let listaMultiplicacao = []
    let N = quantidade

    for(let i = 1; i <= quantidade; i++){
        listaMultiplicacao.push(i * N)
    }
    return listaMultiplicacao

}

const criarListaDivisao = function(quantidade){
    let listaDivisao = []
    let N = quantidade

    for(let i = 1; i <= quantidade; i++){
     
        listaDivisao.push(Number(N/i).toFixed(2))
    }
    return listaDivisao

}



console.log(criarListaNumero(10))
console.log(criarListaAdicao(10))
console.log(criarListaSubtracao(10))
console.log(criarListaDivisao(10))