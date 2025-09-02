//Crie um sistema para uma clínica veterinária, com uma função de perguntaIdade, usando o prompt-sync para perguntar a idade do animal e capturar o resultado

const prompt = require("prompt-sync")();

function perguntaldade() {
  const idade = prompt("Qual é a idade do seu animal?");
  return idade;
}

const resultado = perguntaldade();
console.log(`O animal tem ${resultado} anos`);

//Em seguida, crie uma outra função calculaIdadeAjustada que calcula a idade do animal multiplicado por 7

function calcularIdadeAjustada(idadeOrig) {
  const IdadeAjustada = idadeOrig * 7;
  return IdadeAjustada;
}

const resultadoIdadeAjustada = calcularIdadeAjustada(resultado);
console.log(`A idade ajustada do animal é ${resultadoIdadeAjustada} anos`);
