//Para otimizar nosso fluxo de trabalho, podemos reutilizar bibliotecas npm, com conteúdo pronto, em nosso código.
// No exemplo a baixo, iremos utilizar a biblioteca prompt-sync, usada para capturar resultados.
//Primeiro, instale a biblioteca com o comando no terminal: npm install nome-da-biblioteca
//Depois, crie uma constante valor require("nome-da-biblioteca")()

const prompt = require("prompt-sync")();

const name = prompt("Qual é o seu nome?");
console.log(`Olá ${name}`);
