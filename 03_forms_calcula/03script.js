// soma os valores
const btnSoma = document.getElementById("somar");
const resultado = document.getElementById("resultado");

btnSoma.addEventListener("click", () => {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    let soma = parseInt(numero1) + parseInt(numero2);
   

    resultado.innerText = (` O resultado da conta é ${soma}`);
});