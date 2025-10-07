// Classes podem ter propriedades públicas e privadas
// Propriedades públicas podem ser acessadas de qualquer lugar
// Propriedades privadas só podem ser acessadas dentro da própria classe
// Isso permite encapsulamento e proteção de dados sensíveis
class Pessoa {
    public nome: string;
    private senha: number

    constructor(nome:string,senha:number){
        this.nome = nome;
        this.senha = senha;
    }

    verificarSenha(senha:number):boolean {
        return this.senha === senha;
    }
}


const pessoa1 = new Pessoa("Arthur",1234);
console.log(pessoa1.nome); // Acesso permitido
//console.log(pessoa1.senha); // Acesso negado

//Mas ainda podemos acessar a senha indiretamente
console.log(pessoa1.verificarSenha(1234));


// Existe um shorthand (atalho) para declarar propriedades públicas e privadas diretamente no construtor
class ContaBancaria {
    constructor(public titular:string, private saldo:number, private senha:number){}
}


const conta1 = new ContaBancaria("Arthur",1000,1234);
console.log(conta1.titular); // Acesso permitido
//console.log(conta1.saldo); // Acesso negado
//console.log(conta1.senha); // Acesso negado