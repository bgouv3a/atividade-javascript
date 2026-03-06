//adiciona Bolas
const btnBolas = document.getElementById("addBola");
let total = 0; //contador de bolas
let bolinhas = "" //conteudo das bolinhas
let bola = '<div class="bolinha"></div>'; //conteudo para adicionar

//acao de clicar
btnBolas.addEventListener("click", () => {
    total = total+1;
    bolinhas = "";
    for (let index = 0; index < total; index++) {
        bolinhas = bolinhas + bola;
    }
    document.getElementById("agrupaBolas").innerHTML = bolinhas
    document.getElementById("contador").innerText = (`Contador de bolinhas:${total}`)
})
