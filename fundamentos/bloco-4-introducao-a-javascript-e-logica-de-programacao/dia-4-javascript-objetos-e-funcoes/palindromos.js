function verificaPalindromo(stringRecebida) {
    let resultado = false;
    
    let arrayCriado = stringRecebida.split('');
    arrayCriado.reverse();
    
    let stringRevertida = arrayCriado.join('');
    
    if (stringRecebida === stringRevertida) {
        resultado = true;
    }
    
    return resultado;
}

console.log(verificaPalindromo('arara'));
