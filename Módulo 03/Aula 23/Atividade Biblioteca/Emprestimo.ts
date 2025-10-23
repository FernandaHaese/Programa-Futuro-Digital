//Importar as classes de livro e pessoa
import Obra, { Livro, Filme } from "./Obra";
import Pessoa from "./Pessoa";

//Classe que determina as informações para realizar um empréstimo
export default class Emprestimo {
  public obra: Obra;
  public pessoa: Pessoa;
  public dias_emprestimo: number;

  //Determina todas as informações para um empréstimo
  constructor(obra: Obra, pessoa: Pessoa, dias_emprestimo: number) {
    this.obra = obra;
    this.pessoa = pessoa;
    this.dias_emprestimo = dias_emprestimo;
    // Só decrementa estoque se for Livro (Filme não tem qtdEstoque na sua classe)
    if (this.obra instanceof Livro) {
      this.obra.qtdEstoque -= 1;
    }
  }

  //Função para imprimir as informações sobre o empréstimo cadastrado
  imprimirDetalhes() {
    console.log("---------------------");
    console.log(`Título: ${this.obra.titulo}`);
    console.log(`Pessoa: ${this.pessoa.nome}`);
    console.log(`Dias de Empréstimo: ${this.dias_emprestimo}`);
    if (this.obra instanceof Livro) {
      console.log(`Quantidade em Estoque: ${this.obra.qtdEstoque}`);
    }
    console.log("---------------------");
  }

  //Função para calcular taxa de multa por dias de atraso ao devolver livros emprestados
  calcularMulta(demoraDias: number): number {
    if (demoraDias <= this.dias_emprestimo) return 0.0;
    const atraso = demoraDias - this.dias_emprestimo;

    if (this.obra instanceof Livro) {
      // mesma lógica anterior para livros
      return atraso * Math.ceil(this.obra.numeroPaginas / 100) * 2.0;
    }

    return 0.0;
  }
}
