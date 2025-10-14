const prompts = require("prompt-sync")();

export class Nota {
  public tom: string;
  public oitava: number;
  static tonsValidos = ["C", "D", "E", "F", "G", "A", "B"];

  constructor(tom: string, oitava: number) {
    if (!Nota.tonsValidos.includes(tom.toUpperCase())) {
      throw new Error(
        `Tom inválido: ${tom}. Apenas notas da escala de Dó Maior são permitidas: ${Nota.tonsValidos.join(
          ", "
        )}`
      );
    }

    this.tom = tom.toUpperCase();
    this.oitava = oitava;
  }
}

export class GerenciarNotas {
  public notas: Array<Nota>;

  constructor() {
    this.notas = [];
  }

  perguntarNota(): void {
    console.log("Bem-vindo ao gerenciador de notas.");
    try {
      const tom = prompts("Insira o tom da nota (ex: C, D, E)   ");
      const oitava = prompts("Insira a oitava da nota (ex: 4)   ");
      const novaNota = new Nota(tom, oitava);
      this.notas.push(novaNota);
      console.log(`Nota criada com sucesso!`);
    } catch (error: any) {
      console.error("Ocorreu um erro:\n", error.message);
    }
  }
}

const gerenciador = new GerenciarNotas();
gerenciador.perguntarNota();
