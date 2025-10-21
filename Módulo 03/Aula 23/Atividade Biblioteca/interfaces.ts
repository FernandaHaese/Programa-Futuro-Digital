interface Livro {
  titulo: string;
  autor: string;
  anoPublicacao: number;
  numeroPaginas: number;
  qtdEstoque: number;
}

interface Compra {
  livro: Livro;
  preco: number;
  vendedor: string;
  data_venda: Date;
  qtd: number;
  precoUnitario: number;
}

interface Emprestimo {

}

interface Pessoa {
    
}
