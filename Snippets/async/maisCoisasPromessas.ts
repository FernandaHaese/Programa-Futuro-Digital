// Mais utilidades com Promessas

// Pega dados de jsonplaceholder.typicode.com
async function pegarDadosAPI(id: number): Promise<any> {
    const resposta = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!resposta.ok) {
        throw new Error("Erro ao buscar dados da API");
    }
    return resposta.json();
}

// Uso normal
pegarDadosAPI(1)
    .then(dados => console.log('\n----------\nUso simples',dados))
    .catch(erro => console.error(erro));


// Promise.all: Espera todas as promessas serem resolvidas
async function pegarMultiplosDados(ids: number[]): Promise<any[]> {
    const promessas = ids.map(id => pegarDadosAPI(id));
    return Promise.all(promessas);
}

pegarMultiplosDados([1, 2, 3])
    .then(dados => console.log('\n----------\nMultiplos dados:', dados))
    .catch(erro => console.error(erro));


  // Promise.race: Retorna a primeira promessa resolvida
async function pegarPrimeiroDado(ids: number[]): Promise<any> {
    const promessas = ids.map(id => pegarDadosAPI(id));
    return Promise.race(promessas);
}

pegarPrimeiroDado([5,6])
    .then(dado => console.log('\n----------\nPrimeiro dado:', dado))
    .catch(erro => console.error(erro));

// Promise.allSettled: Espera todas as promessas serem resolvidas ou rejeitadas
// Diferente do Promise.all, que falha se qualquer promessa falhar
async function pegarTodosDados(ids: number[]): Promise<any[]> {
    const promessas = ids.map(id => pegarDadosAPI(id));
    return Promise.allSettled(promessas);
}

const ids = [7, 9999, 8]; // 9999 não existe e vai causar erro
pegarTodosDados(ids) 
    .then(resultados => {
        console.log('\n----------\nTodos os resultados (sucessos e falhas):');
        resultados.forEach((resultado, index) => {
            if (resultado.status === 'rejected') {
                console.error(`Erro ao pegar dados do ID ${ids[index]}: ${resultado.reason}`);
            } else {
                console.log(`Dados do ID ${ids[index]}: ${JSON.stringify(resultado.value)}`);
            }
        });
    });


// Promise.any: Retorna a primeira promessa cumprida, ignorando rejeições
// Diferente do Promise.race, que retorna a primeira promessa resolvida ou rejeitada
async function pegarPrimeiroDadoSucesso(ids: number[]): Promise<any> {
    const promessas = ids.map(id => pegarDadosAPI(id));
    return Promise.any(promessas);
}

pegarPrimeiroDadoSucesso([9999, 10, 11]) // 9999 não existe e vai causar erro
    .then(dado => console.log('\n----------\nPrimeiro dado com sucesso:', dado))
    .catch(erro => console.error('Todas as promessas falharam:', erro));