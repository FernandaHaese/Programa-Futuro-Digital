// Testes unitários em TypeScript

// O jes
const funcsEx =  require("./funcoesExemplo");

// Verifique se já instalou o jest com o comando:
// npm install --save-dev jest @types/jest ts-jest
// E se já configurou o jest com o comando:
// npx ts-jest config:init

// Para rodar os testes, use o comando:
// npx jest nomeDoArquivo.ts

// Exemplo de teste unitário para a função
test('funcsEx.soma de 1 + 2 deve ser 3', () => {
    expect(funcsEx.soma(1, 2)).toBe(3);
});

test('funcsEx.soma de -1 + 1 deve ser 0', () => {
    expect(funcsEx.soma(-1, 1)).toBe(0);
});

// Teste propositalmente quebrado para demonstrar falha
test('funcsEx.somaQuebrada de 1 + 2 deve ser 3 (teste propositalmente quebrado)', () => {
    expect(funcsEx.somaQuebrada(1, 2)).toBe(3); // Este teste vai falhar
});