// Podemos adicionar basicamente o que quisermos dentro de um objeto.

// Por exemplo, um array:
const turma = {
    curso:"React",
    alunos:["John Coltrane","Miles Davis","Charles Mingus"]
}

console.log("Conteúdo de inicial de 'turma' ",turma);
// Acessando essa propriedade, podemos tratar como um array normal:

console.log("\nAlunos na turma:");
turma.alunos.forEach( a =>
    console.log(`- ${a}`)
);

// Podemos ter também objetos dentro de objetos!

turma.professor = {nome:"Arthur", email:"arthurmograbi@gmail.com"}

// Chamamos esses de objetos "nested"!

console.log("\nConteúdo de 'turma' após adicionarmos a propriedade 'professor' ",turma);

// Podemos também ter funções como propriedades, as quais chamamos de métodos
// Podemos adicionar um método usando duas notações diferentes
const prova = {
    comeca : function(horario){                // Explicitando o valor da propriedade, desse jeito
        console.log(`A prova começou às ${horario}h`);
    },
    termina(horario){                          // Ou com esse shorthand (atalho)
        console.log(`A prova terminou às ${horario}h`);
    }
};

prova.comeca(9);
prova.termina(11);

// Através da keyword 'this', podemos fazer referencia ao objeto pai dentro dos métodos

turma.imprimirListaPresenca = function () {
    console.log("\nLista de presença:")
    this.alunos.forEach( a =>
        console.log(`- ${a}`)
    );
}



turma.imprimirListaPresenca();

// Cuidado no entanto, as funcões que usam a notação de seta (expressão de funções), não acessam o this da mesma forma
// Se eu tentar rodar a função abaixo, vai dar erro!
turma.imprimirListaPresenca2 = () => {
    console.log("\nLista de presença:")
    this.alunos.forEach( a =>
        console.log(`- ${a}`)
    );
}

// Podem experimentar, descomentando a linha abaixo:
// turma.imprimirListaPresenca2();