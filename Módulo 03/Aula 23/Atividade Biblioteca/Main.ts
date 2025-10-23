//Importando o prompt-sync e classes necessárias
const pergunta = require("prompt-sync")();
import { Livro, Filme } from "./Obra";
import Pessoa, { Doador } from "./Pessoa";
import Compra from "./Compra";
import Emprestimo from "./Emprestimo";
import Doacao from "./Doacao";

//Array para armazenar os dados de cada classe
const livros: any[] = [];
const filmes: any[] = [];
const compras: any[] = [];
const emprestimos: any[] = [];
const doacoes: any[] = [];
const pessoas: any[] = [];
const doadores: any[] = [];

//Função para adicionar um novo livro no sistema
const adicionarLivro = () => {
  //Pedir com promptsync para o usuário preencher cada um dos dados para cadastro de um livro
  const titulo = pergunta("Título do livro: ");
  const autor = pergunta("Autor do livro: ");
  const ano = pergunta("Ano de publicação: ");
  const paginas = pergunta("Número de páginas: ");
  const estoque = pergunta("Qtd em estoque:");

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

//Functionção para adicionar um novo filme no sistema
const adicionarFilme = () => {
  //Pedir com promptsync para o usuário preencher cada um dos dados para cadastro de um filme
  const titulo = pergunta("Título do filme: ");
  const diretor = pergunta("Diretor do filme: ");
  const ano = pergunta("Ano de lançamento: ");
  const elenco = pergunta("Elenco (separado por vírgulas): ").split(",");
  const genero = pergunta("Gênero do filme: ");
  //Empurra os dados preencidos para dentro do array filme
  const filme = new Filme(titulo, diretor, ano, elenco, genero);
  filmes.push(filme);
  console.log("Filme adicionado com sucesso!");
};

//Função para listar todos os filmes cadastrados no sistema
const listarFilmes = () => {
  console.log("Lista de Filmes:");
  filmes.forEach((filme, index) => {
    console.log(`\nFilme ${index + 1}:`);
    filme.imprimirDetalhes();
  });
};

//Função para adicionar uma nova pessoa/cliente no sistema
const adicionarPessoa = () => {
  //Pedir com promptsync para o usuário preencher os dados para o cadastro de uma pessoa/cliente
  const nome = pergunta("Nome da pessoa: ");
  const cpf = pergunta("CPF da pessoa: ");
  const dataNascimento = pergunta("Data de nascimento da pessoa: ");

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

//Função para adicionar um novo doador no sistema
const adicionarDoador = () => {
  //Pedir com promptsync para o usuário preencher os dados para o cadastro de um doador
  const nome = pergunta("Nome do doador: ");
  const cpf = pergunta("CPF do doador: ");
  const dataNascimento = pergunta("Data de nascimento do doador: ");
  const qtdDoacoes = pergunta("Quantidade de doações realizadas: ");
  //Empurra os dados preenchidos para dentro do array doador
  const doador = new Doador(nome, cpf, dataNascimento, qtdDoacoes);
  doadores.push(doador);
  console.log("Doador adicionado com sucesso!");
};

//Função para listar todos os doadores cadastrados no sistema
const listarDoadores = () => {
  console.log("Lista de Doadores:");
  doadores.forEach((doador, index) => {
    console.log(`\nDoador ${index + 1}:`);
    doador.imprimirDetalhes();
  });
};

//Função para adicionar informações sobre uma compra no sistema
const adicionarCompra = () => {
  //Chama a função listarLivros para imprimir todos os livros cadastrados
  listarLivros();

  //Pedir com promptsync para o usuário preencher todas as informações para o cadastro de uma compra
  const livroIndex =
    parseInt(pergunta("Selecione o número do livro para compra: ")) - 1;
  const preco = parseFloat(pergunta("Preço total da compra: "));
  const vendedor = pergunta("Nome do vendedor: ");
  const dataVenda = pergunta("Data da venda: ");
  const qtd = parseInt(pergunta("Quantidade comprada: "));

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

//Função para cadastrar uma nova doação no sistema
const adicionarDoacao = () => {
  //Chama a função listarDoadores para imprimir todos os doadores cadastrados
  listarDoadores();
  //Pede com o prompt sync para selecionar o número do doador
  const doadorIndex = parseInt(pergunta("Selecione o número do doador: ")) - 1;
  //Pede com o prompt sync para informar a data da doação e a obra doada
  const dataDoacao = new Date(pergunta("Data da doação (AAAA-MM-DD): "));
  const obraDoada = pergunta("Obra doada: ");
  //Empurra os dados preenchidos para o array doacao e exibe uma mensagem confirmando o cadastro
  const doacao = new Doacao(dataDoacao, obraDoada, doadores[doadorIndex]);
  doacoes.push(doacao);
  console.log("Doação adicionada com sucesso!");
};

//Função para imprimir uma lista com os dados de todas as doações cadastradas no sistema
const listarDoacoes = () => {
  console.log("Lista de Doações:");
  doacoes.forEach((doacao, index) => {
    console.log(`\nDoação ${index + 1}:`);
    doacao.imprimirDetalhes();
  });
};

//Função para cadastrar o empréstimo de um livro no sistema
const adicionarEmprestimo = () => {
  //Opções para o usuário escolher se o empréstimo é de um livro ou filme
  console.log("Tipo de obra para empréstimo:");
  console.log("1. Livro");
  console.log("2. Filme");
  const tipo = pergunta("Escolha (1/2): ");
  //Variável para armazenar a obra selecionada
  let obra;
  //Verifica se o usuário escolheu a opção livro
  if (tipo === "1") {
    // Avisa ao usuário se não existir `livros` disponíveis
    if (!Array.isArray(livros) || livros.length === 0) {
      console.log("Nenhum livro disponível para empréstimo.");
      return;
    }
    //Imprime a lista de livros cadastrados e pergunta qual livro deseja pegar emprestado
    listarLivros();
    const livroIndex =
      parseInt(pergunta("Selecione o número do livro para empréstimo: "), 10) -
      1;
    obra = livros[livroIndex];
    //Verifica se escolheu a opção filme
  } else if (tipo === "2") {
    // Avisa ao usuário se não existir `filmes` disponíveis
    if (
      typeof filmes === "undefined" ||
      !Array.isArray(filmes) ||
      filmes.length === 0
    ) {
      console.log("Nenhum filme disponível para empréstimo.");
      return;
    }
    //Imprime a lista de filmes cadastrados e pergunta qual filme deseja pegar emprestado
    if (typeof listarFilmes === "function") {
      listarFilmes();
    }
    const filmeIndex =
      parseInt(pergunta("Selecione o número do filme para empréstimo: "), 10) -
      1;
    obra = filmes[filmeIndex];
    //Caso não escolha nenhuma das opções listadas, imprime mensagem de opção inválida e retorna
  } else {
    console.log("Opção inválida.");
    return;
  }
  //Verifica se existem pessoas cadastradas para realizar o empréstimo
  if (!Array.isArray(pessoas) || pessoas.length === 0) {
    console.log("Nenhuma pessoa cadastrada para realizar o empréstimo.");
    return;
  }
  //Imprime a lista de pessoas cadastradas e pergunta qual pessoa está pegando o empréstimo
  listarPessoas();
  const pessoaIndex =
    parseInt(
      pergunta("Selecione o número da pessoa que está pegando o empréstimo: "),
      10
    ) - 1;
  //Pede com o prompt sync para informar o número de dias do empréstimo
  const diasEmprestimo = parseInt(
    pergunta("Número de dias para o empréstimo: "),
    10
  );
  //Empurra os dados preenchidos para o array emprestimo e exibe uma mensagem confirmando o cadastro
  const emprestimo = new Emprestimo(obra, pessoas[pessoaIndex], diasEmprestimo);
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
const devolverEmprestimo = () => {
  //Chama a função listarEmprestimos para imprimir todos os empréstimos cadastrados
  listarEmprestimos();

  //Pede com o prompt sync para informar o número do empréstimo e quantos dias demorou para devolver
  const emprestimoIndex =
    parseInt(pergunta("Selecione o número do empréstimo para devolução: ")) - 1;
  const demoraDias = parseInt(
    pergunta("Número de dias que demorou para devolver: ")
  );

  //Atualizar informações no cadastro de empréstimos e imprimir qual a multa a ser paga caso tenha atraso na devolução
  const emprestimo = emprestimos[emprestimoIndex];
  console.log(`Multa a ser paga: ${emprestimo.calcularMulta(demoraDias)}`);
};

//Menu listando todas ações possíveis
const menu = () => {
  console.log("\nMenu:");
  console.log("1.  Adicionar Livro");
  console.log("2.  Listar Livros");
  console.log("3.  Adicionar Filme");
  console.log("4.  Listar Filmes");
  console.log("5.  Adicionar Pessoa");
  console.log("6.  Listar Pessoas");
  console.log("7.  Adicionar Doador");
  console.log("8.  Listar Doadores");
  console.log("9.  Adicionar Compra");
  console.log("10. Listar Compras");
  console.log("11. Adicionar Doação");
  console.log("12. Listar Doações");
  console.log("13. Adicionar Empréstimo");
  console.log("14. Listar Empréstimos");
  console.log("15. Devolução de Empréstimo");
  console.log("0.  Sair");
  //Pede com prompt sync para que o usuário escolha uma opção
  const escolha = pergunta("Escolha uma opção: ");

  //Chama cada função especifica com base na escolha do usuário
  switch (escolha) {
    case "1":
      adicionarLivro();
      break;
    case "2":
      listarLivros();
      break;
    case "3":
      adicionarFilme();
      break;
    case "4":
      listarFilmes();
      break;
    case "5":
      adicionarPessoa();
      break;
    case "6":
      listarPessoas();
      break;
    case "7":
      adicionarDoador();
      break;
    case "8":
      listarDoadores();
      break;
    case "9":
      adicionarCompra();
      break;
    case "10":
      listarCompras();
      break;
    case "11":
      adicionarDoacao();
      break;
    case "12":
      listarDoacoes();
      break;
    case "13":
      adicionarEmprestimo();
      break;
    case "14":
      listarEmprestimos();
      break;
    case "15":
      devolverEmprestimo();
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

//Confirmação se o usuário realmente deseja sair do sistema
while (true) {
  menu();
  const continuar = pergunta("Deseja sair do sistema? (s/n): ");
  //Caso queria sair, finaliza o sistema, caso queira continuar, chama a função menu novamente
  if (continuar.toLowerCase() == "s") {
    break;
  }
}
