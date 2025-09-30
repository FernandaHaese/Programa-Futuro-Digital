// Que nem no javascript, você tem alguns tipos primitivos:

// number = Qualquer número inteiro ou fracional 
let meuNum:number = 3;

// string = Cadeias de caracteres
const minhaStr: string = "Olá mundo";

// boolean - Valores verdadeiro/falso
let minhaBool: boolean = true;

// Existe também o tipo any, que indica que qualquer tipo é permitido, mas não é aconselhavel na maioria das situações
let meuAny:any=3;
meuAny=true;
meuAny="Olá";

// Posso também compor tipos, como em arrays

const arrayDeNums: Array<number> = [1,2,3,4,7,323,2]; // Esse Array<number> indica que é um array de números espepcificamente

const arrayStr: Array<string> = ["Oi","tudo","bem?"]; // Um array de strings

const arrayDeArray: Array<Array<number>> = [[1,2],[52,4],[54,3]]; // Até arrays de arrays
