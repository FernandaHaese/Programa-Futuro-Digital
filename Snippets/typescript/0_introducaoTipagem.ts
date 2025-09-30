//Sem tipagem, não podemos garantir que as nossas variáveis ou argumentos são de um certo tipo
const adicionarNumeros = (a, b) => {
  //O Typescript até marca isso como erro
  return a + b;
};

console.log(`Soma de 2 e 3: ${adicionarNumeros(2, 3)}`);
// E isso pode levar a comportamento indesejado quando há um tipo inesperado

console.log(`Soma de '2' e '3': ${adicionarNumeros("2", "3")}`);

//Com o typescript no entanto, podemos definir de antemão quais são os tipos de todas as variáveis e argumentos do noss código
const adicionarNumerosTipado = (a: number, b: number): number => {
  return a + b;
};

console.log(`Soma de 4 e 5: ${adicionarNumerosTipado(4, 5)}`);
//Dessa forma, o typescript vai me avisar sempre que eu tentar fazer algo de errado
//Vejam como o erro fica destacado abaixo:
console.log(`Soma de '4' e '5': ${adicionarNumerosTipado("4", "5")}`);

//Posso também definir o tipo de variaveis assim:
let meuNumero: number = 3;
const minhaString: string = "Olá mundo";
let minhaBoleana: boolean = true;

//Vejam como o erro fica destacado abaixo:
let exemploDeErro: number = "Olá";
