//Objetos são um dos tipos de dados fundamentais do Javascript. Eles funcionam a partir de pares de chaves e valor. Esses pares são chamados de propriedades. Sua sintaxe é:

const objeto = {
  nome: "Fernanda",
};

//Para ter acesso as propriedades, usamos:
console.log(`A propriedade do objeto é ${objeto.nome}`);

//Podemos atribuir valores através da notação:
objeto["nome"] = "Rafael";

//Em objetos, podemos misturar diversos tipos de dados ou até objetos dentro de objetos
const turma = {
  curso: "turma",
  alunos: "Fernanda, Daniel, Lucas",
  professor: { nome: "Artur" },
};

//Além disso, também é possível colocar funções em objetos
const prova = {
  nota_maxima: 10,
  comeca: function (horario) {
    console.log(`A prova comeã às ${horario}`);
  },
};

//Para fazer uma referência ao objeto dentro de um de seus métodos, usamos o This
turma.imprimirListaPresenca = function () {
  console.log("\n Lista de presença:");
  this.alunos.array.forEach((a) => {
    //conteudo da funcao
  });
};

//Os objetos também possuem alguns métrodos pré-definidos, como:

//object.keys para pegar apenas as chaves dos objetos
//objects.values para capturar apenas os valores
//objects.entries para capturar ambos

//Também é possivel usar o for para iterar sobre todas as chaves de um objeto
for (key in alunos) {
  console.log(`Chave: ${key}\t\t Valor: ${alunos[key]}`);
}

//A estrutura da memória de um computador fica armazenada de maneira física, ou seja, todo dado possui um endereço. Por conta disso, objetos direntes podem ter um mesmo endereço.

//Em verdade, todos os tipos de valores que não são primitivos, como strings, são objetos. Por exemplo, arrays e funções também são objetos.
