//METODOS DE ARRAY
//METODOS DE ITERAÇãO

// const numeros = [3, 2, 4, 3, 5, 1, 3, 4, 2];

// metódos de iteração recebem função como argumento
// uma função passada como argumento para outra se chama callback

// let encontraUmElemento = numeros.find((item) => item == 4);
// // encontra o primeiro elemento que corresponde a instrução
// // retornar o primeiro 5 que ele encontra
// // console.log(encontraUmElemento)

// let filtrarPorElemento = numeros.filter((item) => item == 6)
// // encontra todos os elemento que correspondem a instrução
// // retornar ouma lista com os elementos encontrados
// // console.log(filtrarPorElemento)

// let executarParaCadaElementoERetorna = numeros.map((item) => item * 2) 
// // console.log(executarParaCadaElementoERetorna)

// let somatorio = 0

// let executarParaCadaElementoSemRetorno = numeros.forEach((item) => somatorio += item)
// // console.log(executarParaCadaElementoSemRetorno)
// // console.log(somatorio)

// let reduzParaUmValor = numeros.reduce((acumulador, item) => acumulador + item)
// // console.log(reduzParaUmValor)

// let palavras = ["eu ", "estou ", 'com ', 'fome ']

// let reduzParaUmaFrase = palavras.reduce((acumulador, item) => acumulador + item)
// // console.log(reduzParaUmaFrase)

// console.log('Grazi ' + 'ta com fome')

// let ahsuhansiuha = numeros.find(function () {
//   return
// })

// function nome() {
//   return
// }

// () => {
//   return 
// }

// nome()

//OUTROS MÉTODOS DE ARRAY

const numeros = [3, 2, 4, 3, 5, 1, 3, 4, 2];
const outros = [7, 9, 6, 12, 18, 3, 19]

//concat

let arrayConcatenada = numeros.concat([7, 9, 6], [12, 18, 3], 19)
let outraArrayConcatenada = numeros.concat(outros)

// console.log(arrayConcatenada)
// console.log(numeros)

//push
let adicionaNoFinal = numeros.push(7, 9 ,21)
// console.log('retorno push', adicionaNoFinal)
// console.log('push', numeros)

let removeOUltimo = numeros.pop()
// console.log('retorno pop', removeOUltimo)
// console.log('pop', numeros)

let removeOPrimeiro = numeros.shift()
// console.log('retorno shift', removeOPrimeiro)
// console.log('shift', numeros)

let adicionaNoInicio = numeros.unshift(36, 28)
// console.log('retorno unshift', adicionaNoInicio)
// console.log('unshift', numeros)

// [36, 28, 2, 4, 3, 5, 1, 3, 4, 2, 7, 9]

let copiaUmaParte = numeros.slice(2, 8)
// console.log(copiaUmaParte)
// console.log('slice', numeros)
// console.log('-------------------------------------------')
// let removeQualquerElementos = numeros.splice(2, 4)
// console.log(removeQualquerElementos)
// console.log('splice', numeros)

// splice(indiceInicial, quantidadeARemover, ...ElementosAAdicionar)
let removeQualquerElementos2 = numeros.splice(2, 0, 100, 200, 999)
// console.log(removeQualquerElementos2)
// console.log('splice', numeros)

// [36, 28, 100, 200, 999, 2, 4, 3, 5, 1, 3, 4, 2, 7, 9]

let localizaElemento = numeros.indexOf(3)
console.log('indexOf', localizaElemento)

let verificaSeExiste = numeros.includes(200)
console.log('includes', verificaSeExiste)

let transformaString = numeros.join()
console.log('join', transformaString)
// console.log(numeros)

let ordenaLista = numeros.sort()
console.log('sort', ordenaLista)
// console.log(numeros)
















