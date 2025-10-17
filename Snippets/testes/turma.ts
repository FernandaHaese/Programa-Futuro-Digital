class Turma {
    nome: string;
    alunos: Array<Aluno>;
    professor: string;

    constructor(nome: string, professor: string) {
        this.nome = nome;
        this.professor = professor;
        this.alunos = [];
    }

    adicionarAluno(aluno: Aluno) {
        this.alunos.push(aluno);
    }

    aplicarProva() {
        this.alunos.forEach(aluno => aluno.fazerProva());
    }

    calcularMediaTurma(): number {
        const total = this.alunos.reduce((acc, aluno) => acc + aluno.calcularMedia(), 0);
        return total / this.alunos.length;
    }

    verificarAprovacao(): void {
        this.alunos.forEach(aluno => {
            aluno.aprovado = aluno.calcularMedia() >= 6;
        });
    }
}

module.exports = Turma;