// Como estamos fazendo testes dentro de um script, podemos gerar condições de teste automáticas
const funcEx =  require("./funcoesExemplo");

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        test(`soma de ${i} + ${j} deve ser ${i + j}`, () => {
            expect(funcEx.soma(i, j)).toBe(i + j);
        });

        test(`somaQuebrada de ${i} + ${j} deve ser ${i + j} (teste propositalmente quebrado)`, () => {
            expect(funcEx.somaQuebrada(i, j)).toBe(i + j); // Este teste vai falhar
        });
    }
}