'use strict'

const criarListaNumeros = function(quantidade){
    let listaNumeros = []

    for(let i = 1; i <= quantidade; i++){
        listaNumeros.push(i)
    }
    return listaNumeros

}

const criarListaPares = function(quantidade){
    let listaPares = []
    let cont = 0
    
    for(let i = 1; i <= quantidade; i++){
        cont = cont + 2
        listaPares.push(cont)
    }

    return listaPares
}

const criarListaImpares = function(quantidade){
    let listaImpares = []
    let cont = 1
    
    for(let i = 1; i <= quantidade; i++){
        cont = cont + 2
        listaImpares.push(cont)
    }

    return listaImpares
}


const criarListaMultiplos = function(quantidade){
    let listaMultiplos = [] 
    
    for(let i = 1; i <= quantidade; i++){
        let cont = i * 5
        listaMultiplos.push(cont)
    }

    return listaMultiplos
}

const criarListaPotencias = function(quantidade){
    let listaPotencias = []

    for(let i = 1; i <= quantidade; i++){
        listaPotencias.push(2 **(i-1))
    }
    
    return listaPotencias
}

const criarLinha = function(num, par, impar, mult, pot){
    const tbody = document.getElementById('tbody')
    const tr = document.createElement('tr')
    
    const tdNum = document.createElement('td')
    tdNum.textContent = num

    const tdPar = document.createElement('td')
    tdPar.textContent = par

    const tdImpar = document.createElement('td')
    tdImpar.textContent = impar

    const tdMult = document.createElement('td')
    tdMult.textContent = mult

    const tdPot = document.createElement('td')
    tdPot.textContent = pot

    
    tr.replaceChildren(tdNum, tdPar, tdImpar, tdMult, tdPot)
    tbody.appendChild(tr)

}

const handleClick = function(){
    const quantidade = Number(document.getElementById('quantidade').value)

    const listaNumeros      = criarListaNumeros(quantidade)
    const listaPares        = criarListaPares(quantidade)
    const listaImpares      = criarListaImpares(quantidade)
    const listaPotencias    = criarListaPotencias(quantidade)
    const listaMultiplos    = criarListaMultiplos(quantidade)

    document.getElementById('tbody').replaceChildren()

    for(let i = 0; i < quantidade; i++){
        criarLinha(listaNumeros[i], listaPares[i],listaImpares[i], listaMultiplos[i],listaPotencias[i])
    }
}
// console.log(criarListaNumeros(6))
// console.log(criarListaPares(6))
// console.log(criarListaImpares(6))
// console.log(criarListaMultiplos(6))
// console.log(criarListaPotencias(5))