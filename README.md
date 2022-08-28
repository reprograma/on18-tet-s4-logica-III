<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# ON18-TodasEmTech-S4-Lógica de Programação-III

Esta é a 4ª semana da turma online Todas em Tech on18 - Back-end, nesta aula do dia 03/09/2022 teremos os seguintes conteúdos:

  - [1. Array](#1-array)
    - [1.1 Criando uma array](#11-criando-uma-array)
    - [1.2. Acessando o valor de um elemento da array](#12-acessando-o-valor-de-um-elemento-da-array)
    - [1.3. Desestruturando uma array](#13-desestruturando-uma-array)
  - [2. Métodos de Array](#2-métodos-de-array)
    - [2.1. Métodos de iteração](#21-métodos-de-iteração)
    - [2.2. Outros métodos de Array](#22-outros-métodos-de-array)
  - [3. Métodos comumente usados](#3-métodos-comumente-usados)
  - [4. Spread/rest](#4-spreadrest)
    - [4.1. Spread syntax](#41-spread-syntax)
    - [4.2. Rest Parameters](#42-rest-parameters)

## Apresentação

### Quem é a professora Lilit?

<img src='./assets/lilit.jpeg' width=500 alt='Imagem de Webcam Lilit com cabelos cacheados longos presos soltos, usando fone de headfone preto e com uma aureola de luz acima da cabeça, usa colar dourado com pingente de ursinho e uma blusa tomara que caia animal print, está de batom vermelho e o fundo está com efeito blur'>

[Lilit Bandeira](https://www.instagram.com/lilitravesti), é uma travesti paraibana residente no São Paulo, trabalho como Software Engineer no Nubank, ex-aluna e professora {reprograma} e professora também no minas programam, estudante de Analise e Desenvolvimento de Sistemas na Mackenzie;

#### Contatos

- [E-mail](devlilitbandeira@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/lilitbandeira)
- [GitHub](https://github.com/lilitbandeira)

### Quem são as monitoras?

<img src='./assets/riko.png' width=500 alt='personagem riko do anime kuroko no basket, ela tem cabelos castanhos lisos e curtinhos com grampos na franja, olhos castanhos, veste uma roupa colegial estilo japonês, ao fundo as paredes de um ginásio esportivo'>

### Quem são as alunas?

<img src='./assets/cdz.jpeg' width=500 alt='3 personagens do anime saint seiya, todas vestem armaduras de amazonas, esquerda para direita temos a primeira com cabelos castanhos e elmo de águia e tem roupas vermelhas sob a armadura, segunda tem cabelos verdes e usa elmo de cobra e roupas verdes sob a armadura, a terceira tem cabelos são loiros e longos e segura um chicote, sob a armadura uma roupa rosa, o fundo da imagem é marrom '>

## Acordos

- Enviar dúvidas no chat com as monitoras;
- Levantar a mão sempre que desejar falar, o que pode ser feito a qualquer momento;
- Manter microfones desligados sempre que alguém estiver falando;
- Manter as câmeras ligadas o máximo de tempo possível;
- Antes de começar, vamos organizar nosso setup.
  * Fork esse [repositório](https://github.com/reprograma/on18-tet-s2-logica-I) 
  * Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
  * Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)
  * Altere o nome da pasta "nome-aluna" para o seu nome-sobrenome, este é o único local onde você deve realizar alterações 

# Plano de Aula

## 1. Array

- Arrays são geralmente descritas como "lista de objetos"; elas são basicamente objetos que contem múltiplos valores armazenados em uma lista. Um objeto array pode ser armazenado em variáveis e ser tratado de forma muito similar a qualquer outro tipo de valor, a diferença está em podermos acessar cada valor dentro da lista individualmente, e fazer super úteis e eficientes coisas com a lista, como laço através da lista e fazer a mesma coisa para cada valor. _(MDN)_

### 1.1 Criando uma array

```js
const tipos = ["String", "Números", "Booleanos"];
const cidades = new Array("Recife", "São Paulo", "Manaus");
const cursos = "frontend backend".split(" ");
const tecnologias = Array.of("HTML", "CSS", JS);
```

### 1.2. Acessando o valor de um elemento da array

```js
console.log(alunas[1]);
```

### 1.3. Desestruturando uma array

```js
const [primeiro, segundo] = tipos;
console.log(primeiro);
console.log(segundo);
```

---
## 2. Métodos de Array

### array para exemplos:

```js
const numeros = [3, 2, 4, 3, 5, 1, 3, 4, 2];
```

### 2.1. Métodos de iteração

- `find()`

  ```js
  const encontrarPrimeiro = numeros.find((element) => element == 2);
  console.log(encontrarPrimeiro); // retorno 2
  ```

- `filter()`

  ```js
  const filtrarPor = numeros.filter((element) => element == 3);
  console.log(filtrarPor); // retorno [3, 3, 3]
  ```

- `map()`

  ```js
  const executarTodos = numeros.map((element) => (element = 4));
  console.log(executarTodos); // retorn  [4, 4, 4, 4, 4, 4, 4, 4, 4]
  ```

- `forEach()`

  ```js
  const verTodos = numeros.forEach((element) => console.log(element));
  console.log(verTodos); // retorno  3\n2\n4\n3\n5\n1\n3\n4\n2
  ```

- `reduce()` -> O método reduce() uma callback que será executada para cada elemento da array, resultando num único valor de retorno, esta callback pode receber alguns parâmetros, sendo os mais comuns o `acumulador` e o `valorAtual`

  ```js
  const ReduzirPara = numeros.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual
  );
  console.log(ReduzirPara); // retorno 27
  ```

### 2.2. Outros métodos de Array

- `concat()` -> retorna um novo array contendo todos os arrays ou valores passados como parâmetro. _(MDN)_

  ```js
  const arrayConcatenada = numeros.concat(1, [2, 3], "café");
  console.log(arrayConcatenada); // retorno [3, 2, 4, 3, 5, 1, 3, 4, 2, 1, 4, 5, 2, 'café']
  ```

- `push():` -> adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array. _(MDN)_

  ```js
  const adicionaNoFinal = numeros.push(2, 3);
  console.log(adicionaNoFinal); // retorno 11
  ```

- `pop():` -> remove o último elemento de um array e retorna aquele elemento. _(MDN)_

  ```js
  const removeUltimo = numeros.pop();
  console.log(removeUltimo); // retorno 2
  ```

- `shift()` -> remove o primeiro elemento de um array e retorna esse elemento. Este método muda o tamanho do array. _(MDN)_

  ```js
  const removePrimeiro = numeros.shift();
  console.log(removeUltimo); // retorno 3
  ```

- `unshift()` -> adiciona um ou mais elementos no início de um array e retorna o número de elementos (propriedade length) atualizado. _(MDN)_

  ```js
  const adicionaNoInicio = numeros.unshift(4, 1);
  console.log(adicionaNoFinal); // retorno 11
  ```

- `slice()` -> retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original. O Array original não é modificado. _(MDN)_

  ```js
  const copiaParte = numeros.slice(2, 5);
  console.log(copiaParte); //retorno [4, 3, 5]
  ```

- `splice()` -> altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos. _(MDN)_

  ```js
  const removeEAdiciona = numeros.splice(2, 2, "novo");
  console.log(removeEAdiciona); //retorno [4, 3] -> removidos
  console.log(numeros); // retorno [3, 2, 'novo', 5, 1, 3, 4, 2]
  ```

- `indexOf()` -> retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente. _(MDN)_

  ```js
  const localizaElemento = numeros.indexOf(2);
  console.log(localizaElemento); // retorno 1
  ```

- `includes()` -> determina se um array contém um determinado elemento, retornando true ou false apropriadamente. _(MDN)_

  ```js
  const verificaSeExiste = numeros.includes(4);
  console.log(localizaElemento); // true
  ```

- `join()` -> junta todos os elementos de um array em uma string e retorna esta string. _(MDN)_

  ```js
  const transformaString = numeros.join("-");
  console.log(transformaString); // retorno "3, 2, 4, 3, 5, 1, 3, 4, 2"
  ```

- `sort()` -> ordena os elementos da array e retorna a array reordenada de acordo com o código unicode (números > maiúsculas > minúsculas)

```js
console.log(["amarela", 3, 6, 11, "Humana", "2", 200, "Agosto finalmente acabou"].sort()) 
// retorno [ 11, '2', 200, 3, 6, 'Agosto finalmente acabou', 'Humana', 'amarela' ]
```

---
## 3. Métodos comumente usados

### string para exemplos:

```js
let stringTeste = "Todas em Tech on18 - Back-end"
```

- `str.toLowerCase()` -> transforma todo o conteúdo de uma string em letras minúsculas;

```js
console.log(stringTeste.toLowerCase()) // retorno "todas em tech on18 - back-end"
```

- `str.toUpperCase()` -> transforma todo o conteúdo de uma string em letras maiúsculas;

```js
console.log(stringTeste.toUpperCase()) // retorno "TODAS EM TECH ON18 - BACK-END"
```

- `str.concat()` -> Junta quantas strings você desejar;

```js
console.log(stringTeste.concat(" - {reprograma}")) // retorno "Todas em Tech on18 - Back-end - {reprograma}"
```

- `Math.random()` -> Retorna um número pseudo-aleatório no intervalo `[0, 1[`;
  
```js
console.log(Math.random()) // retorna um decimal entre 0 e 1, ex.: 0.8132122857534319
```

- `Math.floor()` -> Retorna o menor número inteiro para um número real "x";
  
```js
console.log(Math.floor(2.54)) // retorno 2
console.log(Math.floor(Math.random() * 100)) // retorna uma dezena inteira, ex.: 36
```

### objeto para exemplos:

```js
const manga = {
  nome: "kuroko no basket",
  ano: 2008,
  temporadas: 3,
  filmes: 4,
  autor: "Tadatoshi Fujimaki",
  publicacao: "Weekly Shonen Jump",
  editora: "Shueisha",
  anime: "Production I.G"
}
```

- `Object.keys()` -> Retorna uma array contendo os nomes de todas as propriedades de string enumeráveis ​​do objeto fornecido;
  
```js
console.log(Object.keys(manga)) 
// retorno [ 'nome', 'ano', 'temporadas', 'filmes', 'autor', 'publicacao' , 'editora', 'anime'] 

```

- `Object.values()` -> Retorna uma array contendo os valores que correspondem a todas as propriedades de string enumeráveis ​​do próprio objeto;
  
```js
console.log(Object.values(manga))
// retorno [ 'kuroko no basket', 2008, 3, 4, 'Tadatoshi Fujimaki', 'Weekly Shonen Jump', 'Shueisha', 'Production I.G']
```

- `Object.entries()` -> Retorna uma array contendo todos os pares [key, value] das próprias propriedades de string enumeráveis ​​de um determinado objeto;
  
```js
console.log(Object.entries(manga))
// retorno [
//   [ 'nome', 'kuroko no basket' ],
//   [ 'ano', 2008 ],
//   [ 'temporadas', 3 ],
//   [ 'filmes', 4 ],
//   [ 'autor', 'Tadatoshi Fujimaki' ],
//   [ 'publicacao', 'Weekly Shonen Jump' ],
//   [ 'editora', 'Shueisha' ],
//   [ 'anime', 'Production I.G' ]
// ]
```

- `Object.freeze()` -> Congela um objeto: outro código não pode excluir ou alterar nenhuma propriedade;
  
```js
manga.filmes = 3
console.log(manga) 
// retorno {
//   nome: 'kuroko no basket',
//   ano: 2008,
//   temporadas: 3,
//   filmes: 3,
//   autor: 'Tadatoshi Fujimaki',
//   publicacao: 'Weekly Shonen Jump',
//   editora: 'Shueisha',
//   anime: 'Production I.G'
// }
Object.freeze(manga)
manga.filmes = 4
console.log(manga)
// retorno {
//   nome: 'kuroko no basket',
//   ano: 2008,
//   temporadas: 3,
//   filmes: 3,
//   autor: 'Tadatoshi Fujimaki',
//   publicacao: 'Weekly Shonen Jump',
//   editora: 'Shueisha',
//   anime: 'Production I.G'
// }
```

- `parseFloat()` -> Recebe uma string e transforma em um número decimal
  
```js
console.log(parseFloat("lilit")) // retorno NaN
console.log(parseFloat("5423fv")) // retorno 5423
console.log(parseFloat(true)) // retorno NaN
console.log(parseFloat("356.354")) // retorno 356.354
console.log(parseFloat("8.7_bs")) // retorno 8.7
console.log(parseFloat("_4e")) // retorno NaN
```

- `parseInt()` -> Recebe uma string e transforma em um número inteiro
  
```js
console.log(parseInt("lilit")) // retorno NaN
console.log(parseInt("5423fv")) // retorno 5423
console.log(parseInt(true)) // retorno NaN
console.log(parseInt("356.354")) // retorno 356
console.log(parseInt("8.7_bs")) // retorno 8
console.log(parseInt("_4e")) // retorno NaN
```

> Os métodos `parseFloat()` e `parseInt()` são globais (top-level) e não estão associadas a nenhum objeto, se o argumento passado não for string será convertido através do método `ToString()`, se o primeiro caractere não puder ser convertido para um número, o retorno é `NaN`, se for outro caractere após o primeiro, o retorno ignora este e os caracteres seguintes.

---
## 4. Spread/rest

### 4.1. Spread syntax

- Sintaxe de Espalhamento permite que um objeto iterável, como uma expressão de array ou uma string seja expandido para ser usado onde zero ou mais argumentos (para chamadas de funções) ou elementos (para arrays literais) são esperados, ou que um objeto seja expandido onde zero ou mais pares propriedade:valor (para objetos literais) são esperados. _(MDN)_

#### Exemplos de aplicações

```js

function imprimir(x, y, z) { 
    return console.log(x, y, z)
}
let argumentos = [2, 3, 5]

espalhar(...argumentos)


let compras = ['calça preta', 'blusa animal print', 'salto fino vermelho 12cm']
let novasCompras = ['argolas grandes de prata', ...compras, 'lace cacheada castanho']
let novissimasCompras = [...compras]

let aluna1 = {nome: 'Jéssica', cidade: 'Recife'}
let aluna2 = {nome: 'Gabriela', cidade: 'São Paulo'}

let alunas = { ...aluna1, ...aluna2 }

```

### 4.2. Rest Parameters

- A sintaxe rest se parece exatamente como a sintaxe de espalhamento, mas esta é usada para desestruturar arrays e objetos. De certa forma, a sintaxe rest é o oposto da sintaxe de espalhamento: A sintaxe de espalhamento (spread) 'expande' um array em vários elementos, enquanto a sintaxe rest coleta multiplos elementos e 'condensa' eles em um único elemento. _(MDN)_

#### Exemplos de aplicações

```js

function imprimirSoma(...argumentos) {
    return argumentos.reduce((previous, current) => previous + current);
}

imprimirSoma(2, 5, 4, 3);
imprimirSoma(1, 8, 4, 5, 6);

```
# Exercícios 

## [Exercicio para sala](https://github.com/reprograma/on18-tet-s2-logica-II/tree/main/exercicios/nome-aluna/para-sala)

## [Exercicio para casa](https://github.com/reprograma/on18-tet-s2-logica-II/tree/main/exercicios/nome-aluna/para-casa)

---
# Referências

```bash
  Livro: Lógica de Programação e Algoritmos com JavaScript
  Autor: Edécio Fernando Lepsen
  Editora: novatec

  Livro: Estrutura e Dados e Algoritmos com JavaScript
  Autor: Loiane Groner
  Editora: novatec
```

## Links úteis 

- [Arrays](https://www.youtube.com/watch?v=rlvD4Umw37U&ab_channel=GlauciaLemos)
- [Arrays](https://www.youtube.com/watch?v=cR0yZYJ3ePM&ab_channel=GlauciaLemos)
- [Arrays](https://www.youtube.com/watch?v=defBuY0nLrc&ab_channel=Trybe)
- [Métodos de Array](https://www.youtube.com/watch?v=Q-mHz5KxLG4&ab_channel=GlauciaLemos)
- [Métodos de Array](https://www.youtube.com/watch?v=NuhV9gaJI-Y&t=295s&ab_channel=GlauciaLemos)
- [Métodos de Array](https://www.youtube.com/watch?v=-f5E5Lhocuo&ab_channel=Rocketseat)
- [Métodos Nativos](http://devfuria.com.br/javascript/numeros-aleatorios/)
- [Métodos Nativos](https://www.todoespacoonline.com/w/2014/04/objetos-nativos-javascript/)
- [Spread](https://www.youtube.com/watch?v=5Y3qx0oo7yE&list=PLlAbYrWSYTiPQ1BE8klOtheBC0mtL3hEi&index=22&ab_channel=WillianJusten)
- [Spread](https://www.youtube.com/watch?v=RV-IWn805jU&list=PLlAbYrWSYTiPQ1BE8klOtheBC0mtL3hEi&index=23&ab_channel=WillianJusten)
- [Rest](https://www.youtube.com/watch?v=njPl32ErB34&list=PLlAbYrWSYTiPQ1BE8klOtheBC0mtL3hEi&index=24&ab_channel=WillianJusten)

## Dica Final

Como perceberam ao longo dos repositórios anteriores, existem videos que indico e que fazem parte de alguns cursos gratuitos de iniciação ao JavaScript, gostaria de deixar a indicação para que façam estes cursos para aperfeiçoar seus conhecimentos e ter diferentes perspectivas que podem construir um conhecimento mais sólido da linguagem. 

- [Série para iniciantes em JavaScript - Glaucia Lemos](https://www.youtube.com/playlist?list=PLb2HQ45KP0WsFop0pItGSUYl6baYjKEye)
- [Curso JS Moderno - Willian Justen](https://www.youtube.com/playlist?list=PLlAbYrWSYTiPQ1BE8klOtheBC0mtL3hEi)
- [Curso em Vídeo JavaScript - Jorge Clênio](https://www.youtube.com/watch?v=BXqUH86F-kA&list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm&ab_channel=CursoemV%C3%ADdeo)
