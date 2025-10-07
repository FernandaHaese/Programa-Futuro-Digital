//Classe para criar um usuário
class Usuario {
  public nome: string;
  protected email: string;
  private senha: number;

  constructor(nome: string, email: string, senha: number) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

  criarUsuario(nome: string, email: string, senha: number): void {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

  publicarUsuario(nome: string, email: string, senha: number): void {
    console.log("Usuário criado com sucesso!");
    console.log("\n---------------------------");
    console.log(`Nome: ${this.nome}\n`);
    console.log(`Email: ${this.email}\n`);
    console.log(`Senha: ${this.senha}\n`);
  }
}

//Classe abstrata para criar algum conteúdo
abstract class Conteudo {
  public conteudo: void;
  public usuario: void;

  constructor(conteudo: void, usuario: void) {
    this.conteudo = conteudo;
    this.usuario = usuario;
  }

  abstract criarConteudo(conteudo: void, usuario: void): void;
  abstract adicionarAoFeed(conteudo: void, usuario: void): void;
}

//Subclasse para criar uma postagem
class Postagem extends Conteudo {
  criarConteudo(conteudo: void, usuario: void): void {
    console.log("Postagem publicada com sucesso!");
  }
  adicionarAoFeed(conteudo: void, usuario: void): void {
    console.log("Postagem adicionada ao Feed com sucesso!");
  }
}

//Subclasse para criar um Story
class Story extends Conteudo {
  criarConteudo(conteudo: void, usuario: void): void {
    console.log("Story publicado com sucesso!");
  }
  adicionarAoFeed(conteudo: void, usuario: void): void {
    console.log("Story adicionado ao Feed com sucesso!");
  }
}

//Classe para criar uma mensagem
class Mensagem {
  protected mensagem: string;
  protected remetente: void;
  protected destinatario: void;

  constructor(mensagem: string, rememente: void, destinatario: void) {
    this.mensagem = mensagem;
    this.remetente = rememente;
    this.destinatario = destinatario;
  }

  enviarMensagem(mensagem: string, rememente: void, destinatario: void): void {
    console.log("Mensagem enviada com sucesso");
    console.log("\n---------------------------");
    console.log(`Destinatário: ${this.destinatario}\n`);
    console.log(`Remetente: ${this.remetente}\n`);
    console.log(`Conteúdo: ${this.mensagem}\n`);
  }
}

//Subclasse para Comentário em um Post
class Resposta extends Mensagem {
  public postagem: void;

  constructor(
    mensagem: string,
    remetente: void,
    destinatario: void,
    postagem: void
  ) {
    super(mensagem, remetente, destinatario);
    this.postagem = postagem;
  }

  criarComentário(
    mensagem: string,
    remetente: void,
    destinatario: void,
    postagem: void
  ): void {
    console.log("Comentário enviada com sucesso");
  }
}
