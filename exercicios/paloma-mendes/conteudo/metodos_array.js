// metódos de iteração recebem uma função como argumento
// uma função passada como argumento para outra se chama callback
//METODOS DE INTERAÇÃO
// METODO FIND
const numeros = [3, 2, 4, 5, 1, 3, 4, 2];
let encontraUmElemento = numeros.find((item) => item == 5);
//encontra o primeiro elemento que corresponde a instrução e retorna, e para
console.log(encontraUmElemento)

// METODO FILTER
let filtrarPorElemento = numeros.filter ((item) => item == 2);
//encontra todos os elementos que correspodem a instrução e retorna todos os elementos encontrados em uma lista
console.log(filtrarPorElemento)

// METODO MAP
let executarParaCadaElementoERetorna = numeros.map((item) => item * 2);
//faz a instrução com todos os elementos do array e retorna um novo array do resultado da instrução
console.log(executarParaCadaElementoERetorna)

// METODO forEach
let somatorio = 0
let executarParaCadaElementoSemRetorno = numeros.forEach ((item) => somatorio +=item);
//executa a intrução mas não mostra os resultados
console.log(executarParaCadaElementoSemRetorno)
console.log(somatorio)

// METODO REDUCE
let reduzParaUmValor = numeros.reduce((acumulador, item) => acumulador + item)
//executa a instrução para cada elemento do array, e depois traz o resultado que foi acumulado de todos os elementos
//não é necessário declarar variavel antes para atribuir posteriormente o resultado da instrução, ele já tem um parametro que acumula o resultado
console.log(reduzParaUmValor)