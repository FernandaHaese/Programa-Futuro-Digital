class GerenciadorFormas {
  public formas: Array<Forma>;

  constructor(formas: Array<Forma>) {
    this.formas = formas;
  }

  calcularSomaAreas(): number {
    let acc = 0;
    this.formas.forEach((formas) => {
      acc += formas.calcularArea();
    });
    return acc;
  }

  imprimirFormas(): void {
    this.formas.forEach((forma) => {
      console.log(
        `Forma com ${forma.lados} lados e área ${forma.calcularArea()}`
      );
    });
  }
}

abstract class Forma {
  public lados: number;

  constructor(lados: number) {
    this.lados = lados;
  }

  abstract calcularArea(): number;
}

class Retangulo extends Forma {
  public altura: number;
  public comprimento: number;

  constructor(lados: number, altura: number, comprimento: number) {
    super(lados);
    this.altura = altura;
    this.comprimento = comprimento;
  }

  calcularArea(): number {
    return this.comprimento * this.altura;
  }
}

class Triangulo extends Forma {
  public altura: number;
  public comprimento: number;

  constructor(lados: number, altura: number, comprimento: number) {
    super(lados);
    this.altura = altura;
    this.comprimento = comprimento;
  }

  calcularArea(): number {
    return (this.comprimento * this.altura) / 2;
  }
}

class Circulo extends Forma {
  public raio: number;

  constructor(lados: number, raio: number) {
    super(lados);
    this.raio = raio;
  }

  calcularArea(): number {
    return Math.PI * this.raio * this.raio;
  }
}

const formaRetangulo = new Retangulo(4, 10, 5);
const formaTriangulo = new Triangulo(3, 3, 9);
const formaCirculo = new Circulo(0, 5);

formaRetangulo.calcularArea();
formaTriangulo.calcularArea();
formaCirculo.calcularArea();

const gerFormas = new GerenciadorFormas([
  formaCirculo,
  formaRetangulo,
  formaTriangulo,
]);

gerFormas.imprimirFormas();
