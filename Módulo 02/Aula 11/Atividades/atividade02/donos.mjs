//Tarefa: Separar as duas funções fábricas criadas em dois módulos ESM: pets.mjs e donos.mjs e utilizar eles a partir de um arquivo main.mjs.

//Criar função de fábrica criarDono(nome,celular)
const criarDono = (nome, celular) => {
  return {
    nome,
    celular,
  };
};
export default criarDono;
