//Tarefa: Separar as duas funções fábricas criadas em dois módulos ESM: pets.mjs e donos.mjs e utilizar eles a partir de um arquivo main.mjs.

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
