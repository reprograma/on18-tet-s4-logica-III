let filmes = [
  {
    titulo: "us",
    genero: "terror",
    ano: "2019", 
  },
  {
    titulo: "transformers: O Lado Oculto da Lua",
    genero: ["ação", "sci-fi"],
    ano: "2011", 
  },
  {
    titulo: "moonfall - ameaça lunar",
    genero: ['Aventura', "sci-fi"],
    ano: "2022", 
  },
  {
    titulo: "casa gucci",
    genero: "drama",
    ano: "2021", 
  },
  {
    titulo: "encanto",
    genero: ["animação", "musical"],
    ano: "2021", 
  },
  {
    titulo: "Demon Slayer - Mugen Train",
    genero: ["ação", "fantasia"],
    ano: "2019", 
  },
  {
    titulo: "O Último Suspiro",
    genero: ["drama", "sci-fi"],
    ano: "2019", 
  },
  {
    titulo: "Suspiria",
    genero: "terror",
    ano: "1977", 
  },
  {
    titulo: "Corpo Elétrico",
    genero: ["drama", "ficção"],
    ano: "2017", 
  },
  {
    titulo: "Amour",
    genero: ["drama", "romance"],
    ano: "2012", 
  },
  {
    titulo: "Ninho de Musaranho",
    genero: "terror",
    ano: "2014", 
  },
  {
    titulo: "Colonia",
    genero: "suspense",
    ano: "2015", 
  },
  {
    titulo: "Homem-Aranha: Sem Volta para Casa",
    genero: ["ação", "aventura"],
    ano: "2021", 
  }]

  let pesquisaPorTitulo = ['Corpo Elétrico']
  let pesquisaPorGenero = ['terror']


// Pesquisa por titulo (retorno único)

let filmeDesejado = 0
let generoDesejado = 0

function pesquisarPorTitulo(filmeDesejado) {
  const buscaPorTitulo = filmes.filter((filme) => {filme.titulo == filmeDesejado
  return filme.titulo.includes(filmeDesejado)
})
console.log(buscaPorTitulo)
}
pesquisarPorTitulo('Homem')
console.log("----------------------------------")

function pesquisarPorGenero(generoDesejado) {
  const buscaPorGenero = filmes.filter((filme) => {filme.genero == generoDesejado
  return filme.genero.includes(generoDesejado)
})
console.log(buscaPorGenero)
}
pesquisarPorGenero('susp')