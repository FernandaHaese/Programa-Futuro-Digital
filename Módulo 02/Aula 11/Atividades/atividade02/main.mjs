//Tarefa: No main.mjs, utilizando o prompt-sync, faça um sistema que permite cadastrar novos pets, donos e consultas, além de verificar as consultas existentes para um certo pet

//Importar módulos de animais, donos e o prompt-sync
import criarAnimal from "./animais.mjs";
import criarDono from "./donos.mjs";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

// Função genérica para perguntar dados
function perguntar(mensagem) {
  return prompt(mensagem);
}

// Cadastro do dono
function cadastrarDono() {
  const nome = perguntar("Qual é o nome do tutor?");
  const celular = perguntar("Qual é o celular do tutor?");
  return criarDono(nome, celular);
}

// Cadastro do animal
function cadastrarAnimal(dono) {
  const nome = perguntar("Qual é o nome do animal?");
  const especie = perguntar("Qual é a espécie do animal?");
  const raca = perguntar("Qual é a raça do animal?");
  const idade = perguntar("Qual é a idade do animal?");
  const consulta = perguntar("Qual a data da consulta?");
  return criarAnimal(nome, especie, raca, idade, dono, consulta);
}

// Conferir consultas
function conferirConsulta(animal) {
  const resposta = perguntar(
    "Gostaria de conferir as consultas agendadas? (Sim/Não)"
  );
  if (resposta.toLowerCase() === "sim") {
    console.log("\nData da consulta:\n", animal.consultas);
  } else {
    console.log("Nenhuma data encontrada");
  }
}

// Execução principal
const dono = cadastrarDono();
console.log("\nCadastro realizado com sucesso!");
console.log("------------------------------");
console.log("Dados do Tutor:", dono, "\n");

const animal = cadastrarAnimal(dono);
console.log("\nCadastro realizado com sucesso!");
console.log("------------------------------");
console.log("Dados do Animal:", animal, "\n");

conferirConsulta(animal);
