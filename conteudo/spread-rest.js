//SPREAD

function imprimir(x, y, z) {
  console.log(x, y, z)
}

let nomes = ['Brizza', 'Alice', 'Kaíza']

// imprimir(...nomes)
// console.log(nomes)

let compras = ['calça preta', 'blusa animal print', 'salto fino vermelho 12cm']
let novasCompras = ['argolas grandes de prata', ...compras, 'lace cacheada castanha']
let novissimasCompras = [...novasCompras, ...compras]
// console.log(novissimasCompras)

let cliente = {
  nome: "Thamiles",
  produtos: [...novasCompras]
}

let dataDaCompra = new Date

let notaFiscal = {
  data: dataDaCompra.toLocaleDateString(),
  ...cliente,
  ultimosProldutos: [...compras]
}

// console.log(notaFiscal)

// REST

function imprimirSoma(...numeros) {
  return console.log(numeros.reduce((acum, atual) => acum + atual)) 
}

imprimirSoma(4, 6, 8, 1)
imprimirSoma(4, 6, 8, 1, 9 , 3, 1)
