Bem-vindo a Pokedex, um aplicativo para entusiastas que desejam explorar o mundo Pokémon. Com uma interface intuitiva e amigável, a Pokedex oferece uma extensa base de dados com informações detalhadas sobre todos os Pokémon conhecidos, desde os clássicos até os mais raros. Você poderá descobrir informações e curiosidades de cada criatura. Além disso, nosso sistema de busca que permite filtrar os Pokémons com base em nome e ID.

Um projeto de autoria própria, com desing e features inspirados em outras aplicações já existentes. Desenvolvido com TypeScript, React e Bootstrap. E esse foi o meu resultado final 💻<https://pokedex-eta-olive.vercel.app/>.

![#](./public/Pokedex1.png)

![#](./public/Pokedex2.png)

![#](./public/Pokedex3.png)

![#](./public/Frame1.png)

</br>

## 🎯 Objetivos

Os usuários devem ser capazes de:

> - Ver o layout ideal para a interface de acordo com o tamanho de tela do seu dispositivo
> - Ver os estados de "hover" e "focus" para todos os elementos interativos na página
> - Navegar por uma lista de todos os Pokémons
> - Clicar no Pokemon e ter informações de cada criatura
> - Pesquisar por nome ou ID

</br>

## 🔧 Propriedades e Tecnologias

> - Vite
> - TypeScript
> - React
> - React Router DOM v6
> - React icons
> - PokeAPI
> - Bootstrap 4
> - SASS
> - Mobile-first
> - Semântica HTML

</br>

## 🧠 Meu aprendizado

> - TypeScript

TypeScript é uma linguagem que adiciona tipos ao JavaScript. Ele nos permite escrever JavaScript, mas adicionando tipos, que pode detectar possíveis bugs, esclarecer a estrutura e ajudar a refatorar nosso código. 

Este projeto possibilitou me introduzir ao superset do JavaScript, muitos conceitos foram abordados e citarei alguns deles ao longo deste artigo.

React.ts
```js
...
let x: number;
...
```

Acima temos um exemplo de aplicação de tipo a uma variável, para definir um tipo basta utilizar a notação de dois pontos seguida do tipo primitivo que desejar. Como podemos perceber a variável não foi definida ainda, dessa forma se faz necessário tipificá-la, mas quando se define a variável, não é preciso aplicar o tipo como no exemplo, o próprio sistema de tipos do TypeScript utiliza a inferência, esperando que o tipo de dados da variável corresponda ao tipo do valor inicialmente atribuído a ela na declaração. Ou seja, a variável nunca poderá ser reatribuída a um valor de um tipo de dados diferente.

```js
...
const getPokemonById = async (identifier: number | string) => {...}
...
```

No entanto, em vários casos precisamos que uma variável possa assumir mais de um tipo, e para tornar o manejo de dados mais flexível, o TypeScript disponibiliza o recurso de união, que nos permitem definir vários membros de tipo permitidos separando cada membro de tipo com um caractere de linha vertical "|".

```js
...
type PokemonT = {
    name: string,
    id: number,
    height: number,
    weight: number,
    types: [],
    sprites: {
        "front_default": string,
        other: {
            "official-artwork": {
                "front_default": string,
            },
        },
    },
    stats: [],
}
...
function Pokemon({ pokemon }: { pokemon: PokemonT }) {...}
...
```

Frequentemente quando precisamos consumir uma API qualquer, precisamos manipular diversos tipos de dados e comumente em formato de objeto, acima temos um exemplo da sintaxe de uma declaração de um tipo de objeto, é bem semelhante a um objeto literal, contudo, o valor de cada propriedade é seu próprio tipo.

[saiba mais!](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

</br>

## 💻 Rodando o projeto

Para conferir a versão final é só acessar o link: 💻<https://pokedex-eta-olive.vercel.app/>.

</br>

## Autor

- LinkedIn - [Pedro A. Lima](https://www.linkedin.com/in/pedroalima6/)