const albuns = ["Todos os Olhos","A Divina Comédia ou Ando Meio Desligado","Clube da Esquina","Acabou Chorare","Di Melo"];


const listCont = document.querySelector(".albuns");

albuns.forEach((album) => {
    const albumElement = document.createElement("li");
    albumElement.textContent = album;
    listCont.appendChild(albumElement);
});