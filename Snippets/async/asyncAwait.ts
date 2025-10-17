
// Com async/await, podemos escrever código assíncrono de maneira mais síncrona e legível.
// A palavra-chave 'async' é usada para declarar uma função assíncrona, que sempre retorna uma Promise.
// A palavra-chave 'await' só pode ser usada dentro de funções declaradas com 'async' e faz a função esperar pela resolução de uma Promise.

import fs from 'fs/promises';

// Função assíncrona para ler um arquivo
async function lerArquivo(caminho: string): Promise<string> {
    try {
        const dados = await fs.readFile(caminho, 'utf-8');
        return dados;
    } catch (erro) {
        throw new Error(`Erro ao ler o arquivo: ${erro}`);
    }
}

// Assim, posso resolver a promise diretamente
lerArquivo('exemplo.txt')
    .then(conteudo => console.log(conteudo))
    .catch(erro => console.error(erro));

// Ou usar async/await dentro de outra função assíncrona
async function imprimirConteudoArquivo() {
    try {
        const conteudo = await lerArquivo('exemplo.txt');
        console.log(conteudo);
    } catch (erro) {
        console.error(erro);
    }
}



imprimirConteudoArquivo();