

const form = document.getElementById("meuForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();  // Impede o comportamento padrão do submit, que é recarregar a página

    //Podemos usar o FormData para lidar com todos os imputs de uma forma mais fácil.
    const formData = new FormData(form);

    //Podemos converter ele para um objeto
    const data = Object.fromEntries(formData.entries());

    //Ou podemos pegar os valores individualmente
    const nome = formData.get("mensagem");
    const selUn = formData.get("selUnica");

    //Onde tem multiplos valores, como no caso de checkbox ou select multiple, usamos getAll
    const selMul = formData.getAll("selMultipla");

    alert(`Dados do Formulário:\n` +
          `Mensagem: ${nome}\n` +
          `Seleção Única: ${selUn}\n` +
          `Seleção Múltipla: ${selMul.join(", ")}\n\n`);


    /// Ou até mesmo iterar sobre os pares chave/valor
    for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }

    // Ou só os valores
    for (const value of formData.values()) {
        console.log(value);
    }

    //Ou só as chaves
    for (const key of formData.keys()) {
        console.log(key);
    }
});