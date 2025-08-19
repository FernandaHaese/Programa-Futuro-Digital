//Sintaxe de uma função
function nomeDaFunção() {
  //Conteúdo da função
}
//Executando uma função:
nomeDaFunção();
//Exemplo de uma função que moveria lápis para uma mesa:
function moverLapisParaMesa() {
  moverMao(esquerda);
  moverMao(baixo);
  pegueLapis();
  moverMao(cima);
  moverMao(direita);
  solteLapis();
}
//WHILE repete um bloco de código enquanto uma condição for verdadeira. Veja um exemplo para mover os lápis para a mesa enquanto houver lápis na mochila:
while (!mochilavazia()) {
  moverlapisparamesa();
}
//IF executa um bloco de código somente se uma condição for verdadeira. Por exemplo, mover lápis para a mesa apenas se forem verdes, usando a função corDoLapis(); que identifica a cor.
if (CorDoLapis() == "verde") {
  moverLapisParaMesa();
  moverLapisParaMesa();
  moverLapisParaMesa();
}
//operadores em javascritpt
while (!mochilaVazia() && existemLapisVerdesNaMochila()) {
  if (corDoLapis() == "verde") {
    moverLapisParaMesa();
  }
}
