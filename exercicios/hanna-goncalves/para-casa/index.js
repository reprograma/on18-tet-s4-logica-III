/*Crie uma aplicação simples que faça uma busca no nosso banco
de dados fake `let filmes` pelo nome do filme (retorno único) 
ou gênero (retorno em lista) fornecido pela cliente, enviar como
resposta para cada filme encontrado um objeto com título, gênero 
e ano de lançamento;

- Para testar sua aplicação, simule buscas por esses filmes: 
`Corpo Elétrico`, `Homem-Aranha: Sem Volta para Casa` e por 
esses gêneros: `Suspense`, `sci-fi` e `drama`;
- Utilize métodos que possibilitem encontrar o filme
 independente da pesquisa apresentar letras maiúsculas 
 ou minúsculas e das palavras estarem digitadas por inteiro;*/

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

let buscaFilme = "sus"
let buscaMin = buscaFilme.toLowerCase()
let resultadoBusca = []
let iterado = 0

resultadoBusca = filmes.forEach((valor) =>{
  if (valor.titulo.toLocaleLowerCase().includes(buscaMin) || valor.genero.includes(buscaFilme)) { 
    resultadoBusca.push(valor)
  }
 else {};return console.table(resultadoBusca)
})

//infelizmente não entendi como fazer a resposta aparecer só uma vez.
//a busca funciona, dá resultados ok, mas tenho dificuldades com exibição de resultados
//aguardo a correção do exercício para entender como melhorar
