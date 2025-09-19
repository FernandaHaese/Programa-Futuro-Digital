/*
O eventListener é um método que adiciona um ouvinte de eventos que dispara quando um usuário interaje com um elemento. Você pode adicionar vários manipuladores de eventos a um elemento ou adicionar vários manipuladores de eventos do mesmo tipo a um elemento, ou seja, dois eventos de "clique". Além disso, você pode adicionar ouvintes de eventos a qualquer objeto DOM, não apenas aos elementos HTML, ou seja, o objeto window.

Sua sintexe é: 
element.addEventListener(event, function, useCapture);
*/

//Adicionar ouvinte de evento para quando um elemento for clicado

document.getElementById("clique").addEventListener("click", () => {
  alert("Você associou uma função js a um clique de botão");
});

//Adicionar ouvinte de evento para quando o cursor passar por cima de um elemento

document.getElementById("dentro").addEventListener("mouseover", () => {
  document.getElementById("dentro").style.color = "red";
});

//Adicionar ouvinte de evento para quando o cursor sair de cima de um elemento
document.getElementById("fora").addEventListener("mouseout", () => {
  document.getElementById("fora").style.color = "red";
});

//Adicionar ouvinte de evento em objetos DOM, como a window
const alertaRezise = () => {
  alert("Tamanho de tela modificado");
};
window.addEventListener("rezise", alertaRezise);
//Conferir exemplo desse caso depois
