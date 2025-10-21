//Classe que determina as informações para cadastro de clientes

class Pessoa {
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
  imprimirDetalhes() {
    console.log("---------------------");
    console.log(`Nome: ${this.nome}`);
    console.log(`CPF: ${this.cpf}`);
    console.log(`Data de Nascimento: ${this.dataNascimento}`);
    console.log("---------------------");
  }
}

//Exportando a classe
module.exports = Pessoa;
