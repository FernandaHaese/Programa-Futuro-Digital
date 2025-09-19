


/* Um objeto é composto de pares de chave e valor (keyvalue)
No caso desse Objeto aluno, ele possui os pares:
┌───────────┬──────────┐
│ Chave     │ Valor    │
╞═══════════╪══════════╡
│ nome      │ "Arthur" │
├───────────┼──────────┤
│ nota      │ 9.5      │
├───────────┼──────────┤
│ matricula │ 25102    │
└───────────┴──────────┘
*/

const aluno = {
    nome:"Arthur",
    nota:9.5,
    matricula:25102
};





// Podemos também colocar as chaves como strings, como abaixo:
const filme = {
    "nome":"Eraserhead",
    "data_lancamento":1977,
    "diretor":"David Lynch"
};


console.log("Conteúdo inicial de 'aluno':", aluno);
console.log("Conteúdo inicial de 'filme':",filme);


// Também chamamos esses pares de chave e valor de propriedades
// Nesse exemplo, poderiamos dizer que 'aluno' possui a propriedade 'nota' com o valor 9.5

//Podemos acessar essas propriedades de duas formas:
// 1. Notação de Ponto:

console.log(`\nA propriedade 'nota' do objeto 'aluno' é ${aluno.nota}`);

// 2. Notação de Chave:

console.log(`A propriedade 'diretor' do objeto 'filme' é ${filme['diretor']}`);

// Podemos também atribuir novos valores às propriedades e criar propriedades novas com essas notações.
aluno.nota= 10;

console.log("\nConteúdo da variável 'aluno' após a mudança de nota:", aluno);

filme["duracao"]=89

console.log("Conteúdo da variável 'filme' após adicionarmos uma nova propriedade:",filme);

// Podemos também deletar uma propriedade usando o 'delete'
delete aluno.matricula
console.log("\nConteúdo da variável 'aluno' após deletarmos uma propriedade", aluno);