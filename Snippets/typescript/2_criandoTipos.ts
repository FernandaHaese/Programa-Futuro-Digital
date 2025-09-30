// Posso criar meus próprios tipos!
type Musica = {
    nome: string;
    duracao:number;
    artista:string;
};

// Agora posso criar uma função que usa esse tipo

    //Aqui dentro, podemos ter a certeza que faixa será do tipo musica, então podemos usar suas propriedades tranquilamente
const imprimeFaixa = (faixa:Musica) => {
    console.log(`- ${faixa.nome} de ${faixa.artista} com ${faixa.duracao}s de duração.`)
}

// E variaveis com esse tipo:
const mus: Musica = {
    nome:"Chameleon",
    duracao:941,
    artista:"Herbie Hancock"
};


//Agora, posso chamar a função com mais confiança que ela vai funcionar do jeito que espero
imprimeFaixa(mus);

// Posso até usar meu tipo em outros tipos
type Album = {
    nome:string;
    lancamento:Date;
    musicas:Array<Musica>;
};

//E criar funções
const imprimirAlbum = (album: Album) => {
    console.log(`Álbum: ${album.nome}`);
    console.log(`Lançamento: ${album.lancamento.toLocaleDateString()}`);
    console.log("Músicas:");
    album.musicas.forEach((musica) => {
        imprimeFaixa(musica);
    });
};

// Exemplo de uso:
const meuAlbum: Album = {
    nome: "Head Hunters",
    lancamento: new Date("1973-10-26"),
    musicas: [
        mus,
        { nome: "Watermelon Man", duracao: 396, artista: "Herbie Hancock" }
    ]
};

imprimirAlbum(meuAlbum);