let botoes = document.querySelectorAll("button");
let display = document.getElementById("display");
const numero = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operadores = ["+", "-", "*", "/", "="];
let primeiroNumero = "";
let segundoNumero = "";
let operador = "";
//console.log(display);

//Laço de repetição que percorre todos dos botões da calculadora
botoes.forEach((botao) => {
    //console.log(botao);
    //evento de click para cada botão
    botao.addEventListener("click", () => {
        //console.log(botao.value);
        //armazena o valor do botão clicado
        const valor = botao.value;
        if (numero.includes(valor)) {
            montarDisplay(valor);
        }
        if (valor.toLowerCase() === "c") {
            limpaDisplay();
        }
        if (valor.toLowerCase() === "backspace") {
            backSpace();
        }

        if (operadores.includes(valor)) {
            if (valor === "=") {
                segundoNumero = Number(display.innerText);
                display.innerText = calcular(primeiroNumero, segundoNumero, operador);
                console.log(primeiroNumero, segundoNumero, operador);
                primeiroNumero = "";
                segundoNumero = "";
                operador = valor;
                return;
            }
            if (primeiroNumero === "") {
                primeiroNumero = Number(display.innerText);
            } else {
                segundoNumero = Number(display.innerText);
                primeiroNumero = calcular(primeiroNumero, segundoNumero, operador);
            }
            if (typeof primeiroNumero === "string") {
                display.innerText = primeiroNumero;
                primeiroNumero = "";
                segundoNumero = "";
                operador = "=";
                return;
            }
            limpaDisplay();
            operador = valor;

            console.log(primeiroNumero, segundoNumero, operador);
        }
    });
});

function calcular(primeiroNumero, segundoNumero, operador) {
    switch (operador) {
        case "+":
            return primeiroNumero + segundoNumero;

        case "-":
            return primeiroNumero - segundoNumero;

        case "*":
            return primeiroNumero * segundoNumero;

        case "/":
            if (segundoNumero === 0) {
                return "Divisão por zero!";
            }
            return primeiroNumero / segundoNumero;
    }
}

function limpaDisplay() {
    display.innerText = "0";
}

function backSpace() {
    let novoDisplay = display.innerText;
    display.innerText = novoDisplay.slice(0, -1);
    if (display.innerText.length === 0) {
        display.innerText = 0;
    }
}


//montar display
function montarDisplay(numEscolhido) {
    //console.log(display.innerText.length);
    let textDisplay = display.innerText;
    //console.log(numEscolhido, textDisplay.includes(".")) //análise dos valores;
    if (numEscolhido === "." && textDisplay.includes(".")) {
        return;
    }

    if (operador === "=") {
        display.innerText = numEscolhido;
        operador = "";
        return;
    }

    //testa se o conteúdo do display tem tamanho 1(1 caractere) e é igual a 0
    if (textDisplay.length === 1 && textDisplay === "0" && numEscolhido !== ".") {
        //substitui o 0 pelo valor recebido
        display.innerText = numEscolhido;
    } else {
        //concatena os valores recebidos
        display.innerText += numEscolhido;
    }
}