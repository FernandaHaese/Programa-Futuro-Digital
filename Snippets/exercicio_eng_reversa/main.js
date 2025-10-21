const prompt = require('prompt-sync')();
const Livro = require('./Livro');
const Compra = require('./Compra');
const Emprestimo = require('./Emprestimo');
const Pessoa = require('./Pessoa');


const livros = [];
const compras = [];
const emprestimos = [];
const pessoas = [];

const adicionarLivro = () => {
    const titulo = prompt('Título do livro: ');
    const autor = prompt('Autor do livro: ');
    const ano = prompt('Ano de publicação: ');
    const paginas = prompt('Número de páginas: ');
    const estoque = prompt('Qtd em estoque:');

    const livro = new Livro(titulo, autor, ano, paginas, estoque);
    livros.push(livro);
    console.log('Livro adicionado com sucesso!');
};

const listarLivros = () => {
    console.log("Lista de Livros:");
    livros.forEach((livro, index) => {
        console.log(`\nLivro ${index + 1}:`);
        livro.imprimirDetalhes();
    });
}

const adicionarPessoa = () => {
    const nome = prompt('Nome da pessoa: ');
    const cpf = prompt('CPF da pessoa: ');
    const dataNascimento = prompt('Data de nascimento da pessoa: ');

    const pessoa = new Pessoa(nome, cpf, dataNascimento);
    pessoas.push(pessoa);
    console.log('Pessoa adicionada com sucesso!');
};


const listarPessoas = () => {
    console.log("Lista de Pessoas:");
    pessoas.forEach((pessoa, index) => {
        console.log(`\nPessoa ${index + 1}:`);
        pessoa.imprimirDetalhes();
    });
};

const adicionarCompra = () => {
    listarLivros();
    const livroIndex = parseInt(prompt('Selecione o número do livro para compra: ')) - 1;
    const preco = parseFloat(prompt('Preço total da compra: '));
    const vendedor = prompt('Nome do vendedor: ');
    const dataVenda = prompt('Data da venda: ');
    const qtd = parseInt(prompt('Quantidade comprada: '));

    const compra = new Compra(livros[livroIndex], preco, vendedor, dataVenda, qtd);
    compras.push(compra);
    console.log('Compra adicionada com sucesso!');
};

const listarCompras = () => {
    console.log("Lista de Compras:");
    compras.forEach((compra, index) => {
        console.log(`\nCompra ${index + 1}:`);
        compra.imprimirDetalhes();
    });
};


const adicionarEmprestimo = () => {
    listarLivros();
    const livroIndex = parseInt(prompt('Selecione o número do livro para empréstimo: ')) - 1;
    listarPessoas();
    const pessoaIndex = parseInt(prompt('Selecione o número da pessoa que está pegando o empréstimo: ')) - 1;
    const diasEmprestimo = parseInt(prompt('Número de dias para o empréstimo: '));

    const emprestimo = new Emprestimo(livros[livroIndex], pessoas[pessoaIndex], diasEmprestimo);
    emprestimos.push(emprestimo);
    console.log('Empréstimo adicionado com sucesso!');
};

const listarEmprestimos = () => {
    console.log("Lista de Empréstimos:");
    emprestimos.forEach((emprestimo, index) => {
        console.log(`\nEmpréstimo ${index + 1}:`);
        emprestimo.imprimirDetalhes();
    });
};

const devolverLivro = () => {
    listarEmprestimos();
    const emprestimoIndex = parseInt(prompt('Selecione o número do empréstimo para devolução: ')) - 1;
    const demoraDias = parseInt(prompt('Número de dias que demorou para devolver: '));

    const emprestimo = emprestimos[emprestimoIndex];
    console.log(`Multa a ser paga: ${emprestimo.calcularMulta(demoraDias)}`);
};





const menu = () => {
    console.log("\nMenu:");
    console.log("1. Adicionar Livro");
    console.log("2. Listar Livros");
    console.log("3. Adicionar Pessoa");
    console.log("4. Listar Pessoas");
    console.log("5. Adicionar Compra");
    console.log("6. Listar Compras");
    console.log("7. Adicionar Empréstimo");
    console.log("8. Listar Empréstimos");
    console.log("9. Devolver Livro");
    console.log("0. Sair");
    const escolha = prompt('Escolha uma opção: ');

    switch (escolha) {
        case '1':
            adicionarLivro();
            break;
        case '2':
            listarLivros();
            break;
        case '3':
            adicionarPessoa();
            break;
        case '4':
            listarPessoas();
            break;
        case '5':
            adicionarCompra();
            break;
        case '6':
            listarCompras();
            break;
        case '7':
            adicionarEmprestimo();
            break;
        case '8':
            listarEmprestimos();
            break;
        case '9':
            devolverLivro();
            break;
        case '0':
            console.log('Saindo...');
            break;
        default:
            console.log('Opção inválida!');
            menu();
    }
};


while (true) {
    menu();
    const continuar = prompt('Deseja sair do sistema? (s/n): ');
    if (continuar.toLowerCase() == 's') {
        break;
    }  
}

