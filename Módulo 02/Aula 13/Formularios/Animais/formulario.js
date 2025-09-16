//Criar uma página de registro e listagem de animais. Utilizem FormData ára capturar os dados do formulário de registro e, embaixo, criem a lista de pets dinamicamente com o createEle,emt
//Dica: Criem um método de fábrica de pets e um array pra guardar todos pets registrados

const form = document.getElementById("formulario");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const especie = document.getElementById("especie").value;
  const raca = document.getElementById("raca").value;
  const idade = document.getElementById("idade").value;
  const consulta = document.getElementById("consulta").value;
  alert(
    `Cadastro concluído!\nNome: ${nome}\nEspécie: ${especie}\nRaça: ${raca}\nIdade: ${idade}\nConsulta: ${consulta}`
  );
});

const pets = [
  {
    nome: "",
    especie: "",
    raca: "",
    idade: "",
    consulta: "",
  },
];

const container = document.getElementById("container-cards");

pets.forEach((pet) => {
  const card = document.createElement("div");
  card.classList.add("pet-card");

  const nome = document.createElement("p");
  nome.innerText = `Nome: ${pet.nome}`;

  const especie = document.createElement("p");
  especie.innerText = `Espécie: ${pet.especie}`;

  const raca = document.createElement("p");
  raca.innerText = `Raça: ${pet.raca}`;

  const idade = document.createElement("p");
  idade.innerText = `Idade: ${pet.idade} anos`;

  const consulta = document.createElement("p");
  consulta.innerText = `Consulta: ${pet.consulta}`;

  card.appendChild(nome);
  card.appendChild(especie);
  card.appendChild(raca);
  card.appendChild(idade);
  card.appendChild(consulta);
  container.appendChild(card);
});
