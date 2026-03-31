'use strict'

const criarListaMes = function(parcela){
    let listaMeses = []

    for(let i = 1; i <= parcela; i++){
        listaMeses.push(i)
    }
    return listaMeses

}

const criarListaParcela = function(valor, parcela){
    let listaParcelas = []
    valorParcela = valor / parcela

    for(let i = 1; i <= parcela; i++){
        listaParcelas.push(valorParcela)
    }
    return listaParcelas
}

const criarListaJuros = function(valor, juros, parcela){
    let listaJuros = []
    let saldoDevedor = valor - parcela
    let juroMes = Number(saldoDevedor*(juros/100))

  for(let i = 1; i <= parcela; i++){
     listaJuros.push(juroMes)
    }
    return listaJuros    
}

