const soma = (a: number, b: number): number => {
    return a + b;
};

const somaQuebrada = (a: number, b: number): number => {
    return a + b + 1; // Função propositalmente quebrada para testes
};


module.exports = { soma, somaQuebrada };