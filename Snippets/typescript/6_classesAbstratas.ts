//Uma classe abstrata é uma classe que não pode ser instanciada diretamente.
//Ela serve como um modelo para outras classes que irão herdar dela.

    

abstract class Animal {
    //Classes abstratas podem conter métodos abstratos, que são métodos declarados, mas não implementados na classe abstrata.
    //As subclasses que herdam da classe abstrata são obrigadas a implementar esses métodos abstratos.
    abstract fazerSom(): void;

    mover(): void {
        console.log("O animal se moveu");
    }
}


class Cachorro extends Animal {
    fazerSom(): void {
        console.log("O cachorro latiu");
    }
}

class Gato extends Animal {
    fazerSom(): void {
        console.log("O gato miou");
    }
}   

const cachorro = new Cachorro();
cachorro.fazerSom();
cachorro.mover();

const gato = new Gato();    
gato.fazerSom();
gato.mover();