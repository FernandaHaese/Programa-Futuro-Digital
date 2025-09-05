// Q2.A) Crie duas novas variavéis (sem ser constantes) com sua idade e o ano atual;
let idade = 25;
let ano = 2025;
// Q2.B) Crie uma nova função idadeEmAno(idadeAgr,anoAgr,anoDesejado), que calcula que idade você terá no anoDesejado dado
function idadeEmAno(idadeAgr, anoAgr, anoDesejado) {
  return idadeAgr + (anoDesejado - anoAgr);
}

// Q2.C) Use essa função para calcular sua idade em 2030 e imprimir `Em 2030, eu terei IDADE EM 2030 anos.`, com a idade correta.
console.log("Em 2030, eu terei " + idadeEmAno(25, 2025, 2030) + " anos.");

/* Q2.D) Crie uma nova função chamada mostrarAnosEIdade(idadeAgr, anoAgr, anoDesejado)
        Essa função deve usar um for e a função idadeEmAno para mostrar para cada ano,
        começando em anoAgr e terminando em anoDesejado, a frase `Em ANO, eu terei IDADE anos.`,
        com a idade e o ano corretos.*/
function mostrarAnosEIdade(idadeAgr, anoAgr, anoDesejado) {
  for (let ano = anoAgr; ano <= anoDesejado; ano++) {
    let idade = idadeEmAno(idadeAgr, anoAgr, ano);
    console.log(`Em ${ano}, eu terei ${idade} anos.`);
  }
}

// Q2.E) Utilize a função mostrarAnosEIdade para mostrar suas idades em todos os ano até 2035
mostrarAnosEIdade(idade, ano, 2035);
