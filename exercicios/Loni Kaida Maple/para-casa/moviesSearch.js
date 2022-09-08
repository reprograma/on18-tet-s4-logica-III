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
let temp, tempResult=[];

//0 == titulo/ 1 == genero/ 2 == ano//
let searchType=0;
let usarTerminal=false;

inputBusca = "gu";
inputType=["titulo","genero","ano"];

function getMovieByName(){
    //temp=filmes.titulo;
    let a=filmes;
    let filtered
    let c;
    
    for(b of a){
      //if(b.titulo.includes("gun"))
        //console.log(b.titulo);
        c=b.titulo.toLowerCase();
        if(c.includes(inputBusca))
        console.log(c);
    }

}
function getMovieByGenre(){
  //temp=filmes.titulo;
  let a=filmes;
  let filtered
  let c;
  
  for(b of a){
    //if(b.titulo.includes("gun"))
      //console.log(b.titulo);
      c=b.genero.toLowerCase();
      if(c.includes(inputBusca))
      console.log(c);
  }

}

function getMovieByYear(){
  //temp=filmes.titulo;
  let a=filmes;
  let filtered
  let c;
  
  for(b of a){
    //if(b.titulo.includes("gun"))
      //console.log(b.titulo);
      //c=b.ano.toLowerCase();
      if(b.includes(inputBusca))
      console.log(c);
  }

}

if(usarTerminal==false){
  switch (searchType) {
    case 0:
      getMovieByName();
      break;

    case 1:
      getMovieByGenre();
      break;
  
    case 2:
      getMovieByYear();
      break;
  
    default:
      getMovieByName();
      break;
  }
}
//getMovieByName();

//const prompt = require('prompt-sync')();

//const name = prompt('What is your name?');
//console.log(`Hey there ${name}`);


//console.log("%c Filmes"+filmes[3].titulo, 'background: #400080; color: #f4a30b');
//console.table(filmes);
//console.log("%c Filme: "+filmes[15].titulo, 'background: #400080; color: #f4a30b');
