let MarcaProcessadores = ["Intel","AMD"]
let modelosIntel = new Array()
let placasmae = Array.of("Para AMD", "Para INTEL")
let alfabeto = "ABCBDEFGHIJKLMNOPQ"
let nome = "Julia Arcelino"
let numeros = [0,3,5,64,34,6,3,2,6,21,1,2,7,9]
//Split: corta uma lista no meio, a partir do momento que encontra o que foi digitado no parenteses
let alfabetoArray = alfabeto.split("M")

//Mas se você não coloca nada dentro, o split vai separar TODOS os itens da lista
nomeArray = nome.split("")

/*FIND:
O que o find faz? Ele percorrer uma lista e procura por aquele item que você mandou ele procurar.
Se ele não encontra, ele dá como undefined
Se ele encontra, ele PEGA esse objeto e arrasta pra você. Ou seja, ele captura
*/

//Criar um objeto = Este objeto irá receber a lista.find
//em find, funciona assim: find((OUTRO let e algum nome que você der) => o nome que você deu == o item que você esá buscando)

//No fim, o nome que você deu é transferido para -> O let que você criou pro find
//Precisa ser feito assim pois find é uma função, e essa função precisa de uma variável dentro. Então, no fim, você precisa criar duas variáveis pra dar find em algo
let encontrarElemento = numeros.find((busca) => busca == 6);
console.log(encontrarElemento)

let alunas = ["Julia Guedes", "Maria", "Lilit"]
let encontrarNome1 = alunas.find((busca) => busca == "Julia")
let encontrarNome2 = alunas.find((busca) => busca == "Julia Guedes")
console.log(encontrarNome1)
console.log(encontrarNome2)

//

let filtrarPorElemento = numeros.filter((busca) => busca == 6)
console.log(filtrarPorElemento)

let executarCadaElemento = numeros.map((busca) => busca * 2)
console.log(executarCadaElemento)

/////////////////////////////////

//Concatenar é juntar duas coisas, não é?
//A concatenação de arrays é literalmente unir uma array com outra. Exemplo:

const novosNumeros = [1,2,3,4,5]
const maisNovosNumeros = [6,7,8,9]
let arrayConcatenada = novosNumeros.concat(maisNovosNumeros)

console.log(novosNumeros)
console.log(arrayConcatenada)

//PUSH
//O que é push? É adicionar um elemento no final de uma array
//OU SEJA, o push é usado para criar o cadastro de um novo usuário, certo? E o push adiciona este usuário a lista de usuários
numerosDeElementos = arrayConcatenada.push(10)
console.log(arrayConcatenada)
console.log(numerosDeElementos)

//POP
//É literalmente tirar o último da array. Muito fácil hein? é o contrário de push
arrayConcatenada.pop()
console.log(arrayConcatenada)

//SHIFT
//Remove o primeiro item da lista
arrayConcatenada.shift()
console.log(arrayConcatenada)

//Unshift
//Adiciona itens que você quiser, no começo da lista
arrayConcatenada.unshift(0,1)
console.log(arrayConcatenada)

//recortar uma lista de elementos
//Essa parte aqui é pegadinha, pois ela não mexe na original, ela cria uma cópia
//Portanto, precisa ter um objeto para receber os resultados
copiaCortada = arrayConcatenada.slice(2,8)
console.log(copiaCortada)

//SPLICE
//É o oposto de slice. Ele REMOVE a parte que você selecionou
arrayConcatenada.splice(2,8)
console.log(arrayConcatenada)

//INDEX OF
//Verifica se existe um item no array
//Se existir, ele retorna A POSIÇÃO do elemento
//Se o número não existir, ele retorna -1
indexDeNumero = numeros.indexOf(10)
console.log(indexDeNumero)

//INCLUDES
//Verifica se tem um item lá dentro ou não
//Diferente do FIND, que busca pra você, o includes só dá se tem ou se não tem lá dentro
let listaFilmes = "homem aranha"
let verificaSeExiste = listaFilmes.includes("homem")
console.log(verificaSeExiste)

//Join
//Juntas todos os elementos de uma array em uma string
//Ou seja, transforma em string
let transformaString = numeros.join()
console.log(transformaString)

//Sort
//Basicamente ORGANIZA suas coisinhas
//Se for números, organiza, se for letras, organiza em ordem alfabética