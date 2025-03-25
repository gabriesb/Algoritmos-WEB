function verificarPrimo() {
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');

    if (numero < 2) {
        resultado.textContent = 'Por favor, insira um número maior que 1.';
        resultado.classList.remove('primo', 'nao-primo');
        return;
    }

    let isPrimo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            isPrimo = false;
            break;
        }
    }

    if (isPrimo) {
        resultado.textContent = 'O número é primo!';
        resultado.classList.add('primo');
        resultado.classList.remove('nao-primo');
    } else {
        resultado.textContent = 'O número não é primo!';
        resultado.classList.add('nao-primo');
        resultado.classList.remove('primo');
    }
}