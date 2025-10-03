{
  /*

Criar duas classes Estudante e Turma
Estudante deve ter as propriedades nome, matricula e media e o método calcularMedia(g1,g2). A média de um aluno é inicialmente 0, e é calculada da seguinte forma:
(G1+2*G2)/3

Turma deve ter as propriedades nome e alunos e os métodos gerarNotaAleatoria():number, que retorna uma nota aleatória entre 0 e 10, e atribuirNotasMalucas(), que atribui a todos os alunos da turma uma nota aleatória, obtida através do outro método

*/
}

class Aluno {
  nome: string;
  matricula: number;
  media: number;

  constructor(nome: string, matricula: number) {
    this.nome = nome;
    this.matricula = matricula;
    this.media = 0;
  }

  calcularMedia(g1: number, g2: number): void {
    this.media = (g1 + 2 * g2) / 3;
  }
}

class Turma {
  nome: string;
  alunos: Array<Aluno>;

  constructor(nome: string, alunos: Array<Aluno>) {
    this.nome = nome;
    this.alunos = alunos;
  }

  gerarNotaAleatoria(): number {
    return Math.random() * 11;
  }

  atribuirNotasMalucas(): void {
    this.alunos.forEach((Aluno) => {
      const g1 = this.gerarNotaAleatoria();
      const g2 = this.gerarNotaAleatoria();
      Aluno.calcularMedia(g1, g2);
    });
  }
}

const alunoFernanda = new Aluno("Fernanda", 12345);
const turmaReact = new Turma("React", [alunoFernanda]);

