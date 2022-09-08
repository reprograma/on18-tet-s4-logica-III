//Crie uma aplicação simples que faça uma busca no nosso banco de dados fake let filmes pelo nome do filme (retorno único) 
// ou gênero (retorno em lista) fornecido pela cliente, enviar como resposta para cada filme encontrado um objeto
// com título, gênero e ano de lançamento;

// Para testar sua aplicação, simule buscas por esses filmes: Corpo Elétrico,
// Homem-Aranha: Sem Volta para Casa e por esses gêneros: Suspense, sci-fi e drama;

// Utilize métodos que possibilitem encontrar o filme independente da pesquisa apresentar letras maiúsculas
// ou minúsculas e das palavras estarem digitadas por inteiro;

const hoje = new Date();

const configuracoes = {
  weekday: "long",
  year: 'numeric', 
  month: 'long', 
  day: 'numeric',
  hour: 'numeric', 
  minute: 'numeric', 
  second: 'numeric',
} 

const dataFormatada = hoje.toLocaleDateString("pt-br", configuracoes)
console.log(dataFormatada)

console.log('----------------------------------------------------------------------------------------------------')

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

  
  function buscarFilme(filme){
    for (let item of filmes){
      if (filme.toLowerCase() == (valores = Object.values(item)[0].toLowerCase())){
        console.table(item)
      }
    }
  }
  
  function buscarGenero(filme){
  for (let item of filmes){
    if (filme.toLowerCase() == (valores = Object.values(item.genero)[1].toLowerCase())){
      console.log(item.titulo, 'é do gênero', item.genero)
    }
  }
  }
    
  buscarFilme("CORPO ELÉTRICO")
  buscarFilme("Homem-Aranha: SEM Volta para Casa")
  
  console.log('------------------------------------------------------------------------------------------------------------')
  
  buscarGenero('DRAMA')
  buscarGenero('Sci-fi')
  buscarGenero('Suspense')

  //OPÇÃO 1
  // let nomeDoFilme = "MO"
  // const encontrarTitulo = filmes.filter((item) => item.titulo.includes(nomeDoFilme.toLocaleLowerCase()));
  // console.log(encontrarTitulo) 
 
  //  console.log("====================================================")
   
  //  let nomeDoGenero = "AÇÃO"
  //  const encontrarGenero = filmes.filter((item) => item.genero.includes(nomeDoGenero.toLocaleLowerCase()))
  //  console.log (encontrarGenero)

  //OPÇÃO 2

  // const readline = require('readline').createInterface({
  //   input: process.stdin,
  //   output: process.stdout
  // });
  
  // readline.question('\nDigite o filme escolhido\n', escolhe => {

  //   function buscarTitulo(value){
  //     if(value.titulo == escolhe.toLowerCase())
  //     return value;
  //   }
  //   let buscaFilme = filmes.filter(buscarTitulo);
  //   buscaFilme.forEach(procuraTitulo => { 
  //     console.table(procuraTitulo);
  //   })
  
  //   readline.close();
  // });
  
  // readline.on('close', () => {
  //   process.exit(0);
  // });


// console.log('-------------------------------------')

// function buscarGenero(value){
//   if(value.genero == 'terror')
//   return value
// }

// let buscaGenero = {}
//   buscaGenero = filmes.filter(buscarGenero);
//   buscaGenero.forEach(procuraGenero => {
// console.table(procuraGenero)
// })

//OPÇÃO 3
// let buscaFilmes = filmes.filter(function (element) {
//   return element.titulo
// })
// console.log(buscaFilmes)

// console.log('-----------------------------------------------')

// let buscaGenero = filmes.filter(function (element) {
//   return element.genero 
// })
// console.log(buscaGenero)


//OPÇÃO 4 (incompleta)

// function buscarTitulo(lista) {

//   let buscaTitulo = {}

// for(let item of lista){
//   buscaTitulo = item.titulo
//   console.table(buscaTitulo)
// }
// }


// function buscarGenero(lista) {

//   let buscaGenero = {}

//   for(let item of lista){
//     buscaGenero = item.genero
//     console.table(buscaGenero)
//   }
//   }


// buscarTitulo(filmes)

// console.log('--------------------------------------------')

// buscarGenero(filmes)