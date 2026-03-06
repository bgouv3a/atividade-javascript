// instancia o objeto botao
const btnTrocaCor = document.getElementById("trocaCor");
let caixaTexto = document.getElementById('caixa');

// evento de clique
btnTrocaCor.addEventListener("click", () => {

    // captura o nome do conteudo
    let caixaTexto = document.getElementById('caixa');

    // valida o nome da cor
    if (caixaTexto.className === "verde") {
        caixaTexto.classList.add('amarelo');
        caixaTexto.classList.remove('verde');
        btnTrocaCor.innerText = (`Clique aqui para mudar a cor para verde!`)
    } else {
        caixaTexto.classList.add('verde');
        caixaTexto.classList.remove('amarelo');
        btnTrocaCor.innerText = (`Clique aqui para mudar a cor para amarelo!`)
    }

    // exibe no console
    console.log(caixaTexto.className);
});




// troca texto
const btnTrocaTexto = document.getElementById("trocaTexto");

btnTrocaTexto.addEventListener("click", () => {
    if (caixaTexto.innerText === "Banana") {
        caixaTexto.innerHTML = "ananaB";
        btnTrocaTexto.innerText = (`Clique aqui para reverter o texto`)
    } else {
        caixaTexto.innerHTML = "Banana";
        btnTrocaTexto.innerText = (`Clique aqui para inverter o texto`)
    }
});


//aumenta texto
const btnAumenta = document.getElementById("aumenta");

btnAumenta.addEventListener("click", () => {
    if (caixaTexto.style.fontSize === "15px" ) {
        caixaTexto.style.fontSize = "30px"
        btnAumenta.innerText = (`Clique aqui para diminuir o texto`)
    } else {
        caixaTexto.style.fontSize = "15px"
        btnAumenta.innerText = (`Clique aqui para aumentar o texto`)
    }
});