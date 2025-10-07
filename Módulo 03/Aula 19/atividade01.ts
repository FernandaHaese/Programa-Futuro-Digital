class GuardarInformacao {
  protected info: string;
  constructor(info: string) {
    this.info = info;
  }

  guardarInfo(info: string): void {
    this.info = info;
  }

  salvarInfo(info: string): void {
    console.log(`Informação: ${this.info}`);
  }
}

class GuardarSegredo extends GuardarInformacao {
  protected senha: number;

  constructor(info: string, senha: number) {
    super(info);
    this.senha = senha;
  }

  guardarInfo(info: string, senha: number): void {
    if (this.senha == senha) {
      this.info = info;
    }
  }

  salvarInfo(info: string, senha: number): void {
    if (this.senha == senha) {
      console.log(`Informação: ${this.info}`);
    } else {
      console.log("Senha incorreta, tente novamente");
    }
  }
}

const segredo = new GuardarSegredo("Fernanda", 12345);
console.log(segredo.guardarInfo);
console.log(segredo.salvarInfo);
