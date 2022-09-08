const { exit } = require("process");

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
    genero: ["Aventura", "sci-fi"],
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
];

class Programa {
  constructor(listaFilmes) {
    this.generos = this.listarGeneros();
    this.readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  rodar() {
    console.log(
      "Pesquisa por filme ou gênero (digite exit ou ctrl+c para sair)"
    );
    this.perguntar();
  }

  listarGeneros() {
    let generos = new Set();
    for (let filme of filmes) {
      typeof filme.genero === "string"
        ? generos.add(filme.genero.toLowerCase())
        : filme.genero.forEach((genero) => generos.add(genero.toLowerCase()));
    }
    return generos;
  }

  procurar(termo) {
    termo = termo.toLowerCase();
    if (this.generos.has(termo)) {
      let retorno = [];
      for (let filme of filmes) {
        typeof filme.genero === "string"
          ? filme.genero.toLowerCase() === termo && retorno.push(filme)
          : filme.genero.forEach(
              (genero) => genero.toLowerCase() === termo && retorno.push(filme)
            );
      }
      return retorno;
    } else {
      for (let filme of filmes) {
        if (filme.titulo.toLowerCase().includes(termo)) return filme;
      }
    }
  }

  perguntar() {
    this.readline.question("Pequisar: ", (termo) => {
      termo === "exit" && exit();
      console.log(this.procurar(termo));
      this.perguntar();
    });
  }
}

const programa = new Programa(filmes);
programa.rodar();
