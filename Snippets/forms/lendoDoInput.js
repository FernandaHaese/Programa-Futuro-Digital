const gatos = [];


const novoGato  =  (nome, idade, raca) => {
    return {nome, idade, raca};
};

gatos.push(novoGato("Mingau", 3, "SRD"));
gatos.push(novoGato("Herbie", 2, "Siamês"));
gatos.push(novoGato("Mingus", 5, "Persa"));

const container = document.getElementById("container");


const mostrarGatos = () => {
    container.innerHTML = "";  //Limpa tudo do container, para não mostrar gatos que já estão lá
    gatos.forEach((gato) => {
        const div = document.createElement("div");
        div.innerHTML = `Nome: ${gato.nome}, Idade: ${gato.idade}, Raça: ${gato.raca}`;
        container.appendChild(div);
    });
}


const form = document.getElementById("gatoForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();  // O event.preventDefault impede ele de recarregar a página,
    // que é o comportamento padrão do submit

    // Usando a propriedade .value para pegar o valor de cada campo do formulario
    const nome = document.getElementById("nome").value;
    const idade = parseInt(document.getElementById("idade").value);
    const raca = document.getElementById("raca").value;

    //Limpando os campos do formulário
    form.reset();

    //Adicionando o novo gato ao array
    gatos.push(novoGato(nome, idade, raca));

    //Mostrando os gatos atualizados
    mostrarGatos();
});

mostrarGatos();