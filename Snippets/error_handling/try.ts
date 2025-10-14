// Resulta em ReferenceError (tipo de runtime error)
//console.log(variavelInexistente);

// Com o try catch, podemos capturar o erro e tratá-lo
try {
    // Todos os erros que ocorrerem aqui dentro do bloco try serão capturados pelo catch
    console.log();
} catch (error: any) {
    // Aqui dentro do bloco catch podemos tratar o erro como quisermos
    console.log("Ocorreu um erro:\n", error.message);
}
console.log("Execução continua normalmente...");


// Adicionando o finally, que é executado sempre, independente se houve erro ou não
try {
    console.log();
} catch (error: any) {
    console.log("Ocorreu um erro:\n", error.message);
} finally {
    console.log("Bloco finally executado");
}