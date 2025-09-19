
const aluno1 = {
    nome:"Arthur",
    nota:9.5,
    mat:25102
};


console.log("Conteúdo inicial de 'aluno1':", aluno1);

//Podemos também extrair o conteúdo das propriedade em variáveis:
const {nome,nota,mat} = aluno1;
console.log("\nAgora nome, nota em mat estão em variáveis separados com valores:", nome, nota, mat);


console.log("Conteúdo 'aluno1' não foi modificado por isso:", aluno1);

// Podemos criar objetos também através do que chamamos de 'funções de fábrica'
// Essas são basicamente funções que criam um objeto a partir dos argumentos dados

const criarAluno = (nome,mat) => {
    return {
        nome,
        nota: "Nenhuma Nota Registrada",
        mat
    }
}

// Assim, posso criar vários objetos com a mesma estrutura rapidamente:

const aluno2 = criarAluno("Duke Elington",25001);
const aluno3 = criarAluno("Dave Brubeck",25123);

console.log("\nConteúdo de 'aluno2' (criado com um Factory function):", aluno2);
console.log("Conteúdo de 'aluno3' (criado com um Factory function):", aluno3);
