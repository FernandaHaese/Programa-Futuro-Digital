class Conta {
    public titular: string;
    public numero: string;
    protected saldo: number;
    protected senha: number;  // Protected permite acesso em subclasses, mas não fora delas

    constructor(titular: string, numero: string,senha:number) {
        this.titular = titular;
        this.senha = senha;
        this.numero = numero;
        this.saldo = 0;
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }

    consultarSaldo(senha: number): void {
        if(this.senha === senha){
            console.log(`Saldo: ${this.saldo}`);
        }
    }

    gastar(valor: number) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente");
        }
    }
}

// ContaCredito herda de Conta, então ela tem todas as propriedades e métodos de Conta
class ContaCredito extends Conta {
    private limite: number;

    constructor(titular: string, numero: string, senha: number, limite: number) {
        super(titular, numero, senha);  // Chama o construtor da classe base (Conta)
        this.limite = limite;
    }

    consultarSaldo(senha: number): void { //Posso sobrescrever métodos da classe base, para alterar o comportamento para as necessidades da subclasse
        if (this.senha === senha) {
            console.log(`Saldo: ${this.saldo} | Limite: ${this.limite}`);
        }
    } 

    gastar(valor: number): void {
        if (this.saldo + this.limite >= valor) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente, mesmo com o limite");
        }
    }
}


//Assim, chamando os mesmos métodos, o comportamento muda dependendo do tipo da conta
console.log("=== Conta Corrente ===");
const contaCorrente = new Conta("Arthur","1234-5",1234);
contaCorrente.depositar(1000);
contaCorrente.consultarSaldo(1234);
contaCorrente.gastar(900);
contaCorrente.consultarSaldo(1234);
contaCorrente.gastar(300);
contaCorrente.consultarSaldo(1234);

console.log("=== Conta Credito ===");
const contaCredito = new ContaCredito("Arthur","1234-5",1234,500);
contaCredito.depositar(1000);
contaCredito.consultarSaldo(1234);
contaCredito.gastar(900);
contaCredito.consultarSaldo(1234);
contaCredito.gastar(300);
contaCredito.consultarSaldo(1234);
