//Função para adaptar quantidade de ingredientes da receita
function adaptarIngredientes(porcoes) {
  //Ingredientes para 1 porção de sanduíche
  const folhasAlface = 2;
  const fatiasTomate = 2;
  const fatiasPresunto = 2;
  const fatiasQueijo = 2;
  const fatiasPao = 2;
  //Imprimir resultado para X porções
  const lista = `Ingredientes para ${porcoes} porções de sanduíches:
1. ${fatiasPao * porcoes} fatias de pão
2. ${fatiasQueijo * porcoes} fatias de queijo
3. ${fatiasPresunto * porcoes} fatias de presunto
4. ${fatiasTomate * porcoes} fatias de tomate
5. ${folhasAlface * porcoes} folhas de alface
    `;
  return lista;
}

//Declarar varialvel da função
const ingredientes = adaptarIngredientes(10);

//Função para mostrar passo a passo da receita
function mostrarReceita() {
  const receita = `Passo a passo:
1. Em um prato, coloque as fatias de pão
2. Em uma das fatias de pão, coloque as fatias de queijo
3. Depois, coloque as fatias de presunto
4. Depois, coloque as folhas de de alface
5. Depois, coloque as fatias de tomate
6. Depois, coloque a outra fatia de pão por cima`;
  return receita;
}

//declarar a função mostrar
const receitas = mostrarReceita();

//declarar variavel que une receitas + ingredientes
let resultado = ingredientes + receitas;

//Tarefa 1: Trocar todos os A e E por U
resultado = resultado.replaceAll("a", "u");
resultado = resultado.replaceAll("e", "u");
//Imprimir o resultado
//console.log(resultado);

//Tarefa 2: Criar uma função para traduzirParaAlien(texto), que troca todos os "a" e "e" por u e coloca todo o texto em maíusculo
function traduzirParaAlien(texto) {
  let tradu = texto.toUpperCase();
  tradu = tradu.replaceAll("A", "U");
  tradu = tradu.replaceAll("E", "U");
  return tradu;
}
//Declarar uma variavel e imprimir o resultado
const traducao = traduzirParaAlien(resultado);
console.log(traducao);
