//Criar uma variavel:
let nomeDaVariavel = valor;
//Atribuir um novo valor:
nomeDaVariavel = valor;
//Exibir o valor:
console.log(nomeDaVariavel);

//Operadores para variáveis:
//Soma:
nomeDaVariavel = nomeDaVariavel + 5;
//Substração:
nomeDaVariavel = nomeDaVariavel - 5;
//Divisão:
nomeDaVariavel = nomeDaVariavel / 5;
//Multiplicação:
nomeDaVariabel = nomeDaVariavel * 5;
//Somar apenas +1:
nomeDaVariavel++;
//Subtrair apenas -1:
nomeDaVariavel--;

//Testes de verdadeiro ou falso com variáveis:
//Igualdade estrita:
nomeDaVariavel === 5;
//Não igualdade
nomeDaVariavel !== 5;
//Menor que
nomeDaVariavel < 5;
//Maior que:
nomeDaVariavel > 5;

//A condicional FOR repete um segmento de código como o while, mas usa um número fixo de repetições
for (i = 0; i < 0; i++) {
  nomeDaFuncao(i);
}

//Comentários podem ser realizados com // ou /* */

//Funções podem ter zero ou mais argumentos e zero ou um retornos. Veja um exemplo em que criamos uma função para dividir uma turma em grupos, utilizando para isso dois argumento (grupo e turma):
//Define que a turma tem 30 alunos:
let turma = 30;
//Cria uma função que irá dividir a turma em grupos:
function dividir(turma, grupo) {
  return turma / grupo;
}
//Pede o retorno para grupos de 5 alunos:
let resul = dividir(30, 5);
//Pede para exibir o resultado:
console.log(resul);
