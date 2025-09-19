const operacoes = require('./modulocjs.cjs');

const soma = operacoes.adicionar(5, 3);
const diferenca = operacoes.subtrair(5, 3);

console.log("Soma de 5 + 3 =", soma);
console.log("Subtração de 5 - 3 =", diferenca);