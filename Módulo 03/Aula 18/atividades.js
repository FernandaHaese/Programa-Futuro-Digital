{
  /*
  
  Criar duas classes Estudante e Turma
  Estudante deve ter as propriedades nome, matricula e media e o método calcularMedia(g1,g2). A média de um aluno é inicialmente 0, e é calculada da seguinte forma:
  (G1+2*G2)/3
  
  Turma deve ter as propriedades nome e alunos e os métodos gerarNotaAleatoria():number, que retorna uma nota aleatória entre 0 e 10, e atribuirNotasMalucas(), que atribui a todos os alunos da turma uma nota aleatória, obtida através do outro método
  
  */
}
var Aluno = /** @class */ (function () {
  function Aluno(nome, matricula) {
    this.nome = nome;
    this.matricula = matricula;
    this.media = 0;
  }
  Aluno.prototype.calcularMedia = function (g1, g2) {
    this.media = (g1 + 2 * g2) / 3;
  };
  return Aluno;
})();
var Turma = /** @class */ (function () {
  function Turma(nome, alunos) {
    this.nome = nome;
    this.alunos = alunos;
  }
  Turma.prototype.gerarNotaAleatoria = function () {
    return Math.random() * 11;
  };
  Turma.prototype.atribuirNotasMalucas = function () {
    var _this = this;
    this.alunos.forEach(function (Aluno) {
      var g1 = _this.gerarNotaAleatoria();
      var g2 = _this.gerarNotaAleatoria();
      Aluno.calcularMedia(g1, g2);
    });
  };
  return Turma;
})();
var alunoFernanda = new Aluno("Fernanda", 12345);
var turmaReact = new Turma("React", [alunoFernanda]);
