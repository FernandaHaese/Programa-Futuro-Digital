
// Uma Promise é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante.
// Ou seja, uma promessa que ali vai ter um valor no futuro, quando a operação assíncrona for concluída.
// Uma Promise pode estar em um dos três estados:
// 1. Pendente (Pending): Estado inicial
// 2. Cumprida (Fulfilled): A operação foi concluída com sucesso
// 3. Rejeitada (Rejected): A operação falhou

Promise<string>
Promise<boolean>
Promise<number>

const promessaSimples = new Promise<string>((resolver, rejeitar) => {
  const sucesso = true;
  
  if (sucesso) {
    // Isso muda o estado da Promise para "cumprida"
    resolver("Dados carregados com sucesso!");
  } else {
    // Isso muda o estado da Promise para "rejeitada".
    rejeitar("Erro ao carregar dados");
  }
});

// Consumindo a Promise
// Usamos .then() para lidar com o caso de sucesso e .catch() para lidar com erros
promessaSimples
  .then((resultado: string) => {
    console.log(resultado); // Sucesso
  })
  .catch((erro: string) => {
    console.error(erro); // Erro (não será executado neste exemplo)
  }).finally(() => {
    console.log("Isso será executado sempre, independente do resultado da Promise.");
  });



//Podemos também encadear vários .then(), cada um processando o resultado do anterior.


// Normalmente, não vamos usar Promises diretamente, mas sim funções que retornam Promises, como fetch().
// Exemplo com fetch() para buscar dados de uma API
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })                        
  .catch((error) => {
    console.error("Error fetching data:", error);
  });