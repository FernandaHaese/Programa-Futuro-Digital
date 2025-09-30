// Criar uma função calcularCubo, que aceita como argumento um número e retorna o cubo dele

const calcularCubo = (a: number): number => {
  return a ** 3;
};

const resultado = calcularCubo(5);
console.log(resultado);

//Criar uma função primeiraOuUltimaLetra, que aceita uma string e uma booleana como argumento. Caso a booleana seja verdadeira, imprime a primeira letra da string, caso seja falsa imprime a última. Não retorna nada

const primeiraOuUltimaLetra = (a: string, b: boolean) => {
  if (b == true) {
    console.log(`\nA primeira letra é: ${a[0]}`);
  } else {
    console.log(`A última letra é: ${a[a.length - 1]}`);
  }
};

primeiraOuUltimaLetra("Olá", true);
primeiraOuUltimaLetra("Mundo", false);

/*
Implementar as seguintes funções e tipos
- O tipo Aluno deve ter as propriedades nome, matricula e nota
- O tipo Turma deve ter as propriedades materia, codigo e alunos
- A função imprimirPresenca deve receber uma turma como argumento e imprimir o nome da matéria e uma lista dos alunos matriculados
- A função matricularAluno deve receber uma turma e um aluno e incluir o aluno na turma
- A função calcularMedia deve receber uma turma calcular a média das notas nessa turma e retorná-la
*/

type Aluno = {
  nome: string;
  matricula: number;
  nota: number;
};

type Turma = {
  materias: string;
  codigo: number;
  alunos: Array<Aluno>;
};

const imprimirPresenca = (turma: Turma) => {
  console.log(`\nMatérias:`);
  console.log(`- ${turma.materias}`);
  console.log("Alunos:");
  turma.alunos.forEach((aluno) => {
    console.log(`- ${aluno.nome} (Matrícula: ${aluno.matricula})`);
  });
};

const matricularAluno = (turma: Turma, aluno: Aluno) => {
  turma.alunos.push(aluno);
  console.log(
    `\n${aluno.nome} foi matriculado na turma de ${turma.materias} com sucesso.`
  );
};

const calcularMedia = (turma: Turma): number => {
  const somaNotas = turma.alunos.reduce((soma, aluno) => soma + aluno.nota, 0);
  return somaNotas / turma.alunos.length;
};

const aluno1: Aluno = {
  nome: "Fernanda",
  matricula: 123,
  nota: 8,
};

const aluno2: Aluno = {
  nome: "Rafael",
  matricula: 456,
  nota: 8,
};

const turmaReact: Turma = {
  materias: "React",
  codigo: 789,
  alunos: [aluno1, aluno2],
};

imprimirPresenca(turmaReact);
matricularAluno(turmaReact, aluno2);
const mediaTurma = calcularMedia(turmaReact);
console.log(`\nMédia da turma: ${mediaTurma}`);
