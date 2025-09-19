// Objetos também possuem alguns métodos pré-definidos:

const aluno = {
    nome:"Arthur",
    nota:9.5,
    mat:25102
};

console.log("Conteúdo inicial de 'aluno':", aluno);

// O método Object.keys retorna um array somente das chaves:
console.log("\nResultado de Object.keys: ",Object.keys(aluno));

// O método Object.values retorna um array somente dos valores:
console.log("\nResultado de Object.values: ",Object.values(aluno));

// O método Object.entries retorna um array dos pares [chave,valor]:
console.log("\nResultado de Object.entries: ",Object.entries(aluno));

// Podemos também usar o for para iterar em cima das chaves
for(key in aluno){
    console.log(`Chave: ${key}\t\tValor: ${aluno[key]}`);
}
