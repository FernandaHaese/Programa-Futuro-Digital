class Livro {
  //Determina todas as informações para cadastrar um livro
  public titulo: string;
  public autor: string;
  public anoPublicacao: number;
  public numeroPaginas: number;
  public qtdEstoque: number;
  constructor(
    titulo: string,
    autor: string,
    anoPublicacao: number,
    numeroPaginas: number,
    qtdEstoque: number
  ) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
    this.numeroPaginas = numeroPaginas;
    this.qtdEstoque = qtdEstoque;
  }

  //Função que imprimi todas informações de um livro cadastrado
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

//Exportando a classe
module.exports = Livro;
