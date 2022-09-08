
let filmes =
 [


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

  function filtroDeFilmesTerror(filme) {
    let listaTerror = filmes.filter((filme) => filme.genero == "terror"); {
      console.log("Segue a lista de filmes do gênero Terror:")
      console.table(listaTerror);
    }
  }
  
  function filtroDeFilmesAcao(filme) {
    let listaAcao = filmes.filter((filme) => filme.genero[0] == "ação"); {
      console.log("Segue a lista de filmes do gênero Ação:")
      console.table(listaAcao);
    }
  }
  
  function filtroDeFilmesScifi(filme) {
    let listaScifi = filmes.filter((filme) => filme.genero[1] == "sci-fi"); {
      console.log("Segue a lista de filmes do gênero Sci-Fi:")
      console.table(listaScifi);
    }
  }
  
  function filtroDeFilmesAventura(filme) {
    let listaAventura = filmes.filter((filme) => filme.genero[0] == "Aventura" || filme.genero[1] == "aventura"); {
      console.log("Segue a lista de filmes do gênero Aventura:")
      console.table(listaAventura);
    }
  }
  
  function filtroDeFilmesDrama(filme) {
    let listaDrama = filmes.filter((filme) => filme.genero[0] == "drama"); {
      console.log("Segue a lista de filmes do gênero Drama:")
      console.table(listaDrama);
    }
  }
  
  function filtroDeFilmesAnimacao(filme) {
    let listaAnimacao = filmes.filter((filme) => filme.genero[0] == "animação"); {
      console.log("Segue a lista de filmes do gênero Animação:")
      console.table(listaAnimacao);
    }
  }
  
  function filtroDeFilmesMusical(filme) {
    let listaMusical = filmes.filter((filme) => filme.genero[1] == "musical"); {
      console.log("Segue a lista de filmes do gênero Musical:")
      console.table(listaMusical);
    }
  }
  
  function filtroDeFilmesFantasia(filme) {
    let listaFantasia = filmes.filter((filme) => filme.genero[1] == "fantasia"); {
      console.log("Segue a lista de filmes do gênero Fantasia:")
      console.table(listaFantasia);
    }
  }
  
  function filtroDeFilmesFiccao(filme) {
    let listaFiccao = filmes.filter((filme) => filme.genero[1] == "ficção"); {
      console.log("Segue a lista de filmes do gênero Ficção:")
      console.table(listaFiccao);
    }
  }
  
  function filtroDeFilmesRomance(filme) {
    let listaRomance = filmes.filter((filme) => filme.genero[1] == "romance"); {
      console.log("Segue a lista de filmes do gênero Romance:")
      console.table(listaRomance);
    }
  }
  
  function filtroDeFilmesSuspense(filme) {
    let listaSuspense = filmes.filter((filme) => filme.genero == "suspense"); {
      console.log("Segue a lista de filmes do gênero Suspense:")
      console.table(listaSuspense);
    }
  }
  
  filtroDeFilmesAventura();
  filtroDeFilmesTerror();
  filtroDeFilmesAcao();
  filtroDeFilmesAnimacao();
  filtroDeFilmesFiccao();
  filtroDeFilmesSuspense();
  filtroDeFilmesScifi();
  filtroDeFilmesRomance();
  filtroDeFilmesMusical();
  filtroDeFilmesDrama();
  filtroDeFilmesFantasia();