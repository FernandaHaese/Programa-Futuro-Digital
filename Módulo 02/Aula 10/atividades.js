//Crie dois objetos com as propriedades nome, espécie, raça e idade, e imprima o valor de cada propriedade individualmente

const animal = {
  nome: "Luna",
  espécie: "Felino",
  raça: "Gato Doméstico",
  idade: "3",
};

console.log(`Seu nome é ${animal.nome}`);
console.log(`Sua espécie é ${animal.espécie}`);
console.log(`Sua raça é ${animal.raça}`);
console.log(`Sua idade é ${animal.idade}`);

//Agora adicione três novas propriedades aos seus objetos:

//um array para as datas de consultas
animal.consulta = ["13/09", "14/10"];

//Um objeto dono com as propriedades nome e celular
const dono = {
  nome: "Nome",
  celular: "(00) 0000-0000",
};

//Um método verificarConsultas para verificar se há alguma consulta marcada e e imprimir as datas dessa caso haja e "Nenhumada data encontrada" caso não
animal.verificarConsultas = function () {
  if (this.consulta.length > 0) {
    console.log(`Data da consulta:`);
    this.consulta.forEach((element) => {
      console.log(element);
    });
  } else {
    console.log("Nenhuma data encontrada");
  }
};
animal.verificarConsultas();
