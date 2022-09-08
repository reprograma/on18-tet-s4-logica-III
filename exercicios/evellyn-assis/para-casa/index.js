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
    genero: ['aventura', "sci-fi"],
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


function buscarFilmes(filme) {
  let filmeEncontrado = filmes.filter(function(elemento) {
    return elemento.titulo.toLowerCase() == filme.toLowerCase()
    || elemento.titulo.toLowerCase().includes(filme.toLowerCase())
  })

  return filmeEncontrado
}

function buscarGenero(generoPesquisado) {
  let generoEncontrado = filmes.filter(function(elemento) {
    return elemento.genero.includes(generoPesquisado.toLowerCase())
  })

  return generoEncontrado
}

console.log(buscarFilmes("Homem"))
console.log(buscarGenero("terror"));
