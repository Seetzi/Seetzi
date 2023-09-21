let frases = ["Parabens pela venda", "Venda concluida, parabéns!", "Você é demais, mais uma venda!", "Cliente finalizou o pagamento, venda concluida!"];

function fraseAleatoria() {
   const escolhida = frases.pop();
    // const escolhendoFrase = Math.floor(Math.random() * frases.length);
    return escolhida;
}

const frase1 = fraseAleatoria();
const frase2 = fraseAleatoria();
const frase3 = fraseAleatoria();


console.log(frase1);
console.log(frase2);
console.log(frase3);