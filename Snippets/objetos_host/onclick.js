

const test = () => {
    alert("Você associou uma função js a um clique de botão");
};

const jumpscare = () => {
    alert("BOO!!");
}



document.getElementById("susto").addEventListener("click", jumpscare);
//
document.querySelector(".alerta").addEventListener("click", test);