// const numeros = [3,2,4,3,5,1,3,4,2]
// console.log(numeros)

// metódos de iteração recebem função como argumento
// uma função passada como argumento para outra se chama callback

// let encontraNumeros = numeros.find((item) => item ==4);
// encontra o primeiro elementos que corresponde a instrução
// retornar o primeiro 5 que ele encontra
// console.log(encontraUmElemento)

// let filtrarPorElemento = numeros.filter((item) => {return item == 4})
// encontra todos elementos que corresponde a instrução
// retornar uma lista com os elementos encontrados
// console.log(filtrarPorElemento)

// let executarParaCadaElementoERetorna = numeros.map((item) => item * 2)
// console.log(executarParaCadaElemento)

// let executarParaCadaElementoSemRetorno = numeros.forEach((item) => item * 3)
// console.log(executarParaCadaElementoSemRetorno)

// let reduzParaUmValor = numeros.reduce((acumulador, item) => acumulador + item)
// console.log(reduzParaUmValor)

// let palavras = ["eu", "estou", "com", "fome"]

// let reduzParaUmFrase = palavras.reduce((acumulador, item) => acumulador + item)
// console.log(reduzParaUmFrase)

// Outros métodos de array

// Concat

const numeros = [3,2,4,3,5,1,3,4,2]

let arrayConcatenada = numeros.concat([7, 9, 6])
console.log(arrayConcatenada)
console.log(numeros)

// Push - adiciona novos elementos ao final do array original

let adicionaNoFinal = numeros.push(7)
console.log(adicionaNoFinal)
console.log('push', numeros)

// Pop - remove o último elemento do array original

let removeOUltimo = numeros.pop()
console.log(removeOUltimo)
console.log('pop', numeros)

// Shift - remove o primeiro elemento do array original

let removeOPrimeiro = numeros.shift()
console.log(removeOPrimeiro)
console.log('shift', numeros)

// Unshift - adiciona elemento no inicio do array original

let adicionaNoInicio = numeros.unshift(36, 28)
console.log('retorno unshift', adicionaNoInicio)
console.log('unshift', numeros)

// Slice - Primeiro parametro da onde inicia a copia e o Segundo até onde vai

let copiaUmaParte = numeros.slice(2, 8)
console.log(copiaUmaParte)
console.log('slice', numeros)

// Splice - primeiro parametro da onde começa, segundo quantos remover, terceiro adiciona elementos

let removeQualquerElemento = numeros.splice(2, 0, 100)
console.log(removeQualquerElemento)
console.log('splice', numeros)

// IndexOf

let localizaElemento = numeros.indexOf(3)
console.log(localizaElemento)

// Includes

let verificaSeExiste = numeros.includes(200)
console.log(verificaSeExiste)

// Join

let transformarString = numeros.join(' - ')
console.log(transformarString)

// Sort

let ordenaLista = numeros.sort()
console.log(ordenaLista)
