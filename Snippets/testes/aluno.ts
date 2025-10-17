class Aluno {
    nome: string;
    idade: number;
    notas: number[];
    aprovado: boolean;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
        this.notas = [];
        this.aprovado = false;
    }

    fazerProva() {
        this.notas.push(Math.floor(Math.random() * 11)); // Nota entre 0 e 10
    }

    calcularMedia(): number {
        const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return soma / this.notas.length;
    }
}

module.exports = Aluno;