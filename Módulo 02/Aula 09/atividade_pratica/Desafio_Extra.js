//Agora, uma cliente entrou na clínica veterinária com 3 anos. Adapte o programa para usar arrays e lidar com todos os gatos de uma vez

const prompt = require("prompt-sync")();

const idadeDoAnimal = [];
const idadeAjustada = [];

const resultadoPerguntaIdade = (perguntaldade()) => {
     const idade = prompt("Qual é a idade do seu animal?");
     return idade;
};

idadeDoAnimal.push(resultadoPerguntaIdade);


idadeDoAnimal.forEach ((calcularIdadeAjustada(idadeOrig)) => {
      const idadeAjustada = idadeOrig * 7;
      return idadeAjustada;
});
    
console.log(`A idade ajustada de seus animais é ${idadeDoAnimal}`);








