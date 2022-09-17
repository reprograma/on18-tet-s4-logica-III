//Atualizando o repositório.

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

function filtrarFilmesTitulo(titulo) {
    for (let filme of filmes) {
        let buscaTitulo = filmes.find((filme) => filme.titulo.toUpperCase().includes(titulo.toUpperCase())); {
        }
        console.table(buscaTitulo.titulo)
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


filtrarFilmesGenero("aventura");
filtrarFilmesTitulo("homem");