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
    },
    {
      titulo: "Boku no Hero Academia the Movie 2: Heroes:Rising",
      genero: ["ação", "aventura", "super poder", "comedia", "escola", "Shounen"],
      ano: "2021", 
    },
    {
      titulo: "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka Movie: Orion no Ya",
      genero: ["ação", "aventura", "comedia", "fantasia", "romance"],
      ano: "2019", 
    },
    {
      titulo: "Mobile Suit Gundam",
      genero: ["mecha","ação"],
      ano: "1979",
    }] 

let inputBusca, inputType, resultadoBusca;

//0 == titulo/ 1 == genero/ 2 == ano//
let searchType=2;
//mude para true se for executar pelo terminal//
let usarTerminal=false;

inputBusca = "19";
inputType=["titulo","genero","ano"];

function getMovieByName(){
    let a=filmes;
    let c, d;
    inputBusca=inputBusca.toLowerCase();
    for(b of a){
        c=b.titulo.toLowerCase();
        d=b;

        if(c.includes(inputBusca)){
          console.log("%c [Filme]", 'background: #400080; color: #fcd703');
          console.log(d.titulo);
        }
    }

}
function getMovieByGenre(){
  let a=filmes;
  let c;
  inputBusca=inputBusca.toLowerCase();
  for(b of a){
    //console.log(b)
      c=b;
      if(c.genero.includes(inputBusca)){
        console.log("%c [Filme]", 'background: #400080; color: #fcd703');
        console.log(c.titulo);
      }
  }
}

function getMovieByYear(){
  let a=filmes;
  for(b of a){
      if(b.ano.includes(inputBusca)){
      console.log("%c [Filme]", 'background: #400080; color: #fcd703');
      console.log(b.titulo);
    }
  }

}

function callFunctionsByType(){
  if(searchType==0){
    getMovieByName();
  }
  if(searchType==1){
    getMovieByGenre();
  }
  if(searchType==2){
    getMovieByYear();
  }
  else{
    getMovieByName();
  }
}

if(usarTerminal==false){
  callFunctionsByType();
}
if(usarTerminal){
  const prompt = require('prompt-sync')();
  console.log("%c [Digite 0 para porcurar por Titulo]", 'background: #400080; color: #9dfdf3');
  console.log("%c [Digite 1 para porcurar por Genero]", 'background: #01537e; color: #f1e60e');
  console.log("%c [Digite 2 para porcurar por Ano]", 'background: #400080; color: #d79bff');
  const uInputType = prompt('Deseja procurar por titulo, genero ou ano?', 'background: #6b5f01; color: #d79bff');
  console.log(`Você selecionou ${uInputType}`);
  searchType=uInputType;
  console.log("%c [Digite o que deseja buscar]", 'background: #400080; color: #9dfdf3');
  const uInputSearch = prompt('( ⓛ ω ⓛ *)', 'background: #6b5f01; color: #d79bff');
  console.log(`Você pesquisou por ${uInputSearch}`);
  inputBusca=uInputSearch;

  callFunctionsByType();

}


//console.log("%c Filmes"+filmes[3].titulo, 'background: #400080; color: #f4a30b');
//console.table(filmes);
//console.log("%c Filme: "+filmes[15].titulo, 'background: #400080; color: #f4a30b');
