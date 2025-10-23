import Doador from "./Pessoa";

export default class Doacao {
  public dataDoacao: Date;
  public obraDoada: string;
  public doador: Doador;

  constructor(dataDoacao: Date, obraDoada: string, Doador: Doador) {
    this.dataDoacao = dataDoacao;
    this.obraDoada = obraDoada;
    this.doador = Doador;
  }

  imprimirDetalhes() {
    console.log("---------------------");
    console.log(`Data da Doação: ${this.dataDoacao}`);
    console.log(`Obra Doada: ${this.obraDoada}`);
    console.log(`Doador: ${this.doador.nome}`);
    console.log("---------------------");
  }
}
