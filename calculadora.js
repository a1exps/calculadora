let botoes = document.querySelectorAll("button");

//Laço de repetição que percorre todos dos botões da calculadora
botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        console.log(botao);
    })
});
