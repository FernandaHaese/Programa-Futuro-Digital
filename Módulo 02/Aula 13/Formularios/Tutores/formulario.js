const form = document.getElementById("formulario");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const endereco = document.getElementById("endereco").value;
  const celular = document.getElementById("celular").value;
  const email = document.getElementById("email").value;
  alert(
    `Cadastro concluído!\nNome: ${nome}\nEndereço: ${endereco}\nCelular: ${celular}\nEmail: ${email}`
  );
});

const formData = new formData(form);
const nome = formData.get("nome");