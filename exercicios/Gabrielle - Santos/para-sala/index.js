let numeros =[ 1, 6, 9, 5, 6, 0, 5, 9 , 8, 6, 5 ];
let lojas= ["americanas", "amazon", "magalu", "amazon", "BuscaPé", "12", "123milhas", ]

let gabi = [
    {cidade: "Nilópolis",
    Cantores:"Justin, Lagum, Riahana, Demi, Falcão" },
    {Aniversário: "18/04/2022",
    genero: ["romance","literatura"],
    },
    {familia:"Marta Eliza, Luiz Carlos, Alessandro Mendes,Thais Mendonça",
    Sobrenome: "Santos do Nascimento"},
    {Interrese: ["Comer","beber","sair com os amigos"],
    cursos:["JavaScript", "Reprograma","Descodificadas","ProgMaria"]}
 ]
// let eu = gabi[5].split("")
// const aluna = "Gabrielle dos Santos do Nascimento".split("Gabr")
// console.log(aluna)
// console.log(gabi[2])
// console.table(eu)

// let encontrarElemento = numeros.find((coisa) => coisa == 6)
// console.log(encontrarElemento)
// let euEu = lojas.map((coisa) => coisa == "amazon" && + "amricanas")
// console.log(euEu)
// let gabizao = gabi.concat((item) => item == "cidade" && + "lugar" )
// console.log(gabizao)
// let reduzValor = lojas.reduce((juntar, total) =>juntar  + total)
// console.table(reduzValor)

// Metodos de Array

let shopping2 = gabi.includes("genero")
console.log(shopping2)
let shopping = numeros.splice(2,9,100,200,800)
console.log(shopping)

// let adiciona = gabi.slice("cidade","genero")
// console.log(adiciona)
// console.log(gabi)