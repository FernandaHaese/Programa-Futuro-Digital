//Classe que determina as informações para cadastro de clientes
export default class Pessoa {
  //Determina as informações para cadastrar um cliente
  public nome: string;
  public cpf: number;
  public dataNascimento: Date;
  constructor(nome: string, cpf: number, dataNascimento: Date) {
    this.nome = nome;
    this.cpf = cpf;
    this.dataNascimento = dataNascimento;
  }

  //Função para imprimir as informações de cadastro de um cliente
  imprimirDetalhes(): void {
    console.log("---------------------");
    console.log(`Nome: ${this.nome}`);
    console.log(`CPF: ${this.cpf}`);
    console.log(`Data de Nascimento: ${this.dataNascimento}`);
    console.log("---------------------");
  }
}

//Classe que determina as informações para cadastro de doadores, que herda da classe Pessoa
export class Doador extends Pessoa {
  //Determina as informações para cadastrar um doador
  public qtdDoacoes: number;
  constructor(
    nome: string,
    cpf: number,
    dataNascimento: Date,
    qtdDoacoes: number
  ) {
    super(nome, cpf, dataNascimento);
    this.qtdDoacoes = qtdDoacoes;
  }
  //Função para imprimir as informações de cadastro de um doador
  imprimirDetalhes(): void {
    super.imprimirDetalhes();
    console.log(`Quantidade de Doações: ${this.qtdDoacoes}`);
    console.log("---------------------");
  }
}
