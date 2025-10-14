// Podemos lançar nossas próprias exceções usando a palavra-chave throw
function dividir(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Divisão por zero não é permitida");
    }
    return a / b;
}

try {
    console.log(dividir(10, 0));
} catch (error: any) {
    console.log("Ocorreu um erro:\n", error.message);
}


//Podemos escolher que subtipo de erro queremos lançar
function acessarElementoArray(arr: any[], index: number): any {
    if (index < 0 || index >= arr.length) {
        throw new RangeError("Índice fora dos limites do array");
    } else if (!Number.isInteger(index)) {
        throw new TypeError("Índice deve ser um número inteiro");
    }
    return arr[index];
}

const meuArray = [10, 20, 30];

function testarAcessoArray(arr: any[], index: number) {
    try {
        console.log(acessarElementoArray(arr, index));
    } catch (error: any) {
        // Podemos também tratar diferentes tipos de erro de forma diferente
        if (error instanceof RangeError) {
            console.log("Erro de intervalo:\n", error.message);
        } else if (error instanceof TypeError) {
            console.log("Erro de tipo:\n", error.message);
        }
    }
}

testarAcessoArray(meuArray, 5); // Índice fora dos limites do array
testarAcessoArray(meuArray, 1.2); // Índice deve ser um número inteiro
testarAcessoArray(meuArray, 1); // Acesso válido