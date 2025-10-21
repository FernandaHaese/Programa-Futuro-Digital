//Classe que determina as informações para realizar um empréstimo

class Emprestimo {
    //Determina todas as informações para um empréstimo
    constructor(livro, pessoa, dias_emprestimo) {
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
    calcularMulta(demoraDias) {
        if (demoraDias <= this.dias_emprestimo) {
            return 0.0;
        }
        return (demoraDias - this.dias_emprestimo) * Math.ceil(this.livro.numeroPaginas / 100) * 2.0;
    } 

}

//Exportando a classe
module.exports = Emprestimo;