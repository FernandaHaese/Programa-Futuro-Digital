// Podemos também criar nossas próprias classes de exceção estendendo a classe Error
class MinhaExcecao extends Error {
    constructor(mensagem: string) {
        super(mensagem);
        this.name = "MinhaExcecao";
    }
}

// E podemos lançar nossas exceções personalizadas
function verificarIdade(idade: number) {
    if (idade < 0) {
        throw new MinhaExcecao("Idade não pode ser negativa");
    } else if (idade < 18) {
        throw new MinhaExcecao("Menor de idade");
    }
    console.log("Idade válida");
}

try {
    verificarIdade(-5);
} catch (error: any) {
    // Verificamos se o erro é do tipo da nossa exceção personalizada
    if (error instanceof MinhaExcecao) {
        console.log("Erro personalizado capturado:\n", error.message);
    } else {
        console.log("Outro tipo de erro:\n", error.message);
    }
}