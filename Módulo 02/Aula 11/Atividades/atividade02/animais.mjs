//Criar função de fábrica criarAnimal(nome, espécie, raça, idade, dono).
const criarAnimal = (nome, especie, raca, idade, dono, consultas) => {
  return {
    nome,
    especie,
    raca,
    idade,
    dono,
    consultas,
  };
};

export default criarAnimal;
