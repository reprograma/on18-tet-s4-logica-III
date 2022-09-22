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
    genero: ["ação", "aventura", "suspense"],
    ano: "2021", 
  }] 

function buscarPorGenero(entrada) {
  let listaPorGenero = []
  filmes.forEach((filme) => {
    if(typeof(filme.genero) == "string") {
      let filmeEncontrado = filme.genero.toLowerCase().includes(entrada)
      if(filmeEncontrado) {
        listaPorGenero.push(filme)
      }
    } else {
      let filmeEncontradoNaArray = filme.genero.find((genero) => genero.toLowerCase().includes(entrada))
      filmeEncontradoNaArray != undefined ? listaPorGenero.push(filme) : null
    }
  })  
  return listaPorGenero
}

function buscarFilmes(entrada) {
  if(typeof(entrada) == "string") {
    entrada = entrada.toLowerCase()
    const filmesPorTitulo = filmes.filter((filme) => filme.titulo.toLowerCase().includes(entrada))
    const filmesPorGenero = buscarPorGenero(entrada)
    if(filmesPorTitulo.length > 0 && filmesPorGenero.length > 0) {
      console.log("--------Encontrados por título--------")
      console.table(filmesPorTitulo)
      console.log("--------Encontrados por gênero--------")
      console.table(filmesPorGenero)
    } else if(filmesPorTitulo.length > 0) {
      console.log("--------Encontrados por título--------")
      console.table(filmesPorTitulo)
      console.log("--------Encontrados por gênero--------")
      console.log('Nenhum filme encontrado por gênero')
    } else if(filmesPorGenero.length > 0) {
      console.log("--------Encontrados por título--------")
      console.log('Nenhum filme encontrado por titulo')
      console.log("--------Encontrados por gênero--------")
      console.table(filmesPorGenero)
    } else {
      console.log('Nenhum filme foi encontrado')
    }
  } else {
    console.log('Dado inválido')
  }
}


buscarFilmes('Amour')

