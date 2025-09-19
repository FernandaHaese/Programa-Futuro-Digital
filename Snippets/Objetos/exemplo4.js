
const aluno1 = {
    nome:"Arthur",
    nota:9.5,
    mat:25102
};


console.log("Conteúdo inicial de 'aluno1':", aluno1);
// Cuidado que objetos são passados e copiados por referência
// Então, se eu atribuir aluno a uma outra variável assim, ao invés de criar um novo objeto, as duas variáveis vão armazenar o mesmo objeto:
const aluno2 = aluno1;
// Então, se eu mudar aluno2....
aluno2.nota = 2;

// ... o conteúdo de ambas as variáveis muda
console.log("\nApós mudar a nota só da varíavel 'aluno2':")
console.log("Aluno1", aluno1);
console.log("Aluno2", aluno2);

// A mesma coisa acontece passando objetos como argumentos
function zeraNota(aluno){
    aluno.nota= 0;          // Isso vai zerar a nota de qualquer aluno usado como argumento
}

zeraNota(aluno1);
console.log("\nApós chamar a função zeraNota só no 'aluno1':")
console.log("Aluno1", aluno1);
console.log("Aluno2", aluno2);

// Se quisermos criar uma cópia podemos usar structuredClone

const aluno3 = structuredClone(aluno1);

aluno3.nota = 10;

console.log("\nApós mudar a nota só da varíavel 'aluno3' (criado com structuredCloine):")
console.log("Aluno1", aluno1);
console.log("Aluno2", aluno2);
console.log("Aluno3", aluno3);


