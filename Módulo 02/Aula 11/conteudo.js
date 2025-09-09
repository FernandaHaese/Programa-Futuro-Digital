/* 

Existem dois tipos de memórias em nosso computador:

-> A memória RAM é a memória temporaría em seu computador, então é considerada uma memóriva volátil. No entanto, ele é mais rápido para transferir as informações do processador ao computador.
-> O outro tipo seria a memória HD, que é uma memória permanente. No entanto, tem um processamento um pouco mais lento. 

O endereço que geralmente buscasmos em nosso código costuma estar armazenado na memória RAM, ou em caches. Portanto, quando passamos dados através de um endereço, como objetos, arrays e funções, utilizamos apenas uma referência - consultando onde está armazenado na memória RAM. Mas no caso de elementos primitivos como números, strings e valores booleanos, passamos os dados através do método copy - ou seja, ao invés de passar o endereço de onde ele está armazenado, apenas passamos o valor inteiro.
-> Consultar exemplos do professor no drive

*/

//A seguir, vamos criar um objeto e conhecer dois métodos de criar cópias desse objeto:
const aluno1 = {
  nome: "Artur",
  idade: 5,
  nota: 8,
};

//Para fazer uma cópia rasa de um objeto, apenas copiando o mesmo endereço dos valores, usamos:
const aluno2 = { ...aluno1 };

//Exibir valores originais
console.log("\nValores originais de aluno 1 e aluno 2:");
console.log("Aluno 1", aluno1);
console.log("Aluno 2", aluno2);

//Tentar alterar a nota do aluno 2
aluno2.nota = 2;

//Observe como ambos aluno 1 e aluno 2 tem sua nota alterada, pois são cópias iguais que utilizam a mesma referência
console.log("\nApós mudar a nota só da variável 'aluno2', com cópia rasa:");
console.log("Aluno 1", aluno1);
console.log("Aluno 2", aluno2);

//Agora vamos tentar criar uma função para zerar a nota e atribuir apenas para um dos alunos
function zeraNota(aluno) {
  aluno.nota = 0;
}

zeraNota(aluno1);

//Observe como ambos tem sua nota alterada, pois tem o mesmo endereço
console.log(
  "\nApós zerar a nota apenas para a variável 'aluno1', com cópia rasa:"
);
console.log("Aluno 1", aluno1);
console.log("Aluno 2", aluno2);

//Para resolver esse problema, podemos usar o método cópia profunda através do structured clone, que copia todos os objetos e permite alterações somente na nova cópia - sem alterar a versão original
const aluno3 = structuredClone(aluno1);

//Agora vamos criar uma função alterarIdade e testar apenas no aluno3
function alterarIdade(aluno) {
  aluno.idade = 8;
}
alterarIdade(aluno3);

//Confira como apenas o aluno3 terá o valor atualizado, e os aluno1 e aluno2 permaneceram os mesmos
console.log(
  "\nApós alterar a idade apenas para a variável 'aluno3', com cópia profunda:"
);
console.log("Aluno 1", aluno1);
console.log("Aluno 2", aluno2);
console.log("Aluno 3", aluno3);

//Se você precisar de tratar com os valores de um objeto de maneira independente, você pode "desempacotar" os valores da seguinte forma:
const { nome, idade, nota } = aluno3;
console.log(
  "\nAgora nome, idade e nota estão em variáveis separados, com valores:",
  nome,
  idade,
  nota
);

//Para que você não precise de digitar novamente os objetos para reutiliza-los, você pode criar funções de fábrica (factory), que criam um objerto a partir dos valores dados:
const criarAluno = (nome, idade, nota) => {
  return {
    nome,
    idade,
    nota,
  };
};

const aluno4 = criarAluno("Rafael", 27, 10);

console.log("\nCriando novo 'aluno 4' a partir de uma função de fábrica:");
console.log("Aluno 1", aluno1);
console.log("Aluno 2", aluno2);
console.log("Aluno 3", aluno3);
console.log("Aluno 4", aluno4);

/*

Os módulos JavaScript permitem que você divida seu código em arquivos separados, o que facilita a manutenção de uma base de código. Para importar e exportar esses módulos, podemos utilizar o dois métodos:

-> ESN
-> CJS

Geralmente, ESM é o mais utilizado, mas em alguns códigos legado (antigo) pode ser necessário utilizar o CJS 

-> Conferir exemplos do professor no drive.
-> Confira mais em: https://www.w3schools.com/js/js_modules.asp

*/
