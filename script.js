let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//let soma = 0;
//for (let i = 0; i < numbers.length; i += 1) {
//    soma += (numbers[i]);
//}
//let valorFinal = soma/numbers.length;
//console.log(valorFinal);

//if (valorFinal > 20) {
//    console.log("valor maior que 20");
//} else {
//    console.log("valor menor ou igual a 20");
//}

//ex5
//let maiorValor = 0;
//for (let i = 0; i < numbers.length; i += 1) {
//    if (maiorValor < (numbers[i])) {
//        maiorValor = (numbers[i]);
//    } else {
//        maiorValor = maiorValor;
//    }
//}
//console.log(maiorValor);

//abaixo, se a lista é de números pares, tá dando 1. (ex6)
let valoresImpares = 0;
for (let number of numbers) {
    if (number % 2 == 1) {
        valoresImpares += 1;
    }
}
    if (valoresImpares == 0) {
        console.log("nenhum valor ímpar encontrado");
    } else {
        console.log(valoresImpares);
    }










