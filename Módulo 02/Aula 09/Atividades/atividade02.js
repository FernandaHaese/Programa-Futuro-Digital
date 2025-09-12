//Agora, uma cliente entrou na clínica veterinária com 3 gatos. Adapte o programa para usar arrays e lidar com todos os gatos de uma vez

const prompt = require("prompt-sync")();

// Funções originais
function perguntaIdade() {
  const idade = prompt("Qual é a idade do gato? ");
  return parseInt(idade);
}

function calcularIdadeAjustada(idadeOriginal) {
  const idadeAjustada = idadeOriginal * 7;
  return idadeAjustada;
}

// Array para armazenar as idades dos gatos
const idadesGatos = [];

// Coleta a idade dos 3 gatos
for (let i = 0; i < 3; i++) {
  const idade = perguntaIdade();
  idadesGatos.push(idade);
}

// Processa todos os gatos do array
console.log("\n RESULTADOS:");
idadesGatos.forEach((idadeOriginal) => {
  const idadeAjustada = calcularIdadeAjustada(idadeOriginal);
  console.log(`${idadeOriginal} anos (idade ajustada: ${idadeAjustada} anos)`);
});
