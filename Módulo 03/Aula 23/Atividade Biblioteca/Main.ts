//Importando prompt-sync e classes livro, compra, emprestimo e pessoa
const prompt = require("prompt-sync")();
const Livro = require("./Livro");
const Compra = require("./Compra");
const Emprestimo = require("./Emprestimo");
const Pessoa = require("./Pessoa");

const perguntar = (pergunta: string): string => {
  const resposta = prompt(pergunta);
  if (resposta === null) {
    return "";
  }
  return resposta;
};

//Array para armazenar os dados armazenados de cada classe
const livros = [];
const compras = [];
const emprestimos = [];
const pessoas = [];

//Função para adicionar um novo livro no sistema
const adicionarLivro = () => {
  //Pedir com promptsync para o usuário preencher cada um dos dados para cadastro de um livro
  const titulo = perguntar("Título do livro: ");
  const autor = perguntar("Autor do livro: ");
  const ano = perguntar("Ano de publicação: ");
  const paginas = perguntar("Número de páginas: ");
  const estoque = perguntar("Qtd em estoque:");

  //Empurra os dados preencidos para dentro do array livro
  const livro = new Livro(titulo, autor, ano, paginas, estoque);
  livros.push(livro);
  console.log("Livro adicionado com sucesso!");
};

//Função para imprimir uma lista com todos os livros cadastrados
const listarLivros = () => {
  console.log("Lista de Livros:");
  livros.forEach((livro, index) => {
    console.log(`\nLivro ${index + 1}:`);
    livro.imprimirDetalhes();
  });
};

//Função para adicionar uma nova pessoa/cliente no sistema
const adicionarPessoa = () => {
  //Pedir com promptsync para o usuário preencher os dados para o cadastro de uma pessoa/cliente
  const nome = perguntar("Nome da pessoa: ");
  const cpf = perguntar("CPF da pessoa: ");
  const dataNascimento = perguntar("Data de nascimento da pessoa: ");

  //Empurra os dados preenchidos para dentro do array pessoa
  const pessoa = new Pessoa(nome, cpf, dataNascimento);
  pessoas.push(pessoa);
  console.log("Pessoa adicionada com sucesso!");
};

//Função para listar todas as pessoas/clientes cadastrados
const listarPessoas = () => {
  console.log("Lista de Pessoas:");
  pessoas.forEach((pessoa, index) => {
    console.log(`\nPessoa ${index + 1}:`);
    pessoa.imprimirDetalhes();
  });
};

//Função para adicionar informações sobre uma compra no sistema
const adicionarCompra = () => {
  //Chama a função listarLivros para imprimir todos os livros cadastrados
  listarLivros();

  //Pedir com promptsync para o usuário preencher todas as informações para o cadastro de uma compra
  const livroIndex =
    parseInt(perguntar("Selecione o número do livro para compra: ")) - 1;
  const preco = parseFloat(perguntar("Preço total da compra: "));
  const vendedor = perguntar("Nome do vendedor: ");
  const dataVenda = perguntar("Data da venda: ");
  const qtd = parseInt(perguntar("Quantidade comprada: "));

  //Empurra os dados preenchidos para dentro do array compra
  const compra = new Compra(
    livros[livroIndex],
    preco,
    vendedor,
    dataVenda,
    qtd
  );
  compras.push(compra);
  console.log("Compra adicionada com sucesso!");
};

//Função para imprimir uma lista com os dados de todas as compras cadastradas
const listarCompras = () => {
  console.log("Lista de Compras:");
  compras.forEach((compra, index) => {
    console.log(`\nCompra ${index + 1}:`);
    compra.imprimirDetalhes();
  });
};

//Função para cadastrar o empréstimo de um livro no sistema
const adicionarEmprestimo = () => {
  //Chama a função listarLivros para imprimir todos os livros cadastrados
  listarLivros();
  //Pede com o prompt sync para selecionar o número do livro para empréstimo
  const livroIndex =
    parseInt(perguntar("Selecione o número do livro para empréstimo: ")) - 1;
  //Chama a função listarPessoas para imprimir todos as pessoas/clientes cadastrados
  listarPessoas();
  //Pede com o prompt sync para informar o número da pessoa/cliente que irá realizar o empréstimo e quantos dias para o empréstimo
  const pessoaIndex =
    parseInt(
      perguntar("Selecione o número da pessoa que está pegando o empréstimo: ")
    ) - 1;
  const diasEmprestimo = parseInt(perguntar("Número de dias para o empréstimo: "));

  //Empurra os dados preenchidos para o array emprestimo e exibe uma mensagem confirmando o cadastro
  const emprestimo = new Emprestimo(
    livros[livroIndex],
    pessoas[pessoaIndex],
    diasEmprestimo
  );
  emprestimos.push(emprestimo);
  console.log("Empréstimo adicionado com sucesso!");
};

//Função para imprimir uma lista com os dados de todos os empréstimos cadastrados no sistema
const listarEmprestimos = () => {
  console.log("Lista de Empréstimos:");
  emprestimos.forEach((emprestimo, index) => {
    console.log(`\nEmpréstimo ${index + 1}:`);
    emprestimo.imprimirDetalhes();
  });
};

//Função para atualizar a devolução de um dos empréstimos realizados no sistema
const devolverLivro = () => {
  //Chama a função listarEmprestimos para imprimir todos os empréstimos cadastrados
  listarEmprestimos();

  //Pede com o prompt sync para informar o número do empréstimo e quantos dias demorou para devolver
  const emprestimoIndex =
    parseInt(perguntar("Selecione o número do empréstimo para devolução: ")) - 1;
  const demoraDias = parseInt(
    perguntar("Número de dias que demorou para devolver: ")
  );

  //Atualizar informações no cadastro de empréstimos e imprimir qual a multa a ser paga caso tenha atraso na devolução
  const emprestimo = emprestimos[emprestimoIndex];
  console.log(`Multa a ser paga: ${emprestimo.calcularMulta(demoraDias)}`);
};

//Menu listando todas ações possíveis
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
  //Pede com prompt sync para que o usuário escolha uma opção
  const escolha = perguntar("Escolha uma opção: ");

  //Chama cada função especifica com base na escolha do usuário
  switch (escolha) {
    case "1":
      adicionarLivro();
      break;
    case "2":
      listarLivros();
      break;
    case "3":
      adicionarPessoa();
      break;
    case "4":
      listarPessoas();
      break;
    case "5":
      adicionarCompra();
      break;
    case "6":
      listarCompras();
      break;
    case "7":
      adicionarEmprestimo();
      break;
    case "8":
      listarEmprestimos();
      break;
    case "9":
      devolverLivro();
      break;
    case "0":
      console.log("Saindo...");
      break;
    //Caso não seja nenhuma das opções listadas, imprime mensagem de opção invalida e chama a função menu novamente
    default:
      console.log("Opção inválida!");
      menu();
  }
};

//Confirmação se o usuário realmente deseja sair do sistema, usando while(true) / if
while (true) {
  menu();
  const continuar = perguntar("Deseja sair do sistema? (s/n): ");
  //Caso queria sair, finaliza o sistema, caso queira continuar, chama a função menu novamente
  if (continuar.toLowerCase() == "s") {
    break;
  }
}
