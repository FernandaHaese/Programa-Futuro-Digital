//Construir duas novas funções fábricos criarDono(nome,celular) e criarAnimal(nome, espécie, raça, idade, dono). Em seguida, use essas funções para adicionar um animal e seu dono.

//Criar função de fábrica criarDono(nome,celular)
const criarDono = (nome, celular) => {
  return {
    nome,
    celular,
  };
};

//Criar função de fábrica criarAnimal(nome, espécie, raça, idade, dono).
const criarAnimal = (nome, especie, raca, idade, dono, consultas) => {
  return {
    nome,
    especie,
    raca,
    idade,
    dono,
    consultas
  };
};

//Usar essas funções para adicionar um novo animal e seu dono.
const Fernanda = criarDono("Fernanda", "21979567674");
const Sofia = criarAnimal("Sofia", "Canina", "Dachshund", 16, Fernanda);

//Imprimir
console.log("\nCriar novo animal Sofia e novo dono Fernanda:");
console.log("\nDono:", Fernanda);
console.log("\nAnimal:", Sofia);

