
//Importar a classe Livro
const Livro = require("./Livro");

//Classe para cadastrar informações sobre a venda/compra de um livro
class Compra {
    public livro: Livro;
    public preco: number;
    public vendedor: string;
    public data_venda: Date;
    public qtd: number;
    public precoUnitario: number;

    constructor (livro:Livro, preco:number, vendedor:string, data_venda:Date, qtd:number) {
    this.livro = livro;
    this.preco = preco;
    this.vendedor = vendedor;
    this.data_venda = data_venda;
    this.qtd = qtd;
    this.precoUnitario = this.calcularPrecoUnitario();
    this.livro.qtdEstoque += qtd;
    }

  //Função para calcular o preço unitário de cada livro
  calcularPrecoUnitario() {
    return this.preco / this.qtd;
  }

  //Função para imprimir as informações de uma venda/compra
  imprimirDetalhes() {
    console.log("---------------------");
    console.log(`Livro: ${this.livro.titulo}`);
    console.log(`Preço Total: R$ ${this.preco.toFixed(2)}`);
    console.log(`Vendedor: ${this.vendedor}`);
    console.log(`Data da Venda: ${this.data_venda}`);
    console.log(`Quantidade: ${this.qtd}`);
    console.log(`Preço Unitário: R$ ${this.precoUnitario.toFixed(2)}`);
    console.log("---------------------");
  }
}

module.exports = Compra;