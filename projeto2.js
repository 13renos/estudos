// Jogo de adivinhação de números
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function adivinharNumero() {
    const palpite = parseInt(prompt("Adivinhe o número entre 1 e 100:"));
    tentativas++;

    if (palpite === numeroSecreto) {
        alert(`Parabéns! Você adivinhou o número em ${tentativas} tentativas.`);
    } else if (palpite < numeroSecreto) {
        alert("O número secreto é maior. Tente novamente.");
        adivinharNumero();
    } else if (palpite > numeroSecreto) {
        alert("O número secreto é menor. Tente novamente.");
        adivinharNumero();
    } else {
        alert("Entrada inválida. Por favor, insira um número.");
        adivinharNumero();
    }
}_
// Inicia o jogo
adivinharNumero();