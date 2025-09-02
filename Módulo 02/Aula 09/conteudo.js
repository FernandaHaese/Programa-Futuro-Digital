//Para otimizar nosso fluxo de trabalho, podemos reutilizar bibliotecas npm, com conteúdo pronto, em nosso código.
// No exemplo a baixo, iremos utilizar a biblioteca prompt-sync, usada para capturar resultados.
//Primeiro, instale a biblioteca com o comando no terminal: npm install nome-da-biblioteca
//Depois, crie uma constante valor require("nome-da-biblioteca")()

const prompt = require("prompt-sync")();
const name = prompt("Qual é o seu nome?");
console.log(`Olá ${name}`);

//Declarações e expressões de funções possuem uma diferença em seu hoisting, que é a capacidade de "chamar" antes da função ser declarada. Portanto, uma expressão de função não consegue ser chamada antes de ser declarada.

//Expressão de função:
function nomeDaFuncao() {
  //conteudo da função
}

//Declaração da função e imprimir a função
const resultado = nomeDaFuncao();
console.log(resultado);

//Uma forma mais rápida e prática de resolver isso é declarar funções dentro de variáveis, usando a sintaxe:
const nome = (argumento1, argumento2) => {
  //conteúdo
};

//Arrays são utilizados para armazenar vários elementos, geralmente do mesmo tipo. Não confuda esse elemento com listas.
const nomes = ["nome1", "nome2", "nome3"];
const numeros = [1, 2, 3, 4];

//O array também pode ser indexado, da mesma forma que as strings:
nomes.length();
numeros.sort;

//Para empurrar um valor para dentro do array, usamos push:
numeros.push(5);

//Para retirar um valor de dentro do array, usamos pop:
numeros.pop(5);

//Para alterar um substituir um valor do array, usamos:
numeros[5] = 10;

//Para inverter a ordem dos valores, usamos reverse:
nomes.reverse;

//Para executar uma funcao para um array, usamos forEach:
numeros.forEach((funcao) => {
  //conteudo da funcao
});

