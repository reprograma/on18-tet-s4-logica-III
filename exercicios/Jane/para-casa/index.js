let listaDeFilmes = [
  {
  nome: "Mad Max ",
  genero: "Ação",
  ano: "2015",
},
{
  nome:"Instinto Assassino",
  genero:"Ação",
  ano:"2021",

},
{
  nome : "Um match surpresa ",
  genero : "comédia",
  ano: "2021",
},
{
  nome :"Fuja",
  genero :"Suspense",
  ano : "2021",
},
{
  nome : "Mais que amigos, vizinhos",
genero : "comédia",
ano: "2021"
},
{
  nome : "Um Contratempo",
  genero : "Suspense",
  ano : "2016"
},
{
  nome : "Órfão: Primeira Morte",
  genero : "terror",
  ano : "2022",
},
{
  nome : "Os salafrários",
  genero : "comédia",
  ano : "2021"
},
{
  nome : "Nope",
  genero:  "terror",
  ano : "2022"
},
{
  nome: "Doutor Estranho no Multiverso da Loucura",
  genero : "Marvel",
  ano : "2022",
},
{
  nome : "Amnésia",
  genero : "suspense",
  ano : "2001"
},
{
  nome : "Pânico",
  genero : "terror ",
  ano : "2022"
},
{
  nome : "Homem-Aranha no Aranhaverso 2",
  genero : "Marvel",
  ano : "2021"
},
{
  nome : "O Telefone Preto",
  genero : "terror",
  ano : "2022",
}]

function filtrarFilmesNome(nome) {
  for (let filme of filmes) {
      let buscaNome = filmes.find((filme) => filme.Nome.toUpperCase().includes(nome.toUpperCase())); {
      }
      console.table(buscaNome.nome)
      break;
  }

}

function filtrarFilmesGenero(genero) {
  for (let filme of filmes) {
      let buscaGenero = filmes.filter((filme) => filme.genero.includes(genero.toUpperCase()) || filme.genero[0].toUpperCase().includes(genero.toUpperCase()) || filme.genero[1].toUpperCase().includes(genero.toUpperCase())); {
      }
      console.table(buscaGenero)
      break;
  }
}


let retornoDeNome = filtrarFilmesNome( "Preto" );
let retornoDeGenero = filtrarFilmesGenero(" terror");

console.log(retornoDeNome)

console.log(retornoDeGenero)
