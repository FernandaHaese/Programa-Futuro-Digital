async function DadosAPI(): Promise<any> {
  const resposta = await fetch(`https://meowfacts.herokuapp.com/`);
  if (!resposta.ok) {
    throw new Error("Erro ao buscar dados da API");
  }
  return resposta.json();
}

async function VariosDados(qtd: number) {
  const prom = [];
  for (let index = 0; index < qtd; index++) {
    prom.push(DadosAPI());
  }
  const dados = await Promise.all(prom);
  console.log(dados);
}

VariosDados(4);
