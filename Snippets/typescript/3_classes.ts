class Produto {
    nome: string;
    preco:number;
    qtd:number;

    constructor(nome:string,preco:number){
        this.nome = nome;
        this.preco = preco;
        this.qtd = 0;
    }

    comprarEstoque(qtdCompra:number):void {
        this.qtd+=qtdCompra;
    }

    calcularImposto():number {
        return this.preco*0.05;
    }

    imprimirImposto():void{
        console.log(`Tarifa tributária sobre ${this.nome}: R\$ ${this.calcularImposto()}`)
    }

};

const arroz = new Produto("Arroz",5.99);
const feijao = new Produto("Feijão",7.99);

console.log(arroz.preco);
console.log(feijao.qtd);


arroz.comprarEstoque(10);
arroz.imprimirImposto();

feijao.imprimirImposto();