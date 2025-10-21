//Importar as classes de livro e pessoa
const Livro = require("./Livro");
const Pessoa = require("./Pessoa");

//Classe que determina as informações para realizar um empréstimo
class Emprestimo {
  public livro: Livro;
  public pessoa: Pessoa;
  public dias_emprestimo: number;

  //Determina todas as informações para um empréstimo
  constructor(livro: Livro, pessoa: Pessoa, dias_emprestimo: number) {
    this.livro = livro;
    this.pessoa = pessoa;
    this.dias_emprestimo = dias_emprestimo;
    this.livro.qtdEstoque -= 1;
  }

  //Função para imprimir as informações sobre o empréstimo cadastrado
  imprimirDetalhes() {
    console.log("---------------------");
    console.log(`Livro: ${this.livro.titulo}`);
    console.log(`Pessoa: ${this.pessoa.nome}`);
    console.log(`Dias de Empréstimo: ${this.dias_emprestimo}`);
    console.log("---------------------");
  }

  //Função para calcular taxa de multa por dias de atraso ao devolver livros emprestados
  calcularMulta(demoraDias):number {
    if (demoraDias <= this.dias_emprestimo) {
      return 0.0;
    }
    return (
      (demoraDias - this.dias_emprestimo) *
      Math.ceil(this.livro.numeroPaginas / 100) *
      2.0
    );
  }
}

//Exportando a classe
module.exports = Emprestimo;

const p = new Pessoa("Nome", 123, "13/05/2007");
const l = new Livro("Nome", "dsa", 43, 3424, 432234);
const e = new Emprestimo(l, p, 3);
