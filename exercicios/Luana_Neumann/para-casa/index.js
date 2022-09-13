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


  function buscaPeloGenero (escolhaDoUsuario) {
      let listaPorGenero = []
      filmes.forEach((filme) => {
        if(typeof(filme.genero) == "string") {
          let filmeEncontrado = filme.genero.toLowerCase().includes(escolhaDoUsuario)
          //filmeEncontrado ? listaPorGenero.push(filmeEncontrado) : null
          if(filmeEncontrado) {
            listaPorGenero.push(filme)
          }
        } else {
          let filmeEncontradoNaArray = filme.genero.find((genero) => genero.toLowerCase().includes(escolhaDoUsuario))
          filmeEncontradoNaArray != undefined ? listaPorGenero.push(filme) : null
        }
      })  
    return listaPorGenero
  } 

  function buscarFilmes (escolhaDoUsuario) {
    if(typeof(escolhaDoUsuario) == "string") {
      escolhaDoUsuario = escolhaDoUsuario.toLowerCase()
      let listaPorGenero = buscaPeloGenero (escolhaDoUsuario)
      let buscaPorTitulo = filmes.filter((filme) => filme.titulo.toLocaleLowerCase().includes(escolhaDoUsuario))
      if(buscaPorTitulo.length > 0 && buscaPeloGenero.length > 0) {
        console.table(buscaPorTitulo)
        console.table(buscaPeloGenero)        
      } else if (buscaPorTitulo.length > 0) {
        console.table (buscaPorTitulo)
      } else if (buscaPeloGenero.length > 0 ) {
        console.table(listaPorGenero)
      } else {
      console.log('Nenhum filme foi encontrado')
      } 
    } else {
    console.log ('Dado inválido')
    }
  }
  
  
  buscarFilmes('suspense')


  //*************************Raciocínio por trás da lógica aplicada********************************************/

  //***************************solicitação do Exercício************************************/

  // - Crie uma aplicação simples que faça uma busca no nosso banco de dados fake 
  //`let filmes` pelo nome do filme (retorno único) ou gênero (retorno em lista) 
  //fornecido pela cliente, enviar como resposta para cada filme encontrado um objeto com título, gênero e ano de lançamento;
  // Para testar sua aplicação, simule buscas por esses filmes: `Corpo Elétrico`, `Homem-Aranha: Sem Volta para Casa` e por esses
  // gêneros: `Suspense`, `sci-fi` e `drama`;
  //Utilize métodos que possibilitem encontrar o filme independente da pesquisa apresentar letras
  // maiúsculas ou minúsculas e das palavras estarem digitadas por inteiro;

  //*********************************COMO EU RESOLVO********************************* */
  //  1. Preciso fazer uma busca pelo nome do filme ==> Criar uma função pra isso ==> function buscaPeloNome
  //    Como faço pra buscar um filme?
  //    Eles estão dentro de uma Array, então tenho que usar um método pra percorrer esse array.
  //    Posso usar o find? Nesse caso não porque find retorna apenas o primeiro valor encontrado dentro do parâmetro solicitado.
  //    Uso o filter que vai me mostrar todos os resultados que são válidos pra minha busca.

  //    Criando a função:  na linha 86 ler: "Javascript, executa a função de buscar filmes quando o usuario incluir sua escolha.
  //    Linha 87: Javascript, passa um filtro na minha lista de filmes e verifica em cada filme se a escolha do usuário está inclusa 
  //    em cada opção. (Isso inclui perquisa com sequencia de letras)"
  //    Essa busca estará armazenada na variável buscarPorTitulo.

  //    Criando uma condição para apresentar os resultados: na linha 91 ler: "Se a busca por título OU por gênero retornar um resultado com 'mais de zero itens',
  //    me mostra os filmes que foram encontrados"

 
  //  2. Utilizar métodos para retornar resultados independente das letras maiúsculas ou minúsculas (toLowerCase /toUpperCase)
  //    Nesse caso, adiciona-se uma condicional como na linha 88 e lê-se: " Javascript, se
  //    a escolha do usuário for uma string, deixa todas as letras minúsculas." Não esquecer de add tolowercase na aplicação do método tbm.

   // 3. Agora preciso fazer uma busca pelo gênero do filme ==> Criar uma segunda função. ==> function buscaPeloGenero
       // A busca por gênero é mais complicada porque um mesmo filme pode estar categorizado em vários gêneros, o que criaria um array de gêneros. Em um array o método includes 
       //não retorna fragmentos de palavras. 
       //Nesse caso preciso criar uma função que identifica que o gênero do filme em questão é uma string ou uma array. Se for string, ela vai funcionar exatamente como 
       //a busca por título e será inclusa em uma array de filmes por gênero.
       //Se o gênero for encontrado na Array, utiliza-se o find pra buscar a informação nessa lista.
    //Não esquecer de inserir a função da busca por gênero dentro da função principal (busca de filmes)