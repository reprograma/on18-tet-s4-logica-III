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


  function nomeFilme(nome){
    console.log('Bem vindo aos filmes Flix')
    let allFilmesTitulo=nome.toUpperCase()


    let filtrando=filmes.filter(filmeNome=>{


     

   return filmeNome.titulo.toUpperCase()===allFilmesTitulo


     
    })

    console.log(filtrando)

 
    // filmes.forEach(valor=>{
    //   let incluindo=valor.titulo.toUpperCase;
      
    // if(valor.titulo.includes(allFilmesTitulo)) {
    //   console.log('existe')
    // }
    // })


  }




  function generoFilme(genero){

    filmes.forEach(filmes=>{
      for(let Generos of filmes.genero){
        
       if( Generos.toUpperCase()===genero.toUpperCase()){
         console.log(filmes.genero ) 
       }
    
        
      }
      

  })}

  generoFilme('ação')