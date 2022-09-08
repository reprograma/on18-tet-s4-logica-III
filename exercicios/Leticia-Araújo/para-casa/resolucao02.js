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
  
  
  function CatalogoDeFilmes(filme) {
    let listaTerror = filmes.filter((filme) => filme.genero == "terror");
    console.table(listaTerror);
  }
  let listaAcao = filmes.filter((filme) => filme.genero[0] == "ação"); {
    console.table(listaAcao);
  }
  let listaScifi = filmes.filter((filme) => filme.genero[1] == "sci-fi"); {
    console.table(listaScifi);
  }
  let listaAventura = filmes.filter((filme) => filme.genero[0] == "Aventura" || filme.genero[1] == "aventura"); {
    console.table(listaAventura);
  }
  let listaDrama = filmes.filter((filme) => filme.genero[0] == "drama"); {
    console.table(listaDrama);
  }
  let listaAnimacao = filmes.filter((filme) => filme.genero[0] == "animação"); {
    console.table(listaAnimacao);
  }
  let listaMusical = filmes.filter((filme) => filme.genero[1] == "musical"); {
    console.table(listaMusical);
  }
  let listaFantasia = filmes.filter((filme) => filme.genero[1] == "fantasia"); {
    console.table(listaFantasia);
  }
  let listaRomance = filmes.filter((filme) => filme.genero[1] == "romance"); {
    console.table(listaRomance);
  }
  let listaSuspense = filmes.filter((filme) => filme.genero == "suspense"); {
    console.table(listaSuspense)
  }
  let listaFiccao = filmes.filter((filme) => filme.genero[1] == "ficção"); {
    console.table(listaFiccao);
  }
  
  CatalogoDeFilmes();