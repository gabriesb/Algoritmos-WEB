function mostrarFormulario(id) {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => form.style.display = 'none');
    document.getElementById('resultado').textContent = '';
    document.getElementById('form-' + id).style.display = 'block';
  }

  // Somatório
  function calcularSomatorio(event) {
    event.preventDefault();
    const input = document.getElementById('somatorio-numeros').value;
    const nums = input.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
    const soma = nums.reduce((acc, cur) => acc + cur, 0);
    document.getElementById('resultado').textContent = `Somatório: ${soma}`;
  }

  // Ordenação (crescente)
  function calcularOrdenacao(event) {
    event.preventDefault();
    const input = document.getElementById('ordenacao-numeros').value;
    const nums = input.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
    nums.sort((a,b) => a-b);
    document.getElementById('resultado').textContent = `Números ordenados (crescente):\n${nums.join(', ')}`;
  }

  // Fibonacci
  function calcularFibonacci(event) {
    event.preventDefault();
    const termos = parseInt(document.getElementById('fibonacci-termos').value);
    let fib = [0,1];
    if (termos === 1) fib = [0];
    else if (termos === 2) fib = [0,1];
    else {
      for(let i=2; i<termos; i++){
        fib[i] = fib[i-1] + fib[i-2];
      }
    }
    document.getElementById('resultado').textContent = `Fibonacci (${termos} termos):\n${fib.slice(0, termos).join(', ')}`;
  }

  // MDC usando algoritmo de Euclides
  function calcularMDC(event) {
    event.preventDefault();
    let a = Math.abs(parseInt(document.getElementById('mdc-num1').value));
    let b = Math.abs(parseInt(document.getElementById('mdc-num2').value));
    if (b === 0) {
      document.getElementById('resultado').textContent = `MDC: ${a}`;
      return;
    }
    while(b) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    document.getElementById('resultado').textContent = `MDC: ${a}`;
  }

  // Verificar número primo
  function verificarPrimo(event) {
    event.preventDefault();
    const n = parseInt(document.getElementById('primo-numero').value);
    if (n < 2) {
      document.getElementById('resultado').textContent = `${n} não é primo.`;
      return;
    }
    let isPrimo = true;
    for(let i=2; i<=Math.sqrt(n); i++){
      if (n % i === 0){
        isPrimo = false;
        break;
      }
    }
    document.getElementById('resultado').textContent = isPrimo ? `${n} é primo.` : `${n} não é primo.`;
  }

  // Contagem de 1 até o número
  function calcularContagem(event) {
    event.preventDefault();
    const n = parseInt(document.getElementById('contagem-numero').value);
    let contagem = [];
    for(let i=1; i<=n; i++){
      contagem.push(i);
    }
    document.getElementById('resultado').textContent = `Contagem de 1 até ${n}:\n${contagem.join(', ')}`;
  }

  // Inicializar mostrando o somatório por padrão
  mostrarFormulario('somatorio');
