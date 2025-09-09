//Separar as duas funções fábricas criadas em dois módulos ESM: animais.mjs e donos.mj, e utilizar eles a partir de um arquivo (esse atual, por exemplo)
import criarAnimal from "./animais.mjs";
import criarDono from "./donos.mjs";
import PromptSync from "prompt-sync";

//Depois, utilizando o prompt-sync. faça um sistema que permite cadastrar novos animais, dono e consultas, além de verificar as consultas existentes de um animal
const prompt = PromptSync();

//Cadastrar informações do dono

function perguntarNomeDono() {
  const nome = prompt("Qual é o nome do tutor?");
  return nome;
}
const nomeDono = perguntarNomeDono();

function perguntarCelularDono() {
  const celular = prompt("Qual é o celular do tutor?");
  return celular;
}
const celularDono = perguntarCelularDono();

const dono = criarDono(nomeDono, celularDono);

console.log("\nInfomações do Tutor:", dono, "\n");

//Cadastrar informações do animal

function perguntarNomeAnimal() {
  const nome = prompt("Qual é o nome do animal?");
  return nome;
}
const nomeAnimal = perguntarNomeAnimal();

function perguntarEspecieAnimal() {
  const especie = prompt("Qual é a espécie do animal?");
  return especie;
}
const especieAnimal = perguntarEspecieAnimal();

function perguntarRacaAnimal() {
  const raca = prompt("Qual é a raça do animal?");
  return raca;
}
const racaAnimal = perguntarRacaAnimal();

function perguntarIdadeAnimal() {
  const idade = prompt("Qual é a idade do animal?");
  return idade;
}
const idadeAnimal = perguntarIdadeAnimal();

function agendarConsulta() {
  const consulta = prompt(
    "Qual data você gostaria de agendar um consulta para o animal?"
  );
  return consulta;
}
const consultaAnimal = agendarConsulta();

const animal = criarAnimal(
  nomeAnimal,
  especieAnimal,
  racaAnimal,
  idadeAnimal,
  dono,
  consultaAnimal
);

console.log("\nInformações do Animal:", animal);

//Conferir consultas marcadas
function conferirConsulta() {
  const consulta = prompt("Gostaria de conferir as consultas agendadas?");
  if (consulta == "Sim") {
    console.log(`Data da consulta:`);
    this.consultaAnimal.forEach((element) => {
      console.log(element);
    });
  }
}
