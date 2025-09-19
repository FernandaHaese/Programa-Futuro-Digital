document.getElementById("tamanho").addEventListener("click", () => {
    alert(`Tamanho da tela: ${window.screen.width}x${window.screen.height}`);
});

document.getElementById("posicao").addEventListener("click", () => {
    alert(`Path da página: ${window.location}`);
});

document.getElementById("back").addEventListener("click", () => {
    window.history.back();
});