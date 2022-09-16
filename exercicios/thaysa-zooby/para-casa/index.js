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


let filmeSolicitado = "colonia"
let generoSolicitado = "suspense"
let filmeEncontrado = []
let filmesEncontradosNoGenero = []

// BUSCANDO FILME A PARTIR DO INPUT 'FILME SOLICITADO'
function buscarFilme(filmeSolicitado) { 
 if (filmeEncontrado = filmes.find((filme) => filme.titulo.toLowerCase() == filmeSolicitado.toLowerCase())){
  filmeEncontrado = filmeSolicitado
  console.log (`Filme encontrado: ${filmeEncontrado.titulo}`)
 } else if (filmes.toLowerCase().includes(filmeSolicitado.toLowerCase())){
  filmeEncontrado.push(filmes[titulo])
  console.table(`Filmes encontrados a partir do trecho digitado: ${filmeEncontrado.titulo}`)
 } else (`Nao foi encontrado filme correspondente no banco de dados.`)
}

function buscarFilmesDoGenero(generoSolicitado) { 
  if (filmesEncontradosNoGenero = filmesfind((filme) => filmes.filme.genero.toLowerCase() == generoSolicitado.toLowerCase())){
   filmesEncontradosNoGenero += filmes.filme.titulo
   console.log (`Filme encontrado: ${filmesEncontradosNoGenero.titulo}`)
  } else if (filmes[1].toLowerCase().includes(generoSolicitado.toLowerCase())){
   filmesEncontradosNoGenero.push(filmes[titulo])
   console.table(`Filmes encontrados a partir do trecho digitado: ${filmesEncontradosNoGenero.titulo}`)
  } else (`Nao foi encontrado filme correspondente no banco de dados.`)
 }

buscarFilme(filmeSolicitado)
buscarFilmesDoGenero(generoSolicitado)





// usar push no filme.titulo para add novos elementos a variavel []
// function buscarFilmesDoGenero(bancoDeDadosFake){ 
  // >>>> PORQUE ELE NAO BUSCA GENERO? PORQUE ALGUNS SAO ARRAYS? PORQUE MAP RETORNA BOOLEANO?
  // let filmesEncontradosAPartirDoGenero = 0

  // let buscarFilmesDoGenero = filmes.forEach( function buscandoGenero(filme){
  //   if (filme.genero == generoSolicitado.toLocaleLowerCase()) {
  //     filmesEncontradosAPartirDoGenero += filme
  //   }
  // })

//   let filmesEncontradosNoGenero = filmes.filter((filme) => filme.genero.toLocaleLowerCase() == generoSolicitado.toLocaleLowerCase())
//   console.log("Econtramos os seguintes titulos a partir do genero: ", filmesEncontradosNoGenero)

// }
  
  

