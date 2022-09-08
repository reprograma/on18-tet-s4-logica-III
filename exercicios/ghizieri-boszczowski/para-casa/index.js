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

  function buscaFilme(nome, genero) {
    if( nome != null && genero != null ) {
      const filme = filmes.find( filme => filme.titulo === nome);
      if( !filme ) return null;
      if( Array.isArray(filme.genero) ){
        return filme.genero.includes(genero) ? filme : null;
      } else {
        return filme.genero == genero ? filme : null;
      }
    }

    if( nome != null ) {
      return filmes.find( filme => filme.titulo === nome );
    }

    if( genero != null ) {
      return filmes.filter( filme => {
        if( Array.isArray(filme.genero) ){
          return filme.genero.includes(genero);
        } else {
          return filme.genero == genero;
        }
      } );
    }

    return null;
  }

  const res1 = buscaFilme("Homem-Aranha: Sem Volta para Casa", undefined);
  const res2 = buscaFilme("Colonia", "ação");
  const res3 = buscaFilme("Colonia", "suspense");
  const res4 = buscaFilme(undefined, "sci-fi");
  console.log(res1);
  console.log(res2);
  console.log(res3);
  console.log(res4);
