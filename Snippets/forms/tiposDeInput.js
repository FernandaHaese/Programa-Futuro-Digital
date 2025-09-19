const form = document.getElementById("formComVariosInputs");



form.addEventListener("submit", (event) => {
    event.preventDefault();  // Impede o comportamento padrão do submit, que é recarregar a página

    const texto = document.querySelector('input[title="texto"]').value;
    const numero = document.querySelector('input[title="numero"]').value;
    const cor = document.querySelector('input[title="cor"]').value;
    const data = document.querySelector('input[title="datas"]').value;

    //Para elementos com validação (email, url, tel), podemos usar a propriedade checkValidity() para verificar se o valor é válido
    const emailInput = document.querySelector('input[title="email"]');
    if (!emailInput.checkValidity()) {
        alert("Por favor, insira um email válido.");
        return; // Sai da função se o email não for válido
    }

    const urlInput = document.querySelector('input[title="url"]');
    if (!urlInput.checkValidity()) {
        alert("Por favor, insira uma URL válida.");
        return; // Sai da função se a URL não for válida
    }

    const telInput = document.querySelector('input[title="tel"]');
    if (!telInput.checkValidity()) {
        alert("Por favor, insira um telefone válido.");
        return; // Sai da função se o telefone não for válido
    }

    // Se todos os campos estiverem válidos, podemos pegar seus valores
    const email = emailInput.value;
    const url = urlInput.value;
    const tel = telInput.value;

    const radioInput = document.querySelector('input[name="radio"]:checked'); //Seleciona a opção de radio que está marcada
    const opcao = radioInput ? radioInput.value : null; // Verifica se algum rádio está selecionado

    const checkInput = document.querySelectorAll('input[name="check"]:checked');  //Pegando todos os checkboxes que estão marcados
    // Se houver checkboxes marcados, convertemos a NodeList para array, mapeamos para pegar os valores e juntamos em uma string separada por vírgulas
    const checked =  checkInput.length > 0 ? Array.from(checkInput).map(checkbox => checkbox.value).join(", ") : null;

    alert("Todos os campos estão preenchidos corretamente!\n" +
          `Texto: ${texto}\n` +
          `Número: ${numero}\n` +
          `Cor: ${cor}\n` +
          `Data: ${data}\n` +
          `Email: ${email}\n` +
          `URL: ${url}\n` +
          `Telefone: ${tel}\n` +
          `Checkbox: ${checked}\n` +
          `Radio: ${opcao}`);
    form.reset(); // Limpa o formulário após o envio
});
