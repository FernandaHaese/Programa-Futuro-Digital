// Testes de integração servem para testar se diferentes partes do sistema funcionam bem juntas.
const al = require("./aluno");
const tr = require("./turma");


test("Teste de integração com turma e alunos", () => {
    const aluno1 = new al("Bruno", 21);
    const aluno2 = new al("Hermes Trismegistus", 1085);
    const turma = new tr("React BFD", "Arthur");
    turma.adicionarAluno(aluno1);
    turma.adicionarAluno(aluno2);
    // Checar se cada aluno tem 0 notas inicialmente
    expect(aluno1.notas.length).toBe(0);
    expect(aluno2.notas.length).toBe(0);
    // Aplicar prova para todos os alunos da turma
    turma.aplicarProva();
    // Checar se cada aluno tem 1 nota após a prova
    expect(aluno1.notas.length).toBe(1);
    expect(aluno2.notas.length).toBe(1);
    // Checar se a média da turma é um número válido (entre 0 e 10)
    expect(turma.calcularMediaTurma()).toBeLessThanOrEqual(10);
    expect(turma.calcularMediaTurma()).toBeGreaterThan(0);
    // Verificar aprovação dos alunos
    turma.verificarAprovacao();
    expect(aluno1.aprovado).toBe(aluno1.calcularMedia() >= 6);
    expect(aluno2.aprovado).toBe(aluno2.calcularMedia() >= 6);
});