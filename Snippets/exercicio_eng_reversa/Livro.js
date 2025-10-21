class Livro {
    constructor(titulo, autor, anoPublicacao, numeroPaginas, qtdEstoque) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.numeroPaginas = numeroPaginas;
        this.qtdEstoque = qtdEstoque;
    }

    imprimirDetalhes() {
        console.log("---------------------");
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Ano de Publicação: ${this.anoPublicacao}`);
        console.log(`Número de Páginas: ${this.numeroPaginas}`);
        console.log(`Quantidade em Estoque: ${this.qtdEstoque}`);
        console.log("---------------------");
    }

}

module.exports = Livro;