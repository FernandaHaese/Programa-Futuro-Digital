//Separar as duas funções fábricas criadas em dois módulos ESM: animais.mjs e donos.mj, e utilizar eles a partir de um arquivo (esse atual, por exemplo)
import criarAnimal from "./animais.mjs";
import criarDono from "./donos.mjs";
import PromptSync from "prompt-sync";

//Depois, utilizando o prompt-sync. faça um sistema que permite cadastrar novos animais, dono e consultas, além de verificar as consultas existentes de um animal
const prompt = PromptSync();

//Cadastrar informações do dono
function perguntarDono() {
  const nome = prompt("Qual é o nome do tutor?");
  return nome;
}
const nomeDono = perguntarDono();

function perguntarCelular() {
  const celular = prompt("Qual é o celular do tutor?");
  return celular;
}
const celularDono = perguntarCelular();

const dono = criarDono(nomeDono, celularDono);

console.log("\nCadastro realizado com sucesso!");
console.log("------------------------------");
console.log("Dados do Tutor:", dono, "\n");

//Cadastrar informações do animal

function perguntarAnimal() {
  const nome = prompt("Qual é o nome do animal?");
  return nome;
}
const nomeAnimal = perguntarAnimal();

function perguntarEspecie() {
  const especie = prompt("Qual é a espécie do animal?");
  return especie;
}
const especieAnimal = perguntarEspecie();

function perguntarRaca() {
  const raca = prompt("Qual é a raça do animal?");
  return raca;
}
const racaAnimal = perguntarRaca();

function perguntarIdade() {
  const idade = prompt("Qual é a idade do animal?");
  return idade;
}
const idadeAnimal = perguntarIdade();

function perguntarConsulta() {
  const consulta = prompt("Qual a data da consulta?");
  return consulta;
}
const consultaAnimal = perguntarConsulta();

const animal = criarAnimal(
  nomeAnimal,
  especieAnimal,
  racaAnimal,
  idadeAnimal,
  dono,
  consultaAnimal
);

console.log("\nCadastro realizado com sucesso!");
console.log("------------------------------");
console.log("Dados do Animal:", animal, "\n");

//Conferir consultas marcadas

//Função para conferir consultas
function conferirConsulta() {
  const consulta = prompt(
    "Gostaria de conferir as consultas agendadas? (Sim/Não)"
  );
  if (consulta == "Sim") {
    console.log("\nData da consulta:\n", `${animal.consultas}`);
  } else {
    console.log("Nenhuma data encontrada");
  }
}
conferirConsulta();
