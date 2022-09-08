// METÓDOS DE STRING

let stringTeste = "Todas em Tech on18 - Back-end"

console.log(stringTeste.toLowerCase)
console.log(stringTeste.toUpperCase)
console.log(stringTeste.concat('- {reprograma}'))
console.log(stringTeste.toLowerCase().includes("Tec".toLowerCase()))

//MATH

console.log(Math.random())
console.log(Math.floor(2.56734))
console.log(Math.floor(Math.random() * 10))

// MÉTODOS DE OBJETOS

const manga = {
    nome: "Kuroko no basket",
    ano: 2008,
    temporadas: 3,
    filmes: 4,
    autor: "Tadatoshi Fujimaki",
    publicacao: "Weekly Shonen Jump",
    editora: "Shueisha",
    anime: "Production I.G"
}

console.log(Object.keys(manga))
console.log(Object.values(manga))
console.log(Object.entries(manga))

// congela o objeto nã podendo sofrer alterações - imultado
Object.freeze()

// parseFloat - Recebe uma string e transforma em um número decimal

console.log(parseFloat("lilit")) // retorno NaN
console.log(parseFloat("5423fv")) // retorno 5423
console.log(parseFloat(true)) // retorno NaN
console.log(parseFloat("356.354")) // retorno 356.354
console.log(parseFloat("8.7_bs")) // retorno 8.7
console.log(parseFloat("_4e")) // retorno NaN

// parseInt - Recebe uma string e transforma em um número inteiro

console.log(parseInt("lilit")) // retorno NaN
console.log(parseInt("5423fv")) // retorno 5423
console.log(parseInt(true)) // retorno NaN
console.log(parseInt("356.354")) // retorno 356
console.log(parseInt("8.7_bs")) // retorno 8
console.log(parseInt("_4e")) // retorno NaN

// Spread syntax



// exercicio procurar includes
// palavras inteiras ou não e maiusculas ou// palavras inteiras ou não e maiusculas ou minusculas