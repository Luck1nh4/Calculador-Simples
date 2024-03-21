document.addEventListener('DOMContentLoaded', function() {
    const select = document.querySelector('#operacoes');
    let numInput = document.querySelector('#numero');
    let numInput2 = document.querySelector('#numero_2');
    let resultado = document.querySelector('.resultado span');

    const calc = document.getElementById('calc').addEventListener('click', () => {
        const option = parseInt(select.value);
        const num1 = parseFloat(numInput.value);
        const num2 = parseFloat(numInput2.value);

        if (isNaN(num1) || isNaN(num2)) {
            resultado.textContent = "Digite valores válidos.";
            return;
        }

        let res;

        switch (option) {
            case 1:
                res = soma(num1, num2);
                break;
            case 2:
                res = subtracao(num1, num2);
                break;
            case 3:
                res = multiplicacao(num1, num2);
                break;
            case 4:
                res = divisao(num1, num2);
                break;
            default:
                resultado.textContent = "Escolha uma operação válida.";
                return;
        }

        resultado.textContent = res;
        numInput.value = '';
        numInput2.value = '';
    });

    function soma(x, y) {
        return x + y;
    }

    function subtracao(x, y) {
        return x - y;
    }

    function multiplicacao(x, y) {
        return x * y;
    }

    function divisao(x, y) {
        if (y === 0) {
            alert("Não é possível dividir por zero.")
            return;
        }
        return x / y;
    }
});
