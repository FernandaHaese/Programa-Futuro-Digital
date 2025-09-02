//Sintaxe da string
const nome = "Fernanda";
//Exibindo os dados de uma string
console.log(nome);
//Não é possível usar aspas dentro de uma string, deve-se usar ''
const frase = "Fernanda disse 'Olá'";
//Para identificar algum caractere da sua string, use nomeDaString[]
console.log("A terceira letra do meu nome é", nome[2]);
//Para contar os caracteres de sua string, use lenght
nome.length;
//Para unir strings, utilizamos o operador +
const intro = "Meu nome é " + nome;
console.log(intro);
//Outro exemplo unindo strings, agora com números
const idade = 24;
const fraseidade = "Eu tenho " + idade + " anos.";
console.log(fraseidade);
//Para substituir um valor na string, usamos ${} dentro de ``
console.log(`Meu nome é ${nome} e minha idade é ${idade} anos.`);
//Para adicionar várias linhas, use \n
const poema1 = "Upon a midnight dreary road \nAs pondered weak and weary";
console.log(poema1);
//Outra forma de adicionar várias linhas é usar a crase `` e dar enter para cada nova linha
const poema2 = `Upon a midnight dreary road
As pondered weak and weary`;
console.log(poema2);
