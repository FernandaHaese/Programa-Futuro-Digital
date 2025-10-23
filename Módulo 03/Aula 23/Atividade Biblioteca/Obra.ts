export default abstract class Obra {
  public titulo: string;
  public anoLancamento: number;
  public autorOuDiretor: string;

  constructor(titulo: string, anoLancamento: number, autorOuDiretor: string) {
    this.titulo = titulo;
    this.anoLancamento = anoLancamento;
    this.autorOuDiretor = autorOuDiretor;
  }

  abstract imprimirDetalhes(): void;
}

export class Livro extends Obra {
  public numeroPaginas: number;
  public qtdEstoque: number;
  constructor(
    titulo: string,
    anoLancamento: number,
    autorOuDiretor: string,
    numeroPaginas: number,
    qtdEstoque: number
  ) {
    super(titulo, anoLancamento, autorOuDiretor);
    this.numeroPaginas = numeroPaginas;
    this.qtdEstoque = qtdEstoque;
  }
  imprimirDetalhes(): void {
    console.log("---------------------");
    console.log(`Título: ${this.titulo}`);
    console.log(`Autor: ${this.autorOuDiretor}`);
    console.log(`Ano de Publicação: ${this.anoLancamento}`);
    console.log(`Número de Páginas: ${this.numeroPaginas}`);
    console.log(`Quantidade em Estoque: ${this.qtdEstoque}`);
    console.log("---------------------");
  }
}

export class Filme extends Obra {
  public elenco: string[];
  public genero: string;
  constructor(
    titulo: string,
    anoLancamento: number,
    autorOuDiretor: string,
    elenco: string[],
    genero: string
  ) {
    super(titulo, anoLancamento, autorOuDiretor);
    this.elenco = elenco;
    this.genero = genero;
  }

  imprimirDetalhes(): void {
    console.log("---------------------");
    console.log(`Título: ${this.titulo}`);
    console.log(`Diretor: ${this.autorOuDiretor}`);
    console.log(`Data de Lançamento: ${this.anoLancamento}`);
    console.log(`Elenco: ${this.elenco.join(", ")}`);
    console.log(`Gênero: ${this.genero}`);
    console.log("---------------------");
  }
}
