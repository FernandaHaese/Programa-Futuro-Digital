//Tarefa: Achar uma receita simples online e criar a função adaptarIngredientes(porcoes) que adapta a lista de ingredientes das receitas para o número dado de porções, utilizando o console.log e formatação de strings para imprimir o resultado

function adaptarIngredientes(porcoes) {
  //Ingredientes para 1 porção de sanduíche
  const folhasAlface = 2;
  const fatiasTomate = 2;
  const fatiasPresunto = 2;
  const fatiasQueijo = 2;
  const fatiasPao = 2;
  //Imprimir resultado para X porções
  console.log(`Ingredientes para ${porcoes} porções de sanduíches:`);
  console.log(`1. ${fatiasPao * porcoes} fatias de pão
2. ${fatiasQueijo * porcoes} fatias de queijo
3. ${fatiasPresunto * porcoes} fatias de presunto
4. ${fatiasTomate * porcoes} fatias de tomate
5. ${folhasAlface * porcoes} folhas de alface.`);
}
//Adaptar ingredientes para servir 10 pessoas
adaptarIngredientes(10);
//Adaptar ingredientes para servir 15 pessoas
adaptarIngredientes(15);
//Adaptar ingredientes para servir 100000000 pessoas
adaptarIngredientes(100000000);

//Tarefa:Criar uma função mostrarReceita() que utiliza o console.log para imprimir a receita escolhida, armazenada em uma string multi-linha. Execute-a após adaptarIngredientes para mostrar a receita e os ingredientes.
function mostrarReceita() {
  const receita = `1.Em um prato, coloque as fatias de pão.
2.Em uma das fatias de pão, coloque as fatias de queijo.
3.Depois, coloque as fatias de presunto.
4.Depois, coloque as folhas de alface.
5.Depois, coloque as fatias de tomate.
6.Depois, coloque a outra fatia de pão por cima.`;
  console.log("Passo a passo:");
  console.log(receita);
}
//Imprimir o passo a passo
mostrarReceita();
