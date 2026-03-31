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
     
        listaDivisao.push(Number((N/i).toFixed(2)))
    }
    return listaDivisao

}

const criarLinha = function(num, adicao, sub, mult, div){
    const tbody = document.getElementById('tbody')
    const tr = document.createElement('tr')
    
    const tdNum = document.createElement('td')
    tdNum.textContent = num

    const tdAdi = document.createElement('td')
    tdAdi.textContent = adicao

    const tdSub = document.createElement('td')
    tdSub.textContent = sub

    const tdMult = document.createElement('td')
    tdMult.textContent = mult

    const tdDiv = document.createElement('td')
    tdDiv.textContent = div

    
    tr.replaceChildren(tdNum, tdAdi, tdSub, tdMult, tdDiv)
    tbody.appendChild(tr)

}

const handleClick = function(){
    const quantidade = Number(document.getElementById('quantidade').value)

    const listaNumeros            = criarListaNumero(quantidade)
    const listaAdicao             = criarListaAdicao(quantidade)
    const listaSubtracao          = criarListaSubtracao(quantidade)
    const listaMultiplicacao      = criarListaMultiplicacao(quantidade)
    const listaDivisao            = criarListaDivisao(quantidade)

    document.getElementById('tbody').replaceChildren()

    for(let i = 0; i < quantidade; i++){
        criarLinha(listaNumeros[i], listaAdicao[i], listaSubtracao[i], listaMultiplicacao[i],listaDivisao[i])
    }
}


// console.log(criarListaNumero(10))
// console.log(criarListaAdicao(10))
// console.log(criarListaSubtracao(10))
// console.log(criarListaDivisao(10))